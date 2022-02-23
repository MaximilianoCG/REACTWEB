import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBoCyg6YGmXJU59j-ZlsvohVljW8iTkZls",
  authDomain: "reactweb-51cf6.firebaseapp.com",
  projectId: "reactweb-51cf6",
  storageBucket: "reactweb-51cf6.appspot.com",
  messagingSenderId: "907527950959",
  appId: "1:907527950959:web:96260d09cd07e7c958339a",
  measurementId: "G-617Y9MQNHJ"
};

const app = initializeApp(firebaseConfig);

export const bd = getFirestore(app);