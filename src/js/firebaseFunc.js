import {db} from "./firebase";

// Display functions
// const fetchPosts = async (setter) => {
//     const postsArray = [];
//     const res =  await db.collection('articles').orderBy('date', 'desc').get();
//     const postsList = res.docs;
//     postsList.forEach(post => {
//         postsArray.push(post.data())
//     })
//     setter(postsArray);
// };
//
// const tagPosts = async (setter, key) => {
//     const postsArray = [];
//     const res =  await db.collection('articles').where('tags', 'array-contains', key).get();
//     const postsList = res.docs;
//     postsList.forEach(post => {
//         postsArray.push(post.data())
//     })
//     setter(postsArray);
// };


// Edit functions
const pushToFirebase = () => {

};

const updateInFirebase = async (post, id) => {
    const updatedPost = db.collection('articles').doc(id);
    await updatedPost.update(post)
};

export {updateInFirebase}