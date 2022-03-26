import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzGDmkpleMOnFu7NdilZSCQR5CF4pKEKg",
  authDomain: "facebook-ksf.firebaseapp.com",
  projectId: "facebook-ksf",
  storageBucket: "facebook-ksf.appspot.com",
  messagingSenderId: "235025511050",
  appId: "1:235025511050:web:c74005cfb577fe3dba3373",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
