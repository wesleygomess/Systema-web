import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaPzMab8qlnfqTscp4T6ExUtxYFMqoiV0",
  authDomain: "sistema-90d8c.firebaseapp.com",
  projectId: "sistema-90d8c",
  storageBucket: "sistema-90d8c.appspot.com",
  messagingSenderId: "537153662438",
  appId: "1:537153662438:web:808449a0a11749a685fa27",
  measurementId: "G-CJNQY4JJFT",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
