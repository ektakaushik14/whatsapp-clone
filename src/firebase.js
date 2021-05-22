import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJzvVE2uEeibJUljHEyIgYiXVN3QaLcNE",
  authDomain: "whatsapp-clone-d9cf9.firebaseapp.com",
  projectId: "whatsapp-clone-d9cf9",
  storageBucket: "whatsapp-clone-d9cf9.appspot.com",
  messagingSenderId: "719274419311",
  appId: "1:719274419311:web:b48a77c5ba077da665199a",
  measurementId: "G-GS5QX3X15F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
