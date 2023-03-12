import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBF-l-52G3EbsGwoY7jXhacUjQYaZB5Zjk",
    authDomain: "linkedin-clone-cf08c.firebaseapp.com",
    projectId: "linkedin-clone-cf08c",
    storageBucket: "linkedin-clone-cf08c.appspot.com",
    messagingSenderId: "205451252043",
    appId: "1:205451252043:web:68e64cec8541bd380ad8ce",
    measurementId: "G-FQ9M8QY071"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };