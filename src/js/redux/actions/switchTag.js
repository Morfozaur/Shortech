import {db} from "../../firebase";
import {fetchError, fetchLastPost, fetchPosts} from "./fetchers";

const switchTag = (key) => {
    return (dispatch) => {
        db.collection('articles')
            .where('tags', 'array-contains', key)
            .limit(4)
            .get()

            .then(res => {
                const resLength = res.docs.length;
                const lastDataKey = res.docs[resLength -1].data().date;
                const data = res.docs.map(post => [post.id,post.data()])

                //SORTOWANIE

                dispatch(fetchPosts(data));
                dispatch(fetchLastPost(lastDataKey));
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {switchTag}