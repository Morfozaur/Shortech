import {db} from "../../firebase";
import {fetchError, fetchLastPost, fetchPosts} from "./fetchers";

const loadMoreTag = (key, lastState, postList) => {
    return (dispatch) => {
        db.collection('articles')
            .where('tags', 'array-contains', key)
            .startAfter(lastState)
            .limit(4)
            .get()

            .then(res => {
                const resLength = res.docs.length;
                if (resLength > 0) {
                    const lastDataKey = res.docs[resLength -1].data().date;
                    const data = res.docs.map(post => [post.id,post.data()])

                    //SORTOWANIE

                    const updatedData = [...postList, ...data]
                    dispatch(fetchPosts(data));
                    dispatch(fetchLastPost(lastDataKey));
                }
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {loadMoreTag}