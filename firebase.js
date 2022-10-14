// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ4cgXlyqNw2GJAFSH9qZ-lgEIiBuhFfk",
  authDomain: "facebookfor-c3146.firebaseapp.com",
  projectId: "facebookfor-c3146",
  storageBucket: "facebookfor-c3146.appspot.com",
  messagingSenderId: "244491185737",
  appId: "1:244491185737:web:cab7497d1974339b319998",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
