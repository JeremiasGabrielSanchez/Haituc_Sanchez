import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPK_cwb8p0wNT2Hd7jllalGofZ_FA_xo4",
    authDomain: "ecommers-coder.firebaseapp.com",
    projectId: "ecommers-coder",
    storageBucket: "ecommers-coder.appspot.com",
    messagingSenderId: "396638462022",
    appId: "1:396638462022:web:9b1f45e3c93d89a0b3ea47"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);