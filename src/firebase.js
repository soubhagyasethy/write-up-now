import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsadtwuTeLtog2u-gW633aQwqL6KQdMqM",
  authDomain: "write-up-now.firebaseapp.com",
  projectId: "write-up-now",
  storageBucket: "write-up-now.appspot.com",
  messagingSenderId: "547965638488",
  appId: "1:547965638488:web:87dcdf0c44ae868c84372d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
