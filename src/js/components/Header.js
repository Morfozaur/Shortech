import React from 'react';
import Menu from "./Menu";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Header = ({setEndIndicator}) => {

    const history = useHistory();
    const toLogin = () => history.push('/login')

    const isLogged = useSelector(state => state.log)
    const icoClass = 'fas fa-power-off login-ico';

    return (
        <header className='header'>
            <h1 className='logo'>SHOR<span>TECH<i className={isLogged ? `${icoClass} logout`: icoClass} onClick={toLogin}/></span></h1>
            <Menu setEndIndicator={setEndIndicator}/>
        </header>
    );
}

export default Header;