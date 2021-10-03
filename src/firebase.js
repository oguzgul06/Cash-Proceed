import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlNnSnuteI-uEAVBtVuvzznNAOxBR_ecs",
  authDomain: "cash-proceed.firebaseapp.com",
  projectId: "cash-proceed",
  storageBucket: "cash-proceed.appspot.com",
  messagingSenderId: "451451697414",
  appId: "1:451451697414:web:eae08855c1734ce02e4687",
  measurementId: "G-4L6WFLGYG5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
