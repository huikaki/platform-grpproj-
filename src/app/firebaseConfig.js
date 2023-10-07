import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfil,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyDHCi4rKxVQixrzfJZ3cg9hAH9cRs5MS28",
  authDomain: "ai-platform-ba9a3.firebaseapp.com",
  projectId: "ai-platform-ba9a3",
  storageBucket: "ai-platform-ba9a3.appspot.com",
  messagingSenderId: "791723701048",
  appId: "1:791723701048:web:093f5756edd9923d7e87cd",
  measurementId: "G-YGRHY8RF8H",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export default Storage = getStorage();
export const database = getAuth();
export {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
