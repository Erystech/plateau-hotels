// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6pbtAqKpdvSSXvMWtgaMIxjC78F-faO0",
  authDomain: "plateauhotels.firebaseapp.com",
  projectId: "plateauhotels",
  storageBucket: "plateauhotels.firebasestorage.app",
  messagingSenderId: "316586369085",
  appId: "1:316586369085:web:51f6b5e4f275c0f0940a54",
  measurementId: "G-CE02RQC0BZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);




export default app;
