import {combineReducers} from 'redux';
import {isLogged} from "./isLogged";
import {postsList} from "./postsList";
import {lastPost} from "./lastPost";
import {infiniteLoaderTag} from "./infiniteLoaderTag";
import {lastTagPost} from "./lastTagPost";
import {postsTagList} from "./postsTagList";

const allReducers = combineReducers({
    log: isLogged,
    sortedPosts: postsList,
    lastPost: lastPost,
    tagSelect: infiniteLoaderTag,
    sortedTagPosts: postsTagList,
    lastTagPost: lastTagPost
})

export {allReducers}