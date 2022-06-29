import {db} from "../../firebaseConfig";
import { collection, query,where, getDocs } from "firebase/firestore";
import {fetchError, fetchPosts, fetchTagArr, fetchTagArrLength} from "./allFetchers";
import {customSort} from "../../customSort";
import {tagListLimiter} from "../../tagListLimiter";

const listByTag = (key, setEndIndicator) => {
    return async (dispatch) => {
        const artRef = collection(db, 'articles')
        const sorted = query(artRef, where('tags', 'array-contains', key));
        await getDocs(sorted)
            .then(res => {
                setEndIndicator(false)
                const allTaggedPosts = customSort(res);
                dispatch(fetchTagArr(allTaggedPosts));
                const data = tagListLimiter(allTaggedPosts, 4);
                window.scrollTo(0, 0);
                if (data.length === allTaggedPosts.length) {setEndIndicator(true)}
                dispatch(fetchPosts(data));
                dispatch(fetchTagArrLength(data.length));
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
    }
};

export {listByTag}