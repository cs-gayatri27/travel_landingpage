import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfwUcyzXmAdNMZCkR9g6VmGZSV1H-FSWI",
  authDomain: "wander-app-3b26f.firebaseapp.com",
  projectId: "wander-app-3b26f",
  storageBucket: "wander-app-3b26f.firebasestorage.app",
  messagingSenderId: "547773941203",
  appId: "1:547773941203:web:3924ebe0d4153a79499b26",
};


const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export { auth, db };