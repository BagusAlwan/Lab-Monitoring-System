import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyByVXS6O_aE3NAwsVmCZ4u68gpNlSg5gyc",
  authDomain: "labmonitoringsystem-mipa.firebaseapp.com",
  projectId: "labmonitoringsystem-mipa",
  storageBucket: "labmonitoringsystem-mipa.appspot.com",
  messagingSenderId: "130242568980",
  appId: "1:130242568980:web:0ea0a11022292868a25801",
  measurementId: "G-TK19BQ3FN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app; 
};