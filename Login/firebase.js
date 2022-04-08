// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDw2lasBN9aj8Hz4Z90G0CzCepQNpLrkCk",
    authDomain: "newsapp-a6cef.firebaseapp.com",
    projectId: "newsapp-a6cef",
    storageBucket: "newsapp-a6cef.appspot.com",
    messagingSenderId: "370016376898",
    appId: "1:370016376898:web:3674cd8a8a972557b035db"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };