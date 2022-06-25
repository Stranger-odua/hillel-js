const todos = {};

Object.defineProperties(todos, {
    list: {
        value: [],
    },

    addTodo: {
        value: function (e) {
            e.preventDefault();
            e.stopPropagation();
            const { taskName, taskText } = e.target.elements;
            const areTodoNameExist = this.list.find(task => task.name === taskName.value);

            if (!taskName.value || !taskText.value) {
                return;
            }

            if (!areTodoNameExist) {
                const newTodo = {
                    name: taskName.value,
                    text: taskText.value,
                    isComplete: false,
                };
                this.list.push(newTodo);

                taskName.value = '';
                taskText.value = '';
                this.showTodos();
            }
        },
    },

    deleteTodo: {
        value: function (e) {
            const taskNametoDelete = e.target.parentNode.parentNode.firstElementChild.nextSibling.firstChild.value;
            const ul = e.target.parentNode.parentNode.parentNode;
            const deletedIndex = this.list.findIndex(task => task.name === taskNametoDelete);
            const deleteCount = 1;
            this.list.splice(deletedIndex, deleteCount);
            ul.innerHTML = '';
            this.showTodos();
        },
    },

    editTodoText: {
        value: function (e) {
            if (e.target.hasAttribute('readonly')) {
                e.target.removeAttribute('readonly');
            } else {
                if (e.code === 'Escape') {
                    this.showTodos();
                }

                const forEditTaskIndex = this.list.findIndex(
                    task => task.name === e.target.previousElementSibling.value
                );

                this.list[forEditTaskIndex].text = e.target.value;
                e.target.setAttribute('readonly', 'readonly');
            }
        },
    },

    changeTodoStatus: {
        value: function (e) {
            const li = e.target.parentNode.parentNode;
            li.classList.contains('checked') ? li.classList.remove('checked') : li.classList.add('checked');
            const targetName = e.target.parentNode.nextSibling.firstChild.value;
            const forChangeStatusTaskIndex = this.list.findIndex(task => task.name === targetName);
            this.list[forChangeStatusTaskIndex].isComplete = !this.list[forChangeStatusTaskIndex].isComplete;
            this.todosStatus();
        },
    },

    showTodos: {
        value: function () {
            const ul = document.querySelector('ul.list');
            ul.innerHTML = '';

            this.list.forEach(todo => {
                const li = document.createElement('li');
                const checkBoxContainer = document.createElement('div');
                const checkboxInput = document.createElement('input');
                const nameInput = document.createElement('input');
                const textArea = document.createElement('textarea');
                const check = document.createElement('span');
                const txtContainer = document.createElement('div');
                const deleteBtn = document.createElement('button');
                const img = document.createElement('img');

                li.classList.add('card');
                checkBoxContainer.classList.add('checkbox-container');
                checkboxInput.classList.add('checkbox-input');
                nameInput.classList.add('text-input');
                textArea.classList.add('text-area');
                check.classList.add('check');
                txtContainer.classList.add('txt-container');
                deleteBtn.classList.add('delete');

                checkboxInput.setAttribute('type', 'checkbox');
                nameInput.setAttribute('readonly', 'readonly');
                textArea.setAttribute('readonly', 'readonly');
                img.setAttribute('alt', 'Delete it');
                img.setAttribute('src', './images/icon-cross.svg');

                nameInput.value = todo.name;
                textArea.value = todo.text;
                if (todo.isComplete) {
                    li.classList.add('checked');
                    checkboxInput.setAttribute('checked', 'checked');
                }

                deleteBtn.append(img);
                txtContainer.append(nameInput, textArea);
                checkBoxContainer.append(checkboxInput, check);
                li.append(checkBoxContainer, txtContainer, deleteBtn);
                ul.append(li);
            });

            this.todosStatus();
        },
    },

    todosStatus: {
        value: function () {
            if (this.list.length) {
                const itemsLeft = document.querySelector('span.items-left');
                const itemsDone = document.querySelector('span.items-done');
                const itemsAll = document.querySelector('span.items-all');
                const allTodosCount = this.list.length;
                const addCount = 1;
                const initialCompletedTaskCount = 0;
                const completedTodos = this.list.reduce((completed, task) => {
                    if (task.isComplete) {
                        // eslint-disable-next-line no-param-reassign
                        completed += addCount;
                    }
                    return completed;
                }, initialCompletedTaskCount);
                const todosLeft = allTodosCount - completedTodos;

                itemsLeft.textContent = `${todosLeft} left`;
                itemsDone.textContent = `${completedTodos} done`;
                itemsAll.textContent = `${allTodosCount} all`;
            }
        },
    },
});

const { addForm } = document.forms;
addForm.addEventListener('submit', todos.addTodo.bind(todos));

const list = document.createElement('ul');
list.classList.add('list');
addForm.after(list);

list.addEventListener(
    'click',
    e => {
        e.stopPropagation();
        if (e.target.nodeName === 'IMG') {
            todos.deleteTodo(e);
        }

        if (e.target.type === 'checkbox') {
            todos.changeTodoStatus(e);
        }
    },
    true
);

list.addEventListener(
    'dblclick',
    e => {
        e.stopPropagation();
        if (e.target.classList.contains('text-area')) {
            todos.editTodoText(e);
        }
    },
    true
);

list.addEventListener(
    'focusout',
    e => {
        e.stopPropagation();
        if (e.target.classList.contains('text-area')) {
            todos.editTodoText(e);
        }
    },
    true
);

list.addEventListener(
    'keydown',
    e => {
        e.stopPropagation();
        if (e.code === 'Enter' && e.target.classList.contains('text-area')) {
            todos.editTodoText(e);
        }
    },
    true
);

list.addEventListener(
    'keydown',
    e => {
        e.stopPropagation();
        if (e.code === 'Escape' && e.target.classList.contains('text-area')) {
            todos.editTodoText(e);
        }
    },
    true
);
