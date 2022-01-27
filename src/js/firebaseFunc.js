import { setDoc, addDoc, deleteDoc, doc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
<<<<<<< HEAD
import {db} from "./firebaseConfig";
=======
import {db} from "./firebase";
>>>>>>> 0b51efad0d4ae903e221db712472f1b8cbe05f65
import {randomizeName} from "./randomizeName";

const metadata = {
    contentType: 'image/jpeg'
};

// Edit functions

const updateInFirebase = async (id, post) => {
    await setDoc(doc(db, 'articles', id), post)
};

const createInFirebase = async (post) => {
    await addDoc(collection(db, 'articles'), post)
};

const deleteFromFirebase = async (id) => {
    await deleteDoc(doc(db, 'articles', id))
        .catch(err => {console.error(err)})
};

const uploadImg = (e, setLoading, setNewImg) => {
    const file = e.target.files[0];
    const fileName = randomizeName(file.name);
    const storage = getStorage();
    const fileRef = ref(storage, 'img/' + fileName);
    const uploadTask = uploadBytesResumable(fileRef, file, metadata);

    uploadTask.on('stage_changed',
        (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setLoading(percentage.toFixed(2));
        },
        (error) =>{console.error(error.message)},
        () =>{
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setNewImg(url);
            });
        }
    )
}

export {updateInFirebase, createInFirebase, deleteFromFirebase, uploadImg}