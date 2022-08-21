function Authorization({login, authStatus, setAuthStatus, logout, checkIsLogged}) {
    const loginFormStyle = authStatus ? {display: 'none'} : {display: 'block'};
    const logoutButtonStyle = authStatus ? {display: 'block'} : {display: 'none'};

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.firstChild.nextSibling.value.trim();
        if (email.length > 0) {
            await login(email);
            if (authStatus === false) setAuthStatus(checkIsLogged());
        }
        // Поле вводу для email спеціально не очищаю, щоб кожен раз не набирати
    };

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        if (authStatus === true) setAuthStatus(checkIsLogged());
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
