export function createTodo(title) {
    return {
        id: new Date().getTime(),
        title,
        completed: false,
    };
}

export function addTodo(todos, title) {
    return [...todos, createTodo(title)];
}

export function removeTodo(todos, id) {
    return todos.filter((todo) => todo.id !== id);
}

export function toggleTodo(todos, id) {
    return todos.map((todo) => {
        if (todo.id === id) {
            return {...todo, completed: !todo.completed};
        }

        return todo;
    });
}

export function toggleTodos(todos) {
    const isHaveActiveTodos = !!todos.find((todo) => todo.completed === false);
    return todos.map((todo) => ({...todo, completed: isHaveActiveTodos}));
}

export function clearCompletedTodos(todos) {
    return todos.filter((todo) => !todo.completed);
}

export function updateTodo(todos, id, todo) {
    return todos.map((eachTodo) => {
        if (eachTodo.id === id) {
            return {...eachTodo, ...todo};
        }

        return eachTodo;
    });
}

export function filterTodos(todos, filter) {
    if (filter === 'active') {
        return todos.filter((todo) => !todo.completed);
    }

    if (filter === 'completed') {
        return todos.filter((todo) => todo.completed);
    }

    return todos;
}

export function countItems(todos) {
    return todos.length;
}

export function itemsLeftCount(todos) {
    return todos.filter((todo) => !todo.completed).length;
}
