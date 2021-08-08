import React from 'react';
import LoginForm from "./elements/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import firebase from "firebase";
import {useHistory} from "react-router-dom";
import {fetchDemo} from "../redux/actions/allFetchers";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.log);
    const isDemo = useSelector(state => state.demo);

    const logout = () => {
        firebase.auth().signOut().catch(err => console.error(err.message));
        dispatch(fetchDemo(false));
    };

    return (
        <div className="login">
            {(isLogged || isDemo) &&
            <div className='login-status'>
                <h2 onClick={()=>console.log(isDemo, isLogged)}>Zalogowano jako:</h2>
                <h3>{isDemo ? 'Wersja demo' : 'Administrator'}</h3>
                {isDemo &&
                <div className='login-info' >
                    <p>W wersji demonstracyjnej dostęp do edytora i kreatora postów jest ograniczony. Wpisy modyfikowane są wyłącznie w ramach drzewa DOM, a dodawanie nowych postów jest zablokowane.</p>
                    <br/>
                    <p>Ponadto CMS automatycznie losuje zdjęcie z bazy. W pełnej wersji zalogowany użytkownik może dodawać własne pliki z dysku i zapisywać je w chmurze Firebase.</p>
                </div>}
                <div className="login-buttons">
                    {isDemo &&
                    <button className='btn' onClick={() => history.push('/')}>Wypróbuj</button>}
                    <button className='btn' onClick={logout}>Wyloguj</button>
                </div>
            </div>}
            {(!isLogged && !isDemo) && <LoginForm/>}
        </div>
    );
}

export default Login;