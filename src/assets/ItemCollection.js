
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAld6Wr_deWIkxZGhK5fi8LzguVI2_8EmU",
  authDomain: "e-commers-haituc.firebaseapp.com",
  projectId: "e-commers-haituc",
  storageBucket: "e-commers-haituc.appspot.com",
  messagingSenderId: "173330136599",
  appId: "1:173330136599:web:39829df65d105d23402652"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
