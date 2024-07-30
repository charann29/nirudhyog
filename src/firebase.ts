// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6YgwEcY_QwdL1bd8rB5EWBlClvHoviq0",
  authDomain: "nirudhyog.firebaseapp.com",
  projectId: "nirudhyog",
  storageBucket: "nirudhyog.appspot.com",
  messagingSenderId: "529783372877",
  appId: "1:529783372877:web:cad9536d645212667d7004",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
