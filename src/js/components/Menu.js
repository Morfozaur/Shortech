import React from 'react';

const Menu = () => {
    return (
        <menu className='main-menu'>
            <ul className='main-menu-list'>
                <li><i className="fas fa-home"/></li>
                <li>Gry</li>
                <li>Technologia</li>
            </ul>
            <div className='main-menu-user'>
                <form>
                    <input type="text" className="search inactive" placeholder='Wpisz wyszukiwaną frazę...'/>
                    <i className="fas fa-search"/>
                </form>
                <i className="fas fa-user"/>
            </div>
        </menu>
    );
}

export default Menu