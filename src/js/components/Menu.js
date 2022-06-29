import React, {useState} from 'react';
import {listByDate} from "../redux/actions/listByDate";
import {useHistory,} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {fetchTagLoader} from "../redux/actions/allFetchers";
import {listByTag} from "../redux/actions/listByTag";

const Menu = ({setEndIndicator}) => {
    const [searchText, setSearchText] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();

    const sortByDate = () => {
        if (history.location.pathname !=='/') {history.push('/')}
        dispatch(listByDate(setEndIndicator));
        dispatch(fetchTagLoader("date", true));
    };

    const searchInput = (e) => {
        setSearchText(e.target.value)
    };

    const submit = (e) => {
        e.preventDefault();
        if (searchText.length) {
            const searchTag = searchText.toLowerCase()
            dispatch(listByTag(searchTag, setEndIndicator));
            dispatch(fetchTagLoader( searchTag,  false));
            setSearchText('');
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