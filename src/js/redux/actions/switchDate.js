import {db} from "../../firebase";
import {fetchError, fetchPosts} from "./fetchers";

const switchDate = () => {
    return (dispatch) => {
        db.collection('articles').orderBy('date', 'desc').get()
            .then(res => {
                const data = res.docs.map(post =>post.data())
                dispatch(fetchPosts(data))
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {switchDate}