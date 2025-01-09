
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDaiIowap-vVQmdZd14bLJw9Xs4ZEkZuy8",
    authDomain: "nextologic-solutions.firebaseapp.com",
    databaseURL: "https://nextologic-solutions-default-rtdb.asia-southeast1.firebasedatabase.app/",
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
const realtimeDb = getDatabase(app);
export { auth, provider,db,realtimeDb };