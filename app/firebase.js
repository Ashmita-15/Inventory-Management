 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIpRFR1bHam-xEEnpQgYqpWSNMiIhMqXo",
  authDomain: "pantryapp-76a92.firebaseapp.com",
  projectId: "pantryapp-76a92",
  storageBucket: "pantryapp-76a92.appspot.com",
  messagingSenderId: "217671908136",
  appId: "1:217671908136:web:d197aa891ed89ec6092e1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app)
export{app,firestore};
