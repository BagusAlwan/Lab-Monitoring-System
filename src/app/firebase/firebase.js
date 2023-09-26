// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh35nDHwKyhzhQkrXzW7r7LPO4yzHgYOE",
  authDomain: "lab-monitoring-system-7f4d2.firebaseapp.com",
  projectId: "lab-monitoring-system-7f4d2",
  storageBucket: "lab-monitoring-system-7f4d2.appspot.com",
  messagingSenderId: "620793170711",
  appId: "1:620793170711:web:cf59e532ba065da05c8552",
  measurementId: "G-7XPVXYMVFL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app; 
};