import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3mKr6QRTgeYjki0-6Y9LBQukZimA8SP4",
  authDomain: "linkedin-profile-2272c.firebaseapp.com",
  projectId: "linkedin-profile-2272c",
  storageBucket: "linkedin-profile-2272c.appspot.com",
  messagingSenderId: "127625452828",
  appId: "1:127625452828:web:2594d1878429cee8d2eed9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
