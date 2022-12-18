// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAsH1LroPoKf_VxWjdTL9oKnW7kVKODbm4",
  authDomain: "mobile-app-goit.firebaseapp.com",
  projectId: "mobile-app-goit",
  storageBucket: "mobile-app-goit.appspot.com",
  messagingSenderId: "757563968771",
  appId: "1:757563968771:web:deee7d4ad1bda69965ed36",
  measurementId: "G-98DH4HK0RZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
