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
      value: {
         'Do homework': {
            todoText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            isComplite: true
         },
         'Do something': {
            todoText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            isComplite: false
         }
      }
   },

   list: {
      get () {
         return this.todoList
      }
   },

   addTodo: {
      value: function () {
         const reqTodoName = prompt('Write the new task name:')
         const todoText = prompt('Write the new task text:')
         if ( !this.todoList[reqTodoName]) {
            this.todoList[reqTodoName] = {
               todoText,
               isComplite: false
            }
         } else {
            alert('This task already exists!')
         }
      }
   },

   deleteTodo: {
      value: function () {
         const reqTodoName = prompt('Write the name of the task to delete it:')
         if (this.todoList[reqTodoName]) {
            delete this.todoList[reqTodoName]
         } else {
            alert('No such task exists!')
         }
      }
   },

   editTodoText: {
      value: function () {
         const reqTodoName = prompt('Write the name of the task to edit it:')
         const newTodoText = prompt('Write new task text:')
         const task = this.todoList[reqTodoName]
         if (task) {
            task['todoText'] = newTodoText
         } else {
            alert('No such task exists!')
         }
      }
   },

   editTodoStatus: {
      value: function () {
         const reqTodoName = prompt('Write the name of the task to edit status:')
         const task = this.todoList[reqTodoName]
         if (task) {
            task['isComplite'] = !task['isComplite']
         } else {
            alert('No such task exists!')
         }
      }
   },

   todosCountWithStatus: {
      get: function () {
         const totalTodosCount = Object.entries(todos.todoList).length
         const todoList = Object.values(todos.todoList)

         const compliteTodosCount = todoList.reduce((acc, todo) => {
            if (todo.isComplite) {
               acc += 1
            }
            return acc
         }, 0)

         const allTodosStatus = {
            total: totalTodosCount,
            complite: compliteTodosCount,
            notComplite: totalTodosCount - compliteTodosCount
         }

         return allTodosStatus
      }
   }
})


console.log(todos.list)
todos.addTodo()
todos.deleteTodo()
todos.editTodoText()
todos.editTodoStatus()
console.log(todos.todosCountWithStatus)

console.log(Object.getOwnPropertyDescriptors(todos))