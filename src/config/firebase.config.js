import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCvs4upU9Kj549KIuLE9gerHJbhBE-wqwQ",
  authDomain: "paqm-35b3b.firebaseapp.com",
  databaseURL:
    "https://paqm-35b3b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "paqm-35b3b",
  storageBucket: "paqm-35b3b.appspot.com",
  messagingSenderId: "107255192817",
  appId: "1:107255192817:web:d684d0dcfeac3d22e25d50",
  measurementId: "G-7BZ1SJ6B7R",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// const analytics = getAnalytics(app);