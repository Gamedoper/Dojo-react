import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhGiRNHyB9ZpqjwuOhnSGgNlUpuUUOh0Q",
  authDomain: "dojo-react-ff02e.firebaseapp.com",
  projectId: "dojo-react-ff02e",
  storageBucket: "dojo-react-ff02e.appspot.com",
  messagingSenderId: "709701380035",
  appId: "1:709701380035:web:de6be23a86312d409e3f76",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// initialize services

const projetAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.Timestamp;

export { projetAuth, projectFirestore, timestamp };
