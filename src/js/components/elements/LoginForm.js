import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchDemo} from "../../redux/actions/allFetchers";

const LoginForm = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const history = useHistory();
    const auth = getAuth();
    const dispatch = useDispatch();

    const logMe =  (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, user, pass)
            .then( () => history.push('/'))
            .catch((err) => console.error(err.message))
    }
    
    const logDemo = (e) => {
        e.preventDefault()
        dispatch(fetchDemo(true))
    };

    const handleUser = (e) => setUser(e.target.value);
    const handlePass = (e) => setPass(e.target.value);


    return (
        <form>
            <h2>Zaloguj się:</h2>
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
            <div className="login-buttons">
                <button className='btn login-btn' onClick={e=>logDemo(e)}>Demo</button>
                <button className='btn login-btn' onClick={e=>logMe(e)}>Zaloguj</button>
            </div>

        </form>
    );
}

export default LoginForm;