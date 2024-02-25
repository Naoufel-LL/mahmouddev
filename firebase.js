// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoVgQPUHMgOI-gtJqWYpuhdlkHijIegyQ",
  authDomain: "cinema-33a06.firebaseapp.com",
  projectId: "cinema-33a06",
  storageBucket: "cinema-33a06.appspot.com",
  messagingSenderId: "48576375850",
  appId: "1:48576375850:web:a1d7bb7c3ba9d3683ce753",
  measurementId: "G-JRL5F04LQL"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage,firebase}