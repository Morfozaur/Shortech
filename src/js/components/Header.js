import React from 'react';
import Menu from "./Menu";

const Header = ({setEndIndicator}) => {
    return (
        <header className='header'>
            <h1 className='logo'>SHOR<span>TECH</span></h1>
            <Menu setEndIndicator={setEndIndicator}/>
        </header>
    );
}

export default Header;