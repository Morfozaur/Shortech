import {db} from "../../firebase";
import {fetchError, fetchLastPost, fetchPosts} from "./allFetchers";

const loadMoreDate = (lastState, postsList, postsNumber, setEndIndicator) => {
    return (dispatch) => {
        db.collection('articles')
            .orderBy('date', 'desc')
            .startAfter(lastState)
            .limit(4)
            .get()
            .then(res => {
                const resLength = res.docs.length;
                if (resLength > 0) {
                    const lastDataKey = res.docs[resLength -1].data().date;
                    let data = res.docs.map(post => [post.id,post.data()]);
                    const updatedData = [...postsList, ...data];
                    console.log(postsList.length, postsNumber)
                    if (data.length <4 || postsList.length + 4 === postsNumber) {setEndIndicator(true)}
                    dispatch(fetchPosts(updatedData));
                    dispatch(fetchLastPost(lastDataKey));
                } else {
                    setEndIndicator(true)
                }
            })
            .catch(err => {
                dispatch(fetchError(err.message))
            })

    }
};

export {loadMoreDate}