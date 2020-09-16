import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBI5-rctWkg99lFxmGZD6ygn4PHPOgCtec",
  authDomain: "clone-5ea6a.firebaseapp.com",
  databaseURL: "https://clone-5ea6a.firebaseio.com",
  projectId: "clone-5ea6a",
  storageBucket: "clone-5ea6a.appspot.com",
  messagingSenderId: "486398752528",
  appId: "1:486398752528:web:279c2b1aad86c91bedd795",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
