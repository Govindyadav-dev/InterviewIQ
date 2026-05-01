
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "interviewiq-674b6.firebaseapp.com",
  projectId: "interviewiq-674b6",
  storageBucket: "interviewiq-674b6.firebasestorage.app",
  messagingSenderId: "1098556652518",
  appId: "1:1098556652518:web:cd1bc346a73f306e80b427"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}