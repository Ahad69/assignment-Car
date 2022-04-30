// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTanLehnmLsluO30M78eBplEY6WpAoSDU",
  authDomain: "assignment-11-car.firebaseapp.com",
  projectId: "assignment-11-car",
  storageBucket: "assignment-11-car.appspot.com",
  messagingSenderId: "989736318563",
  appId: "1:989736318563:web:6e5cd642b1fa3143802a56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;