// rogaandkopyta@mail.com

class TodolistModel {
    list = [];
    #baseUrl = 'https://todo.hillel.it';
    // eslint-disable-next-line no-magic-numbers
    #defaultPriority = 1;

    isLogged = () => JSON.parse(localStorage.getItem('Logged'));

    async login(email) {
        const reqBody = JSON.stringify({value: email});
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        try {
            const resp = await fetch(`${ this.#baseUrl }/auth/login`, {
                method: 'POST', headers, body: reqBody,
            });
            const {access_token: accessToken} = await resp.json();
            localStorage.setItem('Logged', JSON.stringify({email, token: accessToken}));
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }

    logout = () => localStorage.removeItem('Logged');

    async getList() {
        const {token} = JSON.parse(localStorage.getItem('Logged'));

        if (token) {
            const headers = new Headers();
            headers.set('Authorization', `Bearer ${ token }`);
            headers.set('Content-Type', 'application/json');
            try {
                const resp = await fetch(`${ this.#baseUrl }/todo`, {
                    method: 'GET', headers,
                });

                this.list = await resp.json();
            } catch (e) {
                // eslint-disable-next-line no-console
                console.log(e);
            }
        }
    }

    async add(text, priority = this.#defaultPriority) {
        const areTaskNameExist = this.list.find(task => task.value === text);

        if ( !areTaskNameExist) {
            const reqBody = JSON.stringify({value: text, priority});
            const {token} = JSON.parse(localStorage.getItem('Logged'));

            const headers = new Headers();
            headers.set('Authorization', `Bearer ${ token }`);
            headers.set('Content-Type', 'application/json');

            const resp = await fetch(`${ this.#baseUrl }/todo`, {
                method: 'POST', headers, body: reqBody,
            });

            const task = await resp.json();
            this.list.push(task);
        }
    }

    async delete(id) {
        const {token} = JSON.parse(localStorage.getItem('Logged'));
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${ token }`);
        headers.set('Content-Type', 'application/json');
        await fetch(`${ this.#baseUrl }/todo/${ id }`, {
            method: 'DELETE', headers,
        });

        this.list = this.list.filter((task) => task._id !== id);
    }

    async edit(id, newText, priority = this.#defaultPriority) {
        const {token} = JSON.parse(localStorage.getItem('Logged'));
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${ token }`);
        headers.set('Content-Type', 'application/json');
        const reqBody = JSON.stringify({value: newText, priority});

        const resp = await fetch(`${ this.#baseUrl }/todo/${ id }`, {
            method: 'PUT', headers, body: reqBody,
        });

        const editedTask = await resp.json();
        const editedTaskIndex = this.list.findIndex(task => task._id === editedTask._id);
        const deleteCount = 1;
        this.list.splice(editedTaskIndex, deleteCount, editedTask);
    }

    async changeStatus(id) {
        const {token} = JSON.parse(localStorage.getItem('Logged'));
        const headers = new Headers();
        headers.set('Authorization', `Bearer ${ token }`);
        headers.set('Content-Type', 'application/json');

        const resp = await fetch(`${ this.#baseUrl }/todo/${ id }/toggle`, {
            method: 'PUT', headers,
        });

        const editedTask = await resp.json();
        const editedTaskIndex = this.list.findIndex(task => task._id === editedTask._id);
        const deleteCount = 1;
        this.list.splice(editedTaskIndex, deleteCount, editedTask);
    }

    getStatusesCount() {
        const allTasks = this.list.length;
        const addCount = 1;
        const initialCompletedTaskCount = 0;
        const completedTasks = this.list.reduce((completed, task) => {
            if (task.checked) {
                // eslint-disable-next-line no-param-reassign
                completed += addCount;
            }
            return completed;
        }, initialCompletedTaskCount);
        const leftTasks = allTasks - completedTasks;

        return {allTasks, completedTasks, leftTasks};
    }
}

class TodolistView {
    constructor(model) {
        this.model = model;
        this.addForm = document.querySelector('.add');
        this.ul = document.createElement('ul');
        this.ul.classList.add('list');
        this.stats = document.createElement('div');
        this.stats.classList.add('card');
        this.stats.classList.add('stats');

        this.formInitSubmit();
        this.authBtnInitSubmit();
        this.listInitDelete();
        this.listInitEdit();
        this.listInitChangeStatus();
    }


    async showForm() {
        await this.model.isLogged() ? await this.showFormForAuthUser() : this.showFormForUnAuthUser();
    }

    async showFormForAuthUser() {
        await this.model.getList();
        this.renderList();
        this.renderStats();
        const authBtn = document.querySelector('.auth-btn');
        authBtn.textContent = 'Log Out';
    }

    showFormForUnAuthUser() {
        this.renderAuthForm();
        this.authFormInitSubmit();

        const authForm = document.querySelector('.auth-form');
        authForm.style.visibility = 'visible';
    }

    renderAuthForm = () => {
        const authForm = document.querySelector('.auth-form');
        const title = document.createElement('h3');
        const email = document.createElement('input');
        const loginBtn = document.createElement('button');
        const fragment = new DocumentFragment();

        title.classList.add('auth');
        title.classList.add('auth-title');
        email.classList.add('auth');
        email.classList.add('email');
        loginBtn.classList.add('auth');
        loginBtn.classList.add('login-btn');

        title.setAttribute('id', 'email');
        title.setAttribute('name', 'email');
        title.setAttribute('required', 'required');
        title.setAttribute('type', 'email');
        loginBtn.setAttribute('type', 'submit');

        title.textContent = 'Authorization';
        email.placeholder = 'Email';
        loginBtn.textContent = 'Log in';

        fragment.append(title, email, loginBtn);
        authForm.append(fragment);
    };

