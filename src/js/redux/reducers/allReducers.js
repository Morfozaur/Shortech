import {combineReducers} from 'redux';
import {isLogged} from "./isLogged";
import {postsList} from "./postsList";
import {lastPost} from "./lastPost";
import {infiniteLoaderTag} from "./infiniteLoaderTag";
import {lastTagPost} from "./lastTagPost";
import {postsTagList} from "./postsTagList";
import {filterType} from "./filterType";
import {isDemo} from "./isDemo";

const allReducers = combineReducers({
    log: isLogged,
    demo: isDemo,
    sortedPosts: postsList,
    lastPost,
    tagSelect: infiniteLoaderTag,
    sortedTagPosts: postsTagList,
    lastTagPost,
    filterType
})

export {allReducers}