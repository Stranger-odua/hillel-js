const baseUrl = 'https://todo.hillel.it';
const defaultPriority = 1;

export function checkIsLogged() {
    return !!JSON.parse(localStorage.getItem('Logged'));
}

export async function login(email) {
    const reqBody = JSON.stringify({value: email});
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    try {
        const resp = await fetch(`${ baseUrl }/auth/login`, {
            method: 'POST', headers, body: reqBody,
        });
        const {access_token: accessToken} = await resp.json();
        localStorage.setItem('Logged', JSON.stringify({email, token: accessToken}));
    } catch (e) {
        console.log(e);
    }
}

export function logout() {
    localStorage.removeItem('Logged');
}

export async function addTodo(todos, value, priority = defaultPriority) {
    const reqBody = JSON.stringify({value, priority});
    const {token} = JSON.parse(localStorage.getItem('Logged'));
    const isAvailableTask = !!todos.find((task) => task.value === value);

    const headers = new Headers();
    headers.set('Authorization', `Bearer ${ token }`);
    headers.set('Content-Type', 'application/json');

    if ( !isAvailableTask) {
        const resp = await fetch(`${ baseUrl }/todo`, {
            method: 'POST', headers, body: reqBody,
        });

        const task = await resp.json();
        return [...todos, task];
    }
    return todos;
}

export async function removeTodo(todos, id) {
    const {token} = JSON.parse(localStorage.getItem('Logged'));
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${ token }`);
    headers.set('Content-Type', 'application/json');
    await fetch(`${ baseUrl }/todo/${ id }`, {
        method: 'DELETE', headers,
    });

    return todos.filter((task) => task._id !== id);
}

export async function toggleTodo(todos, id) {
    const {token} = JSON.parse(localStorage.getItem('Logged'));
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${ token }`);
    headers.set('Content-Type', 'application/json');

    const resp = await fetch(`${ baseUrl }/todo/${ id }/toggle`, {
        method: 'PUT', headers,
    });

    const toggledTask = await resp.json();

    return todos.map((task) => {
        if (task._id === toggledTask._id) {
            return {...task, checked: !task.checked};
        }

        return task;
    });
}

export async function toggleTodos(todos) {
    const areThereActiveTasks = !!todos.find((todo) => todo.checked === false);
    const toggledTaskIds = todos.reduce((ids, task) => {
        if (task.checked === !areThereActiveTasks) ids.push(task._id);
        return ids;
    }, []);

    const {token} = JSON.parse(localStorage.getItem('Logged'));
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${ token }`);
    headers.set('Content-Type', 'application/json');

    for (const id of toggledTaskIds) {
        const resp = await fetch(`${ baseUrl }/todo/${ id }/toggle`, {
            method: 'PUT', headers,
        });

        const toggledTask = await resp.json();
        todos.forEach((todo) => {
            if (todo._id === toggledTask._id) {
                todo.checked = toggledTask.checked;
            }
        });
    }

    return [...todos];
}

export async function clearCompletedTodos(todos) {
    const remainingTasks = [];
    const clearedTaskIds = todos.reduce((ids, task) => {
        if (task.checked) {
            ids.push(task._id);
        } else {
            remainingTasks.push(task);
        }
        return ids;
    }, []);

    const {token} = JSON.parse(localStorage.getItem('Logged'));
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${ token }`);
    headers.set('Content-Type', 'application/json');

    for (const id of clearedTaskIds) {
        await fetch(`${ baseUrl }/todo/${ id }`, {
            method: 'DELETE', headers,
        });
    }

    return remainingTasks;
}

export async function updateTodo(todos, id, todo, priority = defaultPriority) {
    console.log(`todo in updateTodo 131`, todo);

    const {token} = JSON.parse(localStorage.getItem('Logged'));
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${ token }`);
    headers.set('Content-Type', 'application/json');
    const reqBody = JSON.stringify({value: todo.value, priority});

    const resp = await fetch(`${ baseUrl }/todo/${ id }`, {
        method: 'PUT', headers, body: reqBody,
    });

    const editedTask = await resp.json();

    return todos.map((eachTodo) => {
        if (eachTodo._id === editedTask._id) {
            return {...eachTodo, ...todo};
        }

        return eachTodo;
    });
}

export function filterTodos(todos, filter) {
    if (filter === 'active') {
        return todos.filter((todo) => !todo.checked);
    }

    if (filter === 'completed') {
        return todos.filter((todo) => todo.checked);
    }

    return todos;
}

export function countItems(todos) {
    if (todos.length > 0) {
        const all = todos.length;
        const left = todos.filter((todo) => !todo.checked).length;
        const completed = todos.filter((todo) => todo.checked).length;
        return {all, left, completed};
    } else {
        return {all: 0, left: 0, completed: 0};
    }
}

export async function getList() {
    const {token} = JSON.parse(localStorage.getItem('Logged'))
        ? JSON.parse(localStorage.getItem('Logged'))
        : false;

    if ( !!token) {
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${ token }`);
        headers.set('Content-Type', 'application/json');
        try {
            const resp = await fetch(`${ baseUrl }/todo`, {
                method: 'GET', headers,
            });

            const result = await resp.json();
            return await result;
        } catch (e) {
            console.log(e);
        }
    }
}
