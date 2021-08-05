import {db} from "../../firebase";
import {fetchLastPost, fetchError, fetchPosts} from "./fetchers";

const switchDate = () => {
    return (dispatch) => {
        db.collection('articles')
            .orderBy('date', 'desc')
            .limit(4)
            .get()

            .then(res => {
                const resLength = res.docs.length;
                const lastDataKey = res.docs[resLength -1].data().date;
                const data = res.docs.map(post => [post.id,post.data()]);
                dispatch(fetchPosts(data));
                dispatch(fetchLastPost(lastDataKey));
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {switchDate}