// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABunAc23gL4rHNVUo4nrRBYXrRfyBUS6w",
  authDomain: "online-project-2.firebaseapp.com",
  projectId: "online-project-2",
  storageBucket: "online-project-2.appspot.com",
  messagingSenderId: "60346424528",
  appId: "1:60346424528:web:5007fd6e9c99d38e77d2d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;