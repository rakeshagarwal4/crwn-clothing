import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBzYIwsyAce4FJV2uZr-cmMw_TlnZbC2wg",
  authDomain: "crwn-db-9ce16.firebaseapp.com",
  projectId: "crwn-db-9ce16",
  storageBucket: "crwn-db-9ce16.appspot.com",
  messagingSenderId: "442045867242",
  appId: "1:442045867242:web:51f20ea8a75e51fb756393",
  measurementId: "G-B6YWZS6NF4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
