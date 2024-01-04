// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOhuyUDoPZgVN1yMejYzzVi7gy3O3jhhs",
  authDomain: "fixit-52cfe.firebaseapp.com",
  projectId: "fixit-52cfe",
  storageBucket: "fixit-52cfe.appspot.com",
  messagingSenderId: "489703757709",
  appId: "1:489703757709:web:c3952a3ac6ffc77b9f8fc4",
  measurementId: "G-68KHDXBVS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, provider};
