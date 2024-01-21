import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQCa8md8uWuQCnisn26AwRIeSg85nU1QY",
    authDomain: "indiancompany-895c2.firebaseapp.com",
    projectId: "indiancompany-895c2",
    storageBucket: "indiancompany-895c2.appspot.com",
    messagingSenderId: "599978147366",
    appId: "1:599978147366:web:952fd166babccbf629f0e7",
    measurementId: "G-GQ65L8K506"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth};