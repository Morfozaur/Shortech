import {db} from "./firebase";
import firebase from "./firebase";
import {randomizeName} from "./randomizeName";

// Edit functions

const updateInFirebase = async (id, post) => {
    const fetchedPost = db.collection('articles').doc(id);
    await fetchedPost.update(post);
};

const createInFirebase = async (post) => {
    await db.collection('articles').add(post);
};

const deleteFromFirebase = async (id) => {
    await db.collection('articles').doc(id).delete()
        .catch(err => {console.error(err)})
};

const uploadImg = (e, setLoading, setNewImg) => {
    const file = e.target.files[0];
    const fileName = randomizeName(file.name);
    const storageRef = firebase.storage().ref('img/' + fileName);
    const task = storageRef.put(file);
    task.on('stage_changed',
        (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setLoading(percentage);
        },
        (error) =>{console.error(error.message)},
        () =>{
            task.snapshot.ref.getDownloadURL().then((url) => {
                setNewImg(url);
            });
        }
    )
}

export {updateInFirebase, createInFirebase, deleteFromFirebase, uploadImg}