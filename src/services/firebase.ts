// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBakgMOXtArtiKaKY2B-qTZeB7iyvmphEg",
  authDomain: "jpdevelopment-e7fb7.firebaseapp.com",
  projectId: "jpdevelopment-e7fb7",
  storageBucket: "jpdevelopment-e7fb7.appspot.com",
  messagingSenderId: "716665820625",
  appId: "1:716665820625:web:536ce9b16c4968567e7cf0",
  measurementId: "G-5QF93LSGFE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
