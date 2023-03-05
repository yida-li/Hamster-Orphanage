import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgAv9BxFs1WCxBClK0YJpZ8bQokdWr8bw",
    authDomain: "hamster-cc378.firebaseapp.com",
    projectId: "hamster-cc378",
    storageBucket: "hamster-cc378.appspot.com",
    messagingSenderId: "294289844954",
    appId: "1:294289844954:web:a3e560f0b9db24788f93e3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };