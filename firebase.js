// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhpX3Ny24TB9691vX7likbKYo03riunXI",
  authDomain: "jamatlogin.firebaseapp.com",
  databaseURL: "https://jamatlogin-default-rtdb.firebaseio.com",
  projectId: "jamatlogin",
  storageBucket: "jamatlogin.firebasestorage.app",
  messagingSenderId: "924328603399",
  appId: "1:924328603399:web:83d89ec6be7c51b656dfa2",
  measurementId: "G-6C5TMQ9M7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export db (Realtime Database)
export const db = getDatabase(app);
