export function checkIsLogged() {
    return !!JSON.parse(localStorage.getItem('Logged'));
}

export async function login(email) {
    const reqBody = JSON.stringify({value: email});
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    try {
        const resp = await fetch(`https://todo.hillel.it/auth/login`, {
            method: 'POST', headers, body: reqBody,
        });
        const {access_token: accessToken} = await resp.json();
        localStorage.setItem('Logged', JSON.stringify({email, token: accessToken}));
    } catch (e) {
        console.log(e);
    }
}

export function logout() {
    return localStorage.removeItem('Logged');
}

export function createTodo(value) {
    return {
        _id: new Date().getTime(),
        value,
        checked: false,
    };
}

export function addTodo(todos, value) {
    return [...todos, createTodo(value)];
}

export function removeTodo(todos, id) {
    return todos.filter((todo) => todo._id !== id);
}

export function toggleTodo(todos, id) {
    return todos.map((todo) => {
        if (todo._id === id) {
            return {...todo, checked: !todo.checked};
        }

        return todo;
    });
}

export function toggleTodos(todos) {
    const isHaveActiveTodos = !!todos.find((todo) => todo.checked === false);
    return todos.map((todo) => ({...todo, checked: isHaveActiveTodos}));
}

export function clearCompletedTodos(todos) {
    return todos.filter((todo) => !todo.checked);
}

export function updateTodo(todos, id, todo) {
    return todos.map((eachTodo) => {
        if (eachTodo._id === id) {
            return {...eachTodo, ...todo};
        }

        return eachTodo;
    });
}

export function filterTodos(todos, filter) {
    // console.log('todos in filterTodos: ', todos);

    if (filter === 'active') {
        return todos.filter((todo) => !todo.checked);
    }

    if (filter === 'completed') {
        return todos.filter((todo) => todo.checked);
    }

    return todos;
}

export function countItems(todos) {
    // console.log('todos ', todos);

    if (todos !== undefined) {
        const all = todos.length;
        const left = todos.filter((todo) => !todo.checked).length;
        const completed = todos.filter((todo) => todo.checked).length;
        return {all, left, completed};
    } else {
        return {all: 0, left: 0, completed: 0};
    }
}

export async function getList() {
    const {token} = JSON.parse(localStorage.getItem('Logged')) ? JSON.parse(localStorage.getItem('Logged')) : false;

    // console.log('token in getList: ', token);

    if ( !!token) {
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${ token }`);
        headers.set('Content-Type', 'application/json');
        try {
            const resp = await fetch(`https://todo.hillel.it/todo`, {
                method: 'GET', headers,
            });

            return await resp.json();
        } catch (e) {
            console.log(e);
        }
    }
}

