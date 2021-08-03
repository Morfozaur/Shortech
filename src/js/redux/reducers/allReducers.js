import {combineReducers} from 'redux';
import {isLogged} from "./isLogged";
import {postsList} from "./postsList";

const allReducers = combineReducers({
    log: isLogged,
    sort: postsList
})

export {allReducers}