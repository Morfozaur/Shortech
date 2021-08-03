import {combineReducers} from 'redux';
import {isLogged} from "./isLogged";
import {postsList} from "./postsList";
import {postsCount} from "./postsCount";

const allReducers = combineReducers({
    log: isLogged,
    sort: postsList,
    count: postsCount
})

export {allReducers}