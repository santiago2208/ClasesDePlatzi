// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMpc_ViB_Or_IKEPdlM1vuaaINHxOxExk",
  authDomain: "gestordetareas-ff728.firebaseapp.com",
  projectId: "gestordetareas-ff728",
  storageBucket: "gestordetareas-ff728.appspot.com",
  messagingSenderId: "734151906494",
  appId: "1:734151906494:web:3b124405c715c5a6447aef",
  measurementId: "G-5Z1106WE81"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db, app, analytics};