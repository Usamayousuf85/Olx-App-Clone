// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBRgM4dlXBMOAeBOyv9w2sI9dPJrNv5jg",
  authDomain: "olxapp-e7daa.firebaseapp.com",
  projectId: "olxapp-e7daa",
  storageBucket: "olxapp-e7daa.appspot.com",
  messagingSenderId: "834946262333",
  appId: "1:834946262333:web:b21343e1a7082168d65154",
  measurementId: "G-F7HW6H2K8M"
};

// Initialize Firebase
const Firebaseapp = firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();

export {
  Firebaseapp,
  firebase,
  storage
}
