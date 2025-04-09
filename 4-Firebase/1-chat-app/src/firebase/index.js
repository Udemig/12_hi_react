// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//! auth importları
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//! database import
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvexYv-B57TTV3ClqkLnGh64SI6baE7F8",
  authDomain: "hi-chat-ddabf.firebaseapp.com",
  projectId: "hi-chat-ddabf",
  storageBucket: "hi-chat-ddabf.firebasestorage.app",
  messagingSenderId: "1009888273224",
  appId: "1:1009888273224:web:e9c02bfe6091184e63097d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! google sağlayıcısnı kur
export const provider = new GoogleAuthProvider();

//! auth hizmetini referansını al
export const auth = getAuth(app);

//! database hizmetinin referansını al
export const db = getFirestore(app);
