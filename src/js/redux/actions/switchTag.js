import {db} from "../../firebase";
import {fetchError, fetchPosts, fetchTagArr, fetchTagArrLength} from "./allFetchers";
import {customSort} from "../../customSort";
import {tagListLimiter} from "../../tagListLimiter";

const switchTag = (key) => {
    return (dispatch) => {
        db.collection('articles')
            .where('tags', 'array-contains', key)
            .get()

            .then(res => {
                const allTaggedPosts = customSort(res);
                dispatch(fetchTagArr(allTaggedPosts));
                const data = tagListLimiter(allTaggedPosts, 4);
                dispatch(fetchPosts(data));
                dispatch(fetchTagArrLength(data.length));
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {switchTag}