// database/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

//oplysninger der forbinder appen til mit Firebase projekt (kopieret fra Firebase Console)
const firebaseConfig = {
  apiKey: 'AIzaSyADvLE1FbPoLUyrLKn-pWv3bnVDd8RUThk',
  authDomain: 'fir-4106c.firebaseapp.com',
  databaseURL: 'https://fir-4106c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'fir-4106c',
  storageBucket: 'fir-4106c.firebasestorage.app',
  messagingSenderId: '151509578913',
  appId: '1:151509578913:web:719db1500796dc460b6ce0',
};

//starter kun Firebase én gang, så appen ikke fejler ved genindlæsning
export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

//forbindelse til Realtime Database
export const rtdb = getDatabase(firebaseApp, 'https://fir-4106c-default-rtdb.europe-west1.firebasedatabase.app');