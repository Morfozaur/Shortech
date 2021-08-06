import React from 'react';
import LoginForm from "./elements/LoginForm";
import {useSelector} from "react-redux";
import firebase from "firebase";

const Login = () => {
    const isLogged = useSelector(state => state.log)

    const logout = () => {
        firebase.auth().signOut().catch(err => console.error(err.message))
    };

    return (
        <div className="login">
            {isLogged &&
            <div className='login-status'>
                <h3>Zalogowano jako:</h3>
                <h4>Admnistrator</h4>
                <button className='btn' onClick={logout}>Wyloguj</button>
            </div>}
            {!isLogged && <LoginForm/>}
        </div>
    );
}

export default Login;