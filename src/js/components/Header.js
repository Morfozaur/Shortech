import React from 'react';
import Menu from "./Menu";
import {customDate} from "../customDate";

const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo' onClick={customDate}>SHOR<span>TECH</span></h1>
            <Menu/>
        </header>
    );
}

export default Header;