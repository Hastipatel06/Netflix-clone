import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6KhoWpo6Kq4Qc2anQQGcam5Pu_unWaZ0",
  authDomain: "ott-plateform-a9b8e.firebaseapp.com",
  databaseURL: "https://ott-plateform-a9b8e-default-rtdb.firebaseio.com",
  projectId: "ott-plateform-a9b8e",
  storageBucket: "ott-plateform-a9b8e.appspot.com",
  messagingSenderId: "410007636612",
  appId: "1:410007636612:web:569ac39e2b90be69a490d1",
  measurementId: "G-C3S0P8WGFV"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
