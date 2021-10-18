// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import "firebase/databse";

const firebaseConfig = {
  apiKey: "AIzaSyCd__wNacyGEKZ3bqwJuTGJQe_lDiT0cP4",
  authDomain: "monday-dev-10345.firebaseapp.com",
  projectId: "monday-dev-10345",
  storageBucket: "monday-dev-10345.appspot.com",
  messagingSenderId: "162913847725",
  appId: "1:162913847725:web:987c278f0b2ac0a5843924"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
