import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  GoogleAuthProvider,
  getAuth,
  EmailAuthProvider,
  PhoneAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChxHRY-QysU-EYmkT9zHA44e_1_Kfxhmc",
  authDomain: "olx-cb403.firebaseapp.com",
  databaseURL: "https://olx-cb403-default-rtdb.firebaseio.com",
  projectId: "olx-cb403",
  storageBucket: "olx-cb403.appspot.com",
  messagingSenderId: "1018986593874",
  appId: "1:1018986593874:web:fe08f81c324a049287298b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const emailAuthProvider = new EmailAuthProvider();
const phoneAuthProvider = new PhoneAuthProvider();

export {
  app,
  db,
  storage,
  auth,
  provider,
  emailAuthProvider,
  phoneAuthProvider,
};
