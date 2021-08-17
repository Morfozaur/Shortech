import {tagListLimiter} from "../../tagListLimiter";
import {fetchPosts, fetchTagArrLength} from "./allFetchers";

const loadMoreTag = (sortedTagPosts, postsList, setEndIndicator) => {
    return (dispatch) => {
        const limiter = postsList.length + 4;
        const data = tagListLimiter(sortedTagPosts, limiter)
        if (data.length === sortedTagPosts.length) {setEndIndicator(true)}
        dispatch(fetchPosts(data));
        dispatch(fetchTagArrLength(data.length));
    }
};

export {loadMoreTag}