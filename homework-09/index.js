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

const todos = {}

Object.defineProperties(todos, {
    todoList: {
        value: [
            {
                name: 'Do homework',
                todoText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                isComplete: true
            },
            {
                name: 'Do something',
                todoText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                isComplete: false
            }
        ],
        writable: true
    },

    list: {
        get() {
            return this.todoList
        }
    },

    addTodo: {
        value: function (reqTodoName, todoText) {
            const findName = this.todoList.find((todo) => todo.name === reqTodoName)

            if ( !findName) {
                const newTodo = {
                    name: reqTodoName,
                    todoText,
                    isComplete: false
                }
                this.todoList.push(newTodo)
            }
        }
    },

    deleteTodo: {
        value: function (reqTodoName) {
            this.todoList = this.todoList.filter((todo) => todo.name !== reqTodoName)
        }
    },

    editTodoText: {
        value: function (reqTodoName, newTodoText) {
            const todo = this.todoList.find((todo) => todo.name === reqTodoName)

            if  (todo) {
                todo.todoText = newTodoText
            }
        }
    },

    editTodoStatus: {
        value: function (reqTodoName) {
            const todo = this.todoList.find((todo) => todo.name === reqTodoName)

            if  (todo) {
                todo.isComplete = !todo.isComplete
            }
        }
    },

    todosCountWithStatus: {
        get() {
            const totalTodosCount = Object.entries(todos.todoList).length
            const todoList = Object.values(todos.todoList)

            const completeTodosCount = todoList.reduce((acc, todo) => {
                if (todo.isComplete) {
                    acc += 1
                }
                return acc
            }, 0)

            const allTodosStatus = {
                total: totalTodosCount,
                complete: completeTodosCount,
                notComplete: totalTodosCount - completeTodosCount
            }

            return allTodosStatus
        }
    }
})

console.log('todos.list ', todos.list)
todos.addTodo(prompt('Write the new task name:'), prompt('Write the new task text:'))
todos.deleteTodo(prompt('Write the name of the task to delete it:'))
todos.editTodoText(prompt('Write the name of the task to edit it:'), prompt('Write new task text:'))
todos.editTodoStatus(prompt('Write the name of the task to edit status:'))
console.log(todos.todosCountWithStatus)

console.log('todos.list ', todos.list)
console.log(Object.getOwnPropertyDescriptors(todos))
