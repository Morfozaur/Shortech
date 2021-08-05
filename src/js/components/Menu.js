import React from 'react';
import {switchDate} from "../redux/actions/switchDate";
import {useDispatch} from "react-redux";
import {fetchTagLoader} from "../redux/actions/allFetchers";

const Menu = ({setEndIndicator}) => {

    const dispatch = useDispatch();

    const sortByDate = () => {
        dispatch(switchDate(setEndIndicator));
        dispatch(fetchTagLoader('date'))
    };

    return (
        <menu className='main-menu'>
            <i className="fas fa-home main-menu-home" onClick={sortByDate}/>
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