import React from 'react';
import Menu from "./Menu";
import classNames from "classnames";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Header = ({setEndIndicator}) => {

    const history = useHistory();
    const toLogin = () => {
        if (history.location.pathname !=='/login') {
            history.push('/login')
        }
    }

    const isLogged = useSelector(state => state.log);
    const isDemo = useSelector(state => state.demo);
    const icoClass = 'fas fa-power-off login-ico';

    return (
        <header className='header'>

            <h1 className='logo'>
                {isDemo && <span className='demo-tag'>Demo</span>}
                SHOR<span>TECH<i className={classNames(icoClass, {"logout" :(isLogged || isDemo)})} onClick={toLogin}/></span>
            </h1>
            <Menu setEndIndicator={setEndIndicator}/>
        </header>
    );
}

export default Header;