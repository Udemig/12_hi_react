// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvYii1IbyTMkMw2kpzE9J21JOjQrimwlg",
  authDomain: "hi-twitter-2dec6.firebaseapp.com",
  projectId: "hi-twitter-2dec6",
  storageBucket: "hi-twitter-2dec6.firebasestorage.app",
  messagingSenderId: "414427667953",
  appId: "1:414427667953:web:8430697497aadadf017850",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// google sağlacısının kurulumunu yap
export const google = new GoogleAuthProvider();

// auth referansını al
export const auth = getAuth(app);

// veritbanın referansını al
export const db = getFirestore(app);

// medya depolama alanının referansını al
export const storage = getStorage(app);
