// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcPeRGX284axT1Gad-YEc2cqeJVxWHZCU",
    authDomain: "task-f58a5.firebaseapp.com",
    projectId: "task-f58a5",
    storageBucket: "task-f58a5.appspot.com",
    messagingSenderId: "89599326282",
    appId: "1:89599326282:web:a6fd2133f4f7b1d1ec8eb3",
    measurementId: "G-KF961PMWW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth };