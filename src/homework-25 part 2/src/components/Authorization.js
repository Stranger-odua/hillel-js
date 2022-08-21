function Authorization({login, authStatus, setAuthStatus, logout}) {
    const loginFormStyle = authStatus ? {display: 'none'} : {display: 'block'};
    const logoutButtonStyle = authStatus ? {display: 'block'} : {display: 'none'};


    const handleLogin = (e) => {
        e.preventDefault();
        //FIXME передати email в функцію
        // const email = e.target.firstChild.nextSibling.value.trim();
        login('rogaandkopyta@mail.com');
        //TODO здесь ссылка на ту же функию (тот же объект)
        // if (authStatus === false) setAuthStatus(checkIsLogged());
        if (authStatus === false) setAuthStatus(true);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        //TODO здесь ссылка на ту же функию (тот же объект)
        // if (authStatus === true) setAuthStatus(checkIsLogged());
        if (authStatus === true) setAuthStatus(false);
    };

    return <>
        <form
            style={ loginFormStyle }
            className="auth auth-form"
            name="auth-form"
            onSubmit={ handleLogin }
        >
            <h3 className="auth auth-title">Authorization</h3>
            <input className="auth email" placeholder="Email"/>
            <button
                className="auth auth-login"
                type="submit">
                Log in
            </button>
        </form>

        <button
            style={ logoutButtonStyle }
            className="auth auth-logout"
            type="button"
            onClick={ handleLogout }
        >
            Log out
        </button>
    </>;
}

export default Authorization;
