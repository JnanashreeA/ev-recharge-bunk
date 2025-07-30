import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBaTs64m3djgPuYJOkfftHLFwvrmfMO32Y",
  authDomain: "ev-recharge-bunk-b4d01.firebaseapp.com",
  projectId: "ev-recharge-bunk-b4d01",
  storageBucket: "ev-recharge-bunk-b4d01.firebasestorage.app",
  messagingSenderId: "658796823918",
  appId: "1:658796823918:web:5725799b0704fe4b6ded7f",
  measurementId: "G-QLEG6XYVSS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
