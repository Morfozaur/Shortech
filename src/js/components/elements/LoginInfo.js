import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import {fetchDemo} from "../../redux/actions/allFetchers";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

const LoginInfo = ({isDemo}) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const auth = getAuth();

    const logout = () => {
        signOut(auth)
            .then(()=> {
                dispatch(fetchDemo(false))
            })
            .catch((err) => {
                console.error(err.message)
        });
    };
    return (
        <div className='login-status'>
            <h2>Zalogowano jako:</h2>
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
        </div>
    );
}

export default LoginInfo;