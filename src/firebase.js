import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCd__wNacyGEKZ3bqwJuTGJQe_lDiT0cP4",
  authDomain: "monday-dev-10345.firebaseapp.com",
  projectId: "monday-dev-10345",
  storageBucket: "monday-dev-10345.appspot.com",
  messagingSenderId: "162913847725",
  appId: "1:162913847725:web:987c278f0b2ac0a5843924"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);