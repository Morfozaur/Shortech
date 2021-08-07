import firebase from 'firebase';
import 'firebase/database';
import 'firebase/storage';
const config = {
    apiKey: "AIzaSyC_VJpU_qZQBVzuYv7KrxT_Xpx5OsVZSjs",
    authDomain: "shortech-de128.firebaseapp.com",
    projectId: "shortech-de128",
    storageBucket: "shortech-de128.appspot.com",
    messagingSenderId: "607104988245",
    appId: "1:607104988245:web:8c3f20a6cd9957dc0e90dc",
    measurementId: "G-LVW54QGVDZ"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export {db}
export default firebase;