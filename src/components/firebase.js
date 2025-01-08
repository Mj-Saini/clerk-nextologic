
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDaiIowap-vVQmdZd14bLJw9Xs4ZEkZuy8",
    authDomain: "nextologic-solutions.firebaseapp.com",
    projectId: "nextologic-solutions",
    storageBucket: "nextologic-solutions.firebasestorage.app",
    messagingSenderId: "432634474215",
    appId: "1:432634474215:web:8a1f75885c073255e6fc42"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth
const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider
const db = getFirestore(app); 
export { auth, provider,db };