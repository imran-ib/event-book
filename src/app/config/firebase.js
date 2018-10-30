import firebase from "firebase";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdFztHAnkpgtdAAf-EJxZJ8vt5kP3pur4",
  authDomain: "eventbook-220218.firebaseapp.com",
  databaseURL: "https://eventbook-220218.firebaseio.com",
  projectId: "eventbook-220218",
  storageBucket: "eventbook-220218.appspot.com",
  messagingSenderId: "788187771568"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);
export default firebase;
