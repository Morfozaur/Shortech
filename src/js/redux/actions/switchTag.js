import {db} from "../../firebase";
import {fetchError, fetchPosts} from "./fetchers";

const switchTag = (key) => {
    return (dispatch) => {
        db.collection('articles').where('tags', 'array-contains', key).get()
            .then(res => {
                const data = res.docs.map(post =>post.data())
                dispatch(fetchPosts(data))
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {switchTag}