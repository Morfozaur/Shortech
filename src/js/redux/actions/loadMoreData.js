import {db} from "../../firebase";
import {fetchError, fetchLastPost, fetchPosts} from "./fetchers";

const loadMoreData = (lastState, postList) => {
    return (dispatch) => {
        db.collection('articles')
            .orderBy('date', 'desc')
            .startAfter(lastState)
            .limit(4)
            .get()

            .then(res => {
                const resLength = res.docs.length;
                console.log(lastState)
                if (resLength > 0) {
                    const lastDataKey = res.docs[resLength -1].data().date;
                    let data = res.docs.map(post => [post.id,post.data()]);
                    const updatedData = [...postList, ...data]
                    dispatch(fetchPosts(updatedData));
                    dispatch(fetchLastPost(lastDataKey));
                }
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {loadMoreData}