import React, {useState} from 'react';
import {switchDate} from "../redux/actions/switchDate";
import {useHistory,} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {fetchTagLoader} from "../redux/actions/allFetchers";
import {switchTag} from "../redux/actions/switchTag";

const Menu = ({setEndIndicator}) => {
    const [searchText, setSearchText] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();

    const sortByDate = () => {
        if (history.location.pathname !=='/') {history.push('/')}
        dispatch(switchDate(setEndIndicator));
        dispatch(fetchTagLoader('date'));
    };

    const searchInput = (e) => {
        setSearchText(e.target.value)
    };

    const submit = (e) => {
        e.preventDefault();
        if (searchText.length > 0) {
            dispatch(switchTag(searchText, setEndIndicator));
            dispatch(fetchTagLoader(searchText))
        }
    };

    return (
        <menu className='main-menu'>
            <i className="fas fa-home main-menu-home" onClick={sortByDate}/>
            <div className='main-menu-user'>
                <form onSubmit={e=>submit(e)}>
                    <input type="text"
                           className="search inactive"
                           placeholder='Wyszukaj tag...'
                           value={searchText}
                           onChange={e=>searchInput(e)}/>
                    <i className="fas fa-search main-menu-glass" onClick={e=>submit(e)}/>
                </form>
            </div>
        </menu>
    );
}

export default Menu