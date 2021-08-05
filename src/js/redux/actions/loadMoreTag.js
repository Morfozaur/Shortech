import {tagListLimiter} from "../../tagListLimiter";
import {fetchPosts, fetchTagArrLength} from "./allFetchers";

const loadMoreTag = (arr, postList) => {
    return (dispatch) => {
        const limiter = postList.length + 1;
        console.log(limiter)
        const data = tagListLimiter(arr, limiter)
        dispatch(fetchPosts(data));
        dispatch(fetchTagArrLength(data.length));
    }
};

export {loadMoreTag}