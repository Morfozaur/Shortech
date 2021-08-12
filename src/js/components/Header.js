import React from 'react';
import Menu from "./Menu";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {randomizeName} from "../randomizeName";

const Header = ({setEndIndicator}) => {

    const history = useHistory();
    const toLogin = () => {
        if (history.location.pathname !=='/login') {
            history.push('/login')
        }
    }

    const test = () => {
        console.log(randomizeName('test'))
    }

    const isLogged = useSelector(state => state.log);
    const isDemo = useSelector(state => state.demo);
    const icoClass = 'fas fa-power-off login-ico';

    return (
        <header className='header'>

            <h1 className='logo' onClick={e=>test()}>
                {isDemo && <span className='demo-tag'>Demo</span>}
                SHOR<span>TECH<i className={(isLogged || isDemo) ? `${icoClass} logout`: icoClass} onClick={toLogin}/></span>
            </h1>
            <Menu setEndIndicator={setEndIndicator}/>
        </header>
    );
}

export default Header;