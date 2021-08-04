import {db} from "../../firebase";
import {fetchCounter, fetchError, fetchPosts} from "./fetchers";

const switchDate = () => {
    return (dispatch) => {
        db.collection('articles').orderBy('date', 'desc').get()
            .then(res => {
                const data = res.docs.map(post => [post.id,post.data()]);
                dispatch(fetchPosts(data));
                dispatch(fetchCounter(data.length));
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {switchDate}