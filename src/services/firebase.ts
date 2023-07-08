import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuw84-tMjjv4BtvcopBeoBwUEKHK_fI_c",
    authDomain: "master-games-6bbae.firebaseapp.com",
    projectId: "master-games-6bbae",
    storageBucket: "master-games-6bbae.appspot.com",
    messagingSenderId: "590034589270",
    appId: "1:590034589270:web:a589afdc16c2172e058df7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
