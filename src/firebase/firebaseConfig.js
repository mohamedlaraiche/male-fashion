import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API,
  authDomain: "male-fashion-c0766.firebaseapp.com",
  projectId: "male-fashion-c0766",
  storageBucket: "male-fashion-c0766.appspot.com",
  messagingSenderId: "1026289353021",
  appId: "1:1026289353021:web:e440a346e88cbbe0a68554",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
