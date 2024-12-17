// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7RkR77hxAX3wTsgX6J4h9kdqXD5OGo8Y",
    authDomain: "axelabs-portfolio.firebaseapp.com",
    projectId: "axelabs-portfolio",
    storageBucket: "axelabs-portfolio.firebasestorage.app",
    messagingSenderId: "183820522606",
    appId: "1:183820522606:web:ed3e1f8fa7702c6788c27f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export { app, analytics };
