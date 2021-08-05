import {combineReducers} from 'redux';
import {isLogged} from "./isLogged";
import {postsList} from "./postsList";
import {lastPost} from "./lastPost";
import {infiniteLoaderTag} from "./infiniteLoaderTag";
import {lastTagPost} from "./lastTagPost";
import {postsTagList} from "./postsTagList";
import {searchResult} from "./searchResult";
import {filterType} from "./filterType";

const allReducers = combineReducers({
    log: isLogged,
    sortedPosts: postsList,
    lastPost: lastPost,
    tagSelect: infiniteLoaderTag,
    sortedTagPosts: postsTagList,
    lastTagPost: lastTagPost,
    searchResult: searchResult,
    filterType: filterType,
})

export {allReducers}