import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCpKwY37rHdFZMIFXBgK5Wa1Tf809JzZwc",
    authDomain: "restaurantapp-ec685.firebaseapp.com",
    databaseURL: "https://restaurantapp-ec685-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ec685",
    storageBucket: "restaurantapp-ec685.appspot.com",
    messagingSenderId: "4336905279",
    appId: "1:4336905279:web:94a22be042078fc5e25c8a"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };