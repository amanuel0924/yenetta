import { initializeApp } from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCcLtNBl8qNo2O0xEzZCKgiTqNp3vVjc78",
  authDomain: "yenetta-c043d.firebaseapp.com",
  databaseURL: "https://yenetta-c043d-default-rtdb.firebaseio.com",
  projectId: "yenetta-c043d",
  storageBucket: "yenetta-c043d.appspot.com",
  messagingSenderId: "153276346532",
  appId: "1:153276346532:web:5e2e6cf32d50edaa133631",
}

const db = initializeApp(firebaseConfig)
export default db.database().ref()
