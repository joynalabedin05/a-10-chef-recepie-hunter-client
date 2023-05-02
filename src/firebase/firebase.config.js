// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa9M86hN55H258KrjukVvFqQmRA_S8MOo",
  authDomain: "a10-chef-recipe-hunter-client.firebaseapp.com",
  projectId: "a10-chef-recipe-hunter-client",
  storageBucket: "a10-chef-recipe-hunter-client.appspot.com",
  messagingSenderId: "213104467771",
  appId: "1:213104467771:web:2a1918977fa3d186a6211e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;