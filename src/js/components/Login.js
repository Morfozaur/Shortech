import React from 'react';
import {Link, useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();

    const auth = () => {
        return false
    }

    const logMe = (e) => {
        e.preventDefault();
        history.push('/')
    }
    return (
        <div className="login">
            <form>
                <div className="login-fields">
                    <div className="login-name">
                        <label htmlFor="name">Login:</label>
                        <input type="text" id="name" autoComplete="off"/>
                    </div>
                    <div className="login-pass">
                        <label htmlFor="pass">Hasło:</label>
                        <input type="password" id="pass" autoComplete="off"/>
                    </div>
                </div>
                <button className='btn login-btn' onClick={e=>logMe(e)}>Zaloguj</button>
            </form>
        </div>
    );
}

export default Login;