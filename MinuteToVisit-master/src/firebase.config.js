// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { enableIndexedDbPersistence } from "firebase/firestore"; 
import { initializeFirestore, CACHE_SIZE_UNLIMITED } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyDdo0ShuozF1plJ3LE-PifLuO8ptV7Kxkw" ,
  authDomain:  "minutetovisit-67dd9.firebaseapp.com",
  databaseURL:"https://minutetovisit-67dd9-default-rtdb.firebaseio.com",
  projectId: "minutetovisit-67dd9",
  storageBucket: "minutetovisit-67dd9.appspot.com",
  messagingSenderId: "781849071772",
  appId: "1:781849071772:web:647e71e266d329349cdd59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
    cacheSizeBytes: CACHE_SIZE_UNLIMITED
  });
const storage = getStorage();
// ENABLE OFFLINE PERSISTANCE
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code === 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
export {app,db,storage}