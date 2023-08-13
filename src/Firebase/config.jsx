import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAXRWJtc2riVAED1co-wpwSTSMxXBaxDY8",
  authDomain: "puss-in-books.firebaseapp.com",
  projectId: "puss-in-books",
  storageBucket: "puss-in-books.appspot.com",
  messagingSenderId: "537465897127",
  appId: "1:537465897127:web:33fc3da2ca849862da9b82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db