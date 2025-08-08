import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// It is strongly recommended to use environment variables for this configuration
// to avoid exposing sensitive keys in your source code.
// Example: apiKey: import.meta.env.VITE_FIREBASE_API_KEY
const firebaseConfig = {
    apiKey: "AIzaSyA3b6vvc6cwDc_OUwI_pgta_Mc9b8IED8E",
    authDomain: "prepbuddy-d9e0d.firebaseapp.com",
    projectId: "prepbuddy-d9e0d",
    storageBucket: "prepbuddy-d9e0d.firebasestorage.app",
    messagingSenderId: "723887425143",
    appId: "1:723887425143:web:88dd95604660c8b28c2872",
    measurementId: "G-N80R8E4W84"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
