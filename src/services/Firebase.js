// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore
// import { getDatabase } from "firebase/database"; // For Realtime Database

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};
console.log("Firebase project ID:", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
const app = initializeApp(firebaseConfig);

// Use Firestore or Realtime Database
export const db = getFirestore(app); // Firestore
// export const db = getDatabase(app); // Realtime Database