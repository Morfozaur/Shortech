import {db} from "../../firebase";
import { collection, query, orderBy, limit, getDocs, doc, getDoc  } from "firebase/firestore";
import {fetchLastPost, fetchError, fetchPosts, fetchPostsNumber} from "./allFetchers";

const listByDate = (setEndIndicator) => {
    return async (dispatch) => {
        const artRef = collection(db, 'articles')
        const sorted = query(artRef, orderBy('date', 'desc'), limit(4));
        await getDocs(sorted)
            .then(res=> {
                setEndIndicator(false);
                const resLength = res.docs.length;
                const lastDataKey = res.docs[resLength - 1].data().date;
                const data = res.docs.map(post => [post.id, post.data()]);
                dispatch(fetchPosts(data));
                dispatch(fetchLastPost(lastDataKey));
            })

        const counter = doc(db, 'count', 'posts');
        await getDoc(counter)
            .then(res => {
                const data = res.data().number;
                dispatch(fetchPostsNumber(data));
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
    }
};

export {listByDate}