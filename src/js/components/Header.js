import React from 'react';
import Menu from "./Menu";

const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo'>SHOR<span>TECH</span></h1>
            <Menu/>
        </header>
    );
}

export default Header;