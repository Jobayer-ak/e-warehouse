import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXqVUV_xs0OyODQDz_U1otkGYBZPr55S4",
  authDomain: "e-warehouse-management.firebaseapp.com",
  projectId: "e-warehouse-management",
  storageBucket: "e-warehouse-management.appspot.com",
  messagingSenderId: "224765827704",
  appId: "1:224765827704:web:e8655b201066b934232b8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
