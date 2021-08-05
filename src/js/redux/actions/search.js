import {db} from "../../firebase";
import {fetchError, fetchPosts, fetchSearch, fetchTagArrLength} from "./allFetchers";
import {customSort} from "../../customSort";
import {tagListLimiter} from "../../tagListLimiter";

const search = (value) => {
    return (dispatch) => {
        db.collection('articles')
            .where('text', 'array-contains', value)
            .get()

            .then(res => {
                const searchResult = customSort(res);
                dispatch(fetchSearch(searchResult));
                const data = tagListLimiter(searchResult, 4);
                window.scrollTo(0, 0);
                dispatch(fetchPosts(data));
                dispatch(fetchTagArrLength(data.length));
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {search}