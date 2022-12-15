// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcFX9FB-5WYU5k3BjHMWWOq6PMsJcpnxQ",
  authDomain: "dochub-620b4.firebaseapp.com",
  projectId: "dochub-620b4",
  storageBucket: "dochub-620b4.appspot.com",
  messagingSenderId: "123679169372",
  appId: "1:123679169372:web:053e46a9b769efffd3ff99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);