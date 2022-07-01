function TodoListModel() {
    this.list = [];
}

TodoListModel.prototype.add = function (name, text) {
    const areTodoNameExist = this.list.findIndex(task => task.taskName === name);

    if (areTodoNameExist) {
        const task = {
            name,
            text,
            isComplete: false,
        };
        this.list.push(task);
    }
};

TodoListModel.prototype.delete = function (name) {
    const deleteTask = this.list.findIndex(task => task.name === name);
    const deleteCount = 1;
    this.list.splice(deleteTask, deleteCount);
};

TodoListModel.prototype.edit = function (name, newText) {
    const editTask = this.list.findIndex(task => task.name === name);
    this.list[editTask].text = newText;
};

TodoListModel.prototype.changeStatus = function (name) {
    const changeStatusTask = this.list.findIndex(task => task.name === name);
    this.list[changeStatusTask].isComplete = !this.list[changeStatusTask].isComplete;
};

TodoListModel.prototype.getStatusesCount = function () {
    const allTasks = this.list.length;
    const addCount = 1;
    const initialCompletedTaskCount = 0;
    const completedTasks = this.list.reduce((completed, task) => {
        if (task.isComplete) {
            // eslint-disable-next-line no-param-reassign
            completed += addCount;
        }
        return completed;
    }, initialCompletedTaskCount);
    const leftTasks = allTasks - completedTasks;
    const statusesCount = {
        allTasks,
        completedTasks,
        leftTasks,
    };
    return statusesCount;
};

function TodoListView(model) {
    this.model = model;
    this.form = document.querySelector('.add');
    this.ul = document.createElement('ul');
    this.ul.classList.add('list');
    const stats = document.createElement('div');
    stats.classList.add('card');
    stats.classList.add('stats');

    this.renderList = function () {
        this.ul.innerHTML = '';
        if (!this.model.list.length) return;
        const fragment = new DocumentFragment();

        for (const task of this.model.list) {
            const li = document.createElement('li');
            const checkBoxContainer = document.createElement('div');
            const checkboxInput = document.createElement('input');
            const taskName = document.createElement('input');
            const taskText = document.createElement('input');
            const check = document.createElement('span');
            const txtContainer = document.createElement('div');
            const deleteBtn = document.createElement('button');
            const img = document.createElement('img');

            li.classList.add('card');
            checkBoxContainer.classList.add('checkbox-container');
            checkboxInput.classList.add('checkbox-input');
            taskName.classList.add('text-input');
            taskText.classList.add('text-input');
            check.classList.add('check');
            txtContainer.classList.add('txt-container');
            deleteBtn.classList.add('delete');

            checkboxInput.setAttribute('type', 'checkbox');
            taskName.setAttribute('readonly', 'readonly');
            taskName.setAttribute('name', 'taskName');
            taskText.setAttribute('readonly', 'readonly');
            taskText.setAttribute('name', 'taskText');
            img.setAttribute('alt', 'Delete it');
            img.setAttribute('src', './images/icon-cross.svg');

            taskName.value = task.name;
            taskText.value = task.text;

            if (task.isComplete) {
                li.classList.add('checked');
                checkboxInput.setAttribute('checked', 'checked');
            }

            deleteBtn.append(img);
            txtContainer.append(taskName, taskText);
            checkBoxContainer.append(checkboxInput, check);
            li.append(checkBoxContainer, txtContainer, deleteBtn);
            fragment.append(li);
        }
        this.ul.append(fragment);
        this.form.after(this.ul);
    };

    this.renderStats = function () {
        stats.innerHTML = '';
        const script = document.querySelector('script');
        const itemsLeft = document.createElement('span');
        const itemsDone = document.createElement('span');
        const itemsAll = document.createElement('span');
        const fragment = new DocumentFragment();

        itemsLeft.classList.add('items-left');
        itemsDone.classList.add('items-done');
        itemsAll.classList.add('items-all');

        const { allTasks, completedTasks, leftTasks } = this.model.getStatusesCount();

        itemsLeft.textContent = `${leftTasks} left`;
        itemsDone.textContent = `${completedTasks} done`;
        itemsAll.textContent = `${allTasks} all`;

        stats.append(itemsLeft, itemsDone, itemsAll);
        fragment.append(stats);
        script.before(fragment);
    };

    this.formInitSubmit = function () {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const taskName = formData.get('taskName').trim();
            const taskText = formData.get('taskText').trim();

            if (taskName && taskText) {
                this.model.add(taskName, taskText);
                this.renderList();
                this.renderStats();
                e.target.reset();
            }
        });
    };

    this.listInitDelete = function () {
        this.ul.addEventListener('click', e => {
            if (e.target.nodeName === 'IMG') {
                const areClickedOnDeleteBtn = e.target.parentNode.classList.contains('delete');
                const targetTaskName = e.target.parentNode.previousSibling.firstChild.value;
                if (areClickedOnDeleteBtn) {
                    this.model.delete(targetTaskName);
                    this.renderList();
                    this.renderStats();
                }
            }
        });
    };

    this.listInitEdit = function () {
        this.ul.addEventListener('dblclick', e => {
            if (e.target.name === 'taskText') {
                e.target.hasAttribute('readonly')
                    ? e.target.removeAttribute('readonly')
                    : e.target.setAttribute('readonly', 'readonly');
            }
        });

        this.ul.addEventListener('change', e => {
            if (e.target.name === 'taskText') {
                const taskText = e.target.value;
                const taskName = e.target.previousSibling.value;

                e.target.hasAttribute('readonly')
                    ? e.target.removeAttribute('readonly')
                    : e.target.setAttribute('readonly', 'readonly');

                this.model.edit(taskName, taskText);
            }
        });
    };

    this.listInitChangeStatus = function () {
        this.ul.addEventListener('click', e => {
            if (e.target.classList.contains('checkbox-input')) {
                const li = e.target.parentNode.parentNode;
                const txtContainerIndex = 1;
                const taskName = e.target.parentNode.parentNode.childNodes[txtContainerIndex].firstChild.value;
                li.classList.contains('checked') ? li.classList.remove('checked') : li.classList.add('checked');
                this.model.changeStatus(taskName);
                this.renderStats();
            }
        });
    };

    this.renderStats();
    this.formInitSubmit();
    this.listInitDelete();
    this.listInitEdit();
    this.listInitChangeStatus();
}

// eslint-disable-next-line no-unused-vars
const todoList = new TodoListView(new TodoListModel());
