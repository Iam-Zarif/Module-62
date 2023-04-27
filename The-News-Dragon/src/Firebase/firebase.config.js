// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFLQeUGdXsnfl4mHFzEPKdciiogzzuB6s",
  authDomain: "the-news-dragon-cba43.firebaseapp.com",
  projectId: "the-news-dragon-cba43",
  storageBucket: "the-news-dragon-cba43.appspot.com",
  messagingSenderId: "832479979470",
  appId: "1:832479979470:web:89eddb50980a9c2011ad9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app