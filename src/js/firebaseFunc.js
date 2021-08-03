import {db} from "./firebase";

const fetchPosts = async (setter) => {
    const postsArray = [];
    const res =  await db.collection('articles').orderBy('date', 'desc').get();
    const postsList = res.docs;
    postsList.forEach(post => {
        postsArray.push(post.data())
    })
    setter(postsArray);
};

const tagPosts = async (setter, key) => {
    const postsArray = [];
    const res =  await db.collection('articles').where('tags', 'array-contains', key).get();
    const postsList = res.docs;
    postsList.forEach(post => {
        postsArray.push(post.data())
    })
    setter(postsArray);
};


export {fetchPosts, tagPosts}