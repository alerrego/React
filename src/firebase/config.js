// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm_kamPrLHAX7yUASXzROTtEq6kYIiTxs",
  authDomain: "e-commerce-ae05f.firebaseapp.com",
  projectId: "e-commerce-ae05f",
  storageBucket: "e-commerce-ae05f.appspot.com",
  messagingSenderId: "838893022146",
  appId: "1:838893022146:web:ed6059c3481c4fa7c2045b",
  measurementId: "G-JXK3RS9LZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)