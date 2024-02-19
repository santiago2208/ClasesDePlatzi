// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmppsVKjNiH6oL5jYQkziNCLIEch7Bk_U",
  authDomain: "portafolio-santiago.firebaseapp.com",
  projectId: "portafolio-santiago",
  storageBucket: "portafolio-santiago.appspot.com",
  messagingSenderId: "413382784799",
  appId: "1:413382784799:web:00b1c118de2ed03927e22a",
  measurementId: "G-6RLBLZ09BG"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, app, analytics, storage };