import {combineReducers} from 'redux';
import {isLogged} from "./isLogged";
import {postsList} from "./postsList";
import {lastPost} from "./lastPost";
import {infiniteLoaderTag} from "./infiniteLoaderTag";

const allReducers = combineReducers({
    log: isLogged,
    sort: postsList,
    count: lastPost,
    tag: infiniteLoaderTag
})

export {allReducers}