import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBLLNhV-p2i4lSv4IbLTJcFxP5PSKjjBk4",
  authDomain: "emii-cdc76.firebaseapp.com",
  databaseURL:
    "https://emii-cdc76-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "emii-cdc76",
  storageBucket: "emii-cdc76.appspot.com",
  messagingSenderId: "837995728498",
  appId: "1:837995728498:web:579a7d9da236ebbed93ceb",
  measurementId: "G-5C4QQHFQWF",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// const analytics = getAnalytics(app);