// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfTy1iAeAIgIBOKBr-isMtbbSFqndsgME",
    authDomain: "assignment-10-clint-837e6.firebaseapp.com",
    projectId: "assignment-10-clint-837e6",
    storageBucket: "assignment-10-clint-837e6.firebasestorage.app",
    messagingSenderId: "72804579142",
    appId: "1:72804579142:web:75d508d981b57ae69c5747"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;