import {combineReducers} from 'redux';
import {isLogged} from "./isLogged";
import {postsList} from "./postsList";
import {lastPost} from "./lastPost";
import {tagChanger} from "./tagChanger";
import {lastTagPost} from "./lastTagPost";
import {postsTagList} from "./postsTagList";
import {filterType} from "./filterType";
import {isDemo} from "./isDemo";
import {postsNumber} from "./postsNumber";

const allReducers = combineReducers({
    log: isLogged,
    demo: isDemo,
    sortedPosts: postsList,
    postsNumber,
    lastPost,
    tagSelected: tagChanger,
    sortedTagPosts: postsTagList,
    lastTagPost,
    filterType
})

export {allReducers}