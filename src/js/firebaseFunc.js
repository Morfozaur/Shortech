import {db} from "./firebase";

// Edit functions
const pushToFirebase = () => {

};

const updateInFirebase = async (id, post) => {
    const fetchedPost = db.collection('articles').doc(id);
    console.log(fetchedPost, id, post)
    const res = await fetchedPost.update(post);
};

const createInFirebase = async (post) => {
    const fetchedPost = await db.collection('articles').add(post);
};

const deleteFromFirebase = async (id) => {
    const deletePost = await db.collection('articles').delete()
        .catch(err => {
            console.error(err)
        })
};

export {updateInFirebase, createInFirebase}