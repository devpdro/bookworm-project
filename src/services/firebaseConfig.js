import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt2zzAGzyPgsq4-LMjdVNML5jubVDQU1s",
  authDomain: "react-login-a1971.firebaseapp.com",
  projectId: "react-login-a1971",
  storageBucket: "react-login-a1971.appspot.com",
  messagingSenderId: "539630006567",
  appId: "1:539630006567:web:4ed91ba7c4660e39bfb902",
  measurementId: "G-MZD876FGV8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
