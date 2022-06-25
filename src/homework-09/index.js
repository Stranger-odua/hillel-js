/* eslint-disable */
/*
TODO Вам нужно создать список задач, который умеет:
     * добавлять новые задачи и проверять их уникальность. Если такая задача есть, то не добавляем.
       У каждой задачи есть состояние - выполнена или нет, название и текст.
     * удалять задачу
     * редактировать задачу
     * выводить общее количество задач, сколько выполнили и сколько осталось(тут нужно выводить объект с соответствующими полями)
TODO Вам нужно оформить это, как объект с методами. Все свойства и методы листа, должны быть заблокированны на удаление и изменение с помощью дескрипторов.
     Но в сам объект можно расширять - это ок
 */

const todos = {};

Object.defineProperties(todos, {
    list: {
        value: [
            {
                name: 'Do homework',
                todoText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                isComplete: true,
            },
            {
                name: 'Do something',
                todoText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                isComplete: false,
            },
        ],
    },

    addTodo: {
        value: function (reqTodoName, todoText) {
            const findName = this.list.find(todo => todo.name === reqTodoName);

            if (!findName) {
                const newTodo = {
                    name: reqTodoName,
                    todoText,
                    isComplete: false,
                };
                this.list.push(newTodo);
            }
        },
    },

    deleteTodo: {
        value: function (reqTodoName) {
            this.list.forEach((todo, i) => {
                if (reqTodoName === todo.name) {
                    this.list.splice(i, 1);
                }
            });
        },
    },

    editTodoText: {
        value: function (reqTodoName, newTodoText) {
            const todo = this.list.find(todo => todo.name === reqTodoName);

            if (todo) {
                todo.todoText = newTodoText;
            }
        },
    },

    editTodoStatus: {
        value: function (reqTodoName) {
            const todo = this.list.find(todo => todo.name === reqTodoName);

            if (todo) {
                todo.isComplete = !todo.isComplete;
            }
        },
    },

    todosCountWithStatus: {
        get() {
            const completeTodosCount = this.list.reduce((acc, todo) => {
                if (todo.isComplete) {
                    acc += 1;
                }

                return acc;
            }, 0);

            return {
                total: this.list.length,
                complete: completeTodosCount,
                notComplete: this.list.length - completeTodosCount,
            };
        },
    },
});

console.log('todos.list ', todos.list);
todos.addTodo(prompt('Write the new task name:'), prompt('Write the new task text:'));
todos.deleteTodo(prompt('Write the name of the task to delete it:'));
todos.editTodoText(prompt('Write the name of the task to edit it:'), prompt('Write new task text:'));
todos.editTodoStatus(prompt('Write the name of the task to edit status:'));
console.log(todos.todosCountWithStatus);

console.log(Object.getOwnPropertyDescriptors(todos));
console.log('todos.list ', todos.list);
