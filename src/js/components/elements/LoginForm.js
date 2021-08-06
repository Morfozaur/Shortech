import React, {useState} from 'react';
import firebase from "firebase";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const history = useHistory();
    const auth = firebase.auth();
    const logMe = async (e) => {
        e.preventDefault();
        await auth.signInWithEmailAndPassword(user, pass)
            .then( () => history.push('/'))
            .catch((err) => console.error(err.message))
    }

    const handleUser = (e) => setUser(e.target.value);
    const handlePass = (e) => setPass(e.target.value);


    return (
        <form>
            <h3>Zaloguj się:</h3>
            <div className="login-fields">
                <div className="login-name">
                    <label htmlFor="name">Login:</label>
                    <input type="text"
                           id="name"
                           autoComplete="off"
                           value={user}
                           onChange={e=>handleUser(e)}/>
                </div>
                <div className="login-pass">
                    <label htmlFor="pass">Hasło:</label>
                    <input type="password"
                           id="pass"
                           autoComplete="off"
                           value={pass}
                           onChange={e=>handlePass(e)}/>
                </div>
            </div>
            <button className='btn login-btn' onClick={e=>logMe(e)}>Zaloguj</button>

        </form>
    );
}

export default LoginForm;