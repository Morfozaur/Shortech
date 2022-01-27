import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'dotenv/config';

const config = {
    apiKey: process.env.REACT_APP_DB_API,
    authDomain: process.env.REACT_APP_DB_DOMAIN,
    projectId: process.env.REACT_APP_DB_ID,
    storageBucket: process.env.REACT_APP_DB_BUCKET,
    messagingSenderId: process.env.REACT_APP_DB_SENDER,
    appId: process.env.REACT_APP_DB_APP_ID,
    measurementId: process.env.REACT_APP_DB_MEASURE
};
const firebaseApp = initializeApp(config);
const db = getFirestore();

export {db, firebaseApp}