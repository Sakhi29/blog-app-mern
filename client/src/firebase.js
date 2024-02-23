// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-cca21.firebaseapp.com",
  projectId: "mern-blog-cca21",
  storageBucket: "mern-blog-cca21.appspot.com",
  messagingSenderId: "302133097228",
  appId: "1:302133097228:web:7dfeb7e55733298d388f29",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
