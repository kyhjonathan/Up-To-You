// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqEx7naRnXTxn7kbbz4YIpzVsq_sh5r2E",
  authDomain: "up-to-you-2ed14.firebaseapp.com",
  projectId: "up-to-you-2ed14",
  storageBucket: "up-to-you-2ed14.firebasestorage.app",
  messagingSenderId: "1056259685221",
  appId: "1:1056259685221:web:3d32b3451d93135b3aff8c",
  measurementId: "G-MCMDCXL152",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
