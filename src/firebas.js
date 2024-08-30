// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWS1rEbEkPHpoIKRp4TiSNfrZntrfY9g0",
  authDomain: "clone-74974.firebaseapp.com",
  projectId: "clone-74974",
  storageBucket: "clone-74974.appspot.com",
  messagingSenderId: "1082860930981",
  appId: "1:1082860930981:web:2ad5e9837c76ce6d884a4c",
  measurementId: "G-WZML17SH5P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);