    renderList() {
        this.ul.innerHTML = '';
        if ( !this.model.list.length) return;
        const fragment = new DocumentFragment();
        const bigger = 1;
        const less = -1;
        const equals = 0;

        this.model.list.sort((item1, item2) => {
            if (item1.checked > item2.checked) return bigger;
            if (item1.checked < item2.checked) return less;
            return equals;
        });

        for (const task of this.model.list) {
            const li = document.createElement('li');
            const checkBoxContainer = document.createElement('div');
            const checkboxInput = document.createElement('input');
            const taskText = document.createElement('input');
            const check = document.createElement('span');
            const txtContainer = document.createElement('div');
            const deleteBtn = document.createElement('button');
            const img = document.createElement('img');

            li.classList.add('card');
            checkBoxContainer.classList.add('checkbox-container');
            checkboxInput.classList.add('checkbox-input');
            taskText.classList.add('text-input');
            check.classList.add('check');
            txtContainer.classList.add('txt-container');
            deleteBtn.classList.add('delete');

            checkboxInput.setAttribute('type', 'checkbox');
            taskText.setAttribute('readonly', 'readonly');
            taskText.setAttribute('name', 'taskText');
            taskText.setAttribute('id', task._id);
            img.setAttribute('alt', 'Delete it');
            img.setAttribute('src', './images/icon-cross.svg');

            taskText.value = task.value.trim();

            if (task.checked) {
                li.classList.add('checked');
                checkboxInput.setAttribute('checked', 'checked');
            }

            deleteBtn.append(img);
            txtContainer.append(taskText);
            checkBoxContainer.append(checkboxInput, check);
            li.append(checkBoxContainer, txtContainer, deleteBtn);
            fragment.append(li);
        }
        this.ul.append(fragment);
        this.addForm.after(this.ul);
    }

    renderStats() {
        this.stats.innerHTML = '';
        const script = document.querySelector('script');
        const itemsLeft = document.createElement('span');
        const itemsDone = document.createElement('span');
        const itemsAll = document.createElement('span');
        const fragment = new DocumentFragment();

        itemsLeft.classList.add('items-left');
        itemsDone.classList.add('items-done');
        itemsAll.classList.add('items-all');

        const {allTasks, completedTasks, leftTasks} = this.model.getStatusesCount();

        itemsLeft.textContent = `${ leftTasks } left`;
        itemsDone.textContent = `${ completedTasks } done`;
        itemsAll.textContent = `${ allTasks } all`;

        this.stats.append(itemsLeft, itemsDone, itemsAll);
        fragment.append(this.stats);
        script.before(fragment);
    }

    authBtnInitSubmit() {
        const authBtn = document.querySelector('.auth-btn');

        authBtn.addEventListener('click', e => {
            e.preventDefault();
            this.model.logout();
            authBtn.textContent = 'Log In';
            this.showFormForUnAuthUser();
        });
    }

    authFormInitSubmit() {
        const authForm = document.querySelector('.auth-form');

        authForm.addEventListener('submit', async e => {
            e.preventDefault();
            if (e.target.classList.contains('auth-form')) {
                const emailNumber = 1;
                const zeroLength = 0;
                const email = e.target.childNodes[emailNumber].value;
                if (email.length > zeroLength) {
                    await this.model.login(email);
                    while (authForm.firstChild) authForm.removeChild(authForm.firstChild);
                    authForm.style.visibility = 'hidden';


                    const authBtn = document.querySelector('.auth-btn');
                    authBtn.textContent = 'Log Out';

                    await this.model.getList();
                    this.renderList();
                    this.renderStats();
                }
            }
        });
    }

    formInitSubmit() {
        this.addForm.addEventListener('submit', async e => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const taskText = formData.get('taskText');

            if (taskText) {
                await this.model.add(taskText);
                await this.renderList();
                this.renderStats();
                e.target.reset();
            }
        });
    }

    listInitDelete() {
        this.ul.addEventListener('click', async e => {
            if (e.target.nodeName === 'IMG') {
                const areClickedOnDeleteBtn = e.target.parentNode.classList.contains('delete');
                const targetTaskId = +e.target.parentNode.previousSibling.firstChild.id;

                if (areClickedOnDeleteBtn) {
                    await this.model.delete(targetTaskId);
                    this.renderList();
                    this.renderStats();
                }
            }
        });
    }

    listInitEdit() {
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
                const taskId = e.target.id;

                e.target.hasAttribute('readonly')
                    ? e.target.removeAttribute('readonly')
                    : e.target.setAttribute('readonly', 'readonly');

                this.model.edit(taskId, taskText);
            }
        });
    }

    listInitChangeStatus() {
        this.ul.addEventListener('click', async e => {
            if (e.target.classList.contains('checkbox-input')) {
                const li = e.target.parentNode.parentNode;
                const txtContainerIndex = 1;
                const taskId = e.target.parentNode.parentNode.childNodes[txtContainerIndex].firstChild.id;
                li.classList.contains('checked') ? li.classList.remove('checked') : li.classList.add('checked');
                await this.model.changeStatus(taskId);
                this.renderList();
                this.renderStats();
            }
        });
    }
}


const todoListModel = new TodolistModel();
const todoListView = new TodolistView(todoListModel);

todoListView.showForm();

