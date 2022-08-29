import { useDispatch, useSelector } from 'react-redux';
import { setAuthStatus, setToken } from '../userSlice';
import { useGetTokenMutation } from '../userApi';

function Authorization() {
    const dispatch = useDispatch();
    const isUserAuthorise = useSelector(state => state.user.isUserAuthorise);
    const [getToken] = useGetTokenMutation();

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.firstChild.nextSibling.value.trim();
        if (email.length > 0) {
            const {data: {access_token}} = await getToken(email);
            dispatch(setToken({token: access_token}));
            dispatch(setAuthStatus({isUserAuthorise: true}));
        }
    };

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(setToken({token: ''}));
        dispatch(setAuthStatus({isUserAuthorise: false}));
    };

    return isUserAuthorise

        ? <button
            className="auth auth-logout"
            type="button"
            onClick={ handleLogout }
        >
            Log out
        </button>

        : <form
            className="auth auth-form"
            name="auth-form"
            onSubmit={ (e) => handleLogin(e) }
        >
            <h3 className="auth auth-title">Authorization</h3>
            <input className="auth email" placeholder="Email"/>
            <button
                className="auth auth-login"
                type="submit">
                Log in
            </button>
        </form>;
}

export default Authorization;
