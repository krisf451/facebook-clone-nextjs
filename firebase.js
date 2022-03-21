import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAzGDmkpleMOnFu7NdilZSCQR5CF4pKEKg",
  authDomain: "facebook-ksf.firebaseapp.com",
  projectId: "facebook-ksf",
  storageBucket: "facebook-ksf.appspot.com",
  messagingSenderId: "235025511050",
  appId: "1:235025511050:web:c74005cfb577fe3dba3373",
});

const db = getFirestore();
const storage = getStorage();

export { db, storage };
