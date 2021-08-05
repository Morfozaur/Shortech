import React from 'react';

const Menu = () => {
    return (
        <menu className='main-menu'>
            <i className="fas fa-home main-menu-home"/>
            <div className='main-menu-user'>
                <form>
                    <input type="text" className="search inactive" placeholder='Wyszukaj frazę...'/>
                    <i className="fas fa-search"/>
                </form>
            </div>
        </menu>
    );
}

export default Menu