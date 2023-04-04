import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAKysrak3dR04CmyzDICf3JFzq29-78v_A",
  authDomain: "tiktok---jornada-78ffe.firebaseapp.com",
  projectId: "tiktok---jornada-78ffe",
  storageBucket: "tiktok---jornada-78ffe.appspot.com",
  messagingSenderId: "844757038650",
  appId: "1:844757038650:web:82d7168a47b6ad6792a703",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
