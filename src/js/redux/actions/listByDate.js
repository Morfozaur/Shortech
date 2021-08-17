import {db} from "../../firebase";
import {fetchLastPost, fetchError, fetchPosts, fetchPostsNumber} from "./allFetchers";

const listByDate = (setEndIndicator) => {
    return (dispatch) => {
        db.collection('articles')
            .orderBy('date', 'desc')
            .limit(4)
            .get()
            .then(res => {
                setEndIndicator(false)
                const resLength = res.docs.length;
                const lastDataKey = res.docs[resLength -1].data().date;
                const data = res.docs.map(post => [post.id,post.data()]);
                dispatch(fetchPosts(data));
                dispatch(fetchLastPost(lastDataKey));
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })
        db.collection('count').doc('posts').get()
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