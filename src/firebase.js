import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA7rRMP8Yu-CUvyDeqsEO_hF1fHsfOuELI",
  authDomain: "yenedata-5ca78.firebaseapp.com",
  projectId: "yenedata-5ca78",
  storageBucket: "yenedata-5ca78.appspot.com",
  messagingSenderId: "19237226566",
  appId: "1:19237226566:web:779102f37ff57485e62247",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
