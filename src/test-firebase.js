import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
console.log('aaa');
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// *************** firebase Init ***************
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

import { addDoc, collection } from "firebase/firestore";

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
console.log('test-fireBase.js');
