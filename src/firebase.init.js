// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrgvJTOxE5L1uMIvXJTxrpD1iXmkp7ZpU",
    authDomain: "genius-car-services-a8298.firebaseapp.com",
    projectId: "genius-car-services-a8298",
    storageBucket: "genius-car-services-a8298.appspot.com",
    messagingSenderId: "363288388623",
    appId: "1:363288388623:web:c6cc2b6ed541e765892f7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;