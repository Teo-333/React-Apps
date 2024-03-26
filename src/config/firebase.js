import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlS8Y4YTtKJrWrD5cD36cWU2DNMtjEXss",
  authDomain: "ut-6-9e409.firebaseapp.com",
  projectId: "ut-6-9e409",
  storageBucket: "ut-6-9e409.appspot.com",
  messagingSenderId: "11029995073",
  appId: "1:11029995073:web:c187c965df75350355b0c0",
  measurementId: "G-7FVV2S7JWY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
