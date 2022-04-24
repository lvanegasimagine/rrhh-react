import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBf-pkh4p7zBg3aaZXpSfIKn037eT9DBjc",
  authDomain: "mymoney-7fe60.firebaseapp.com",
  projectId: "mymoney-7fe60",
  storageBucket: "mymoney-7fe60.appspot.com",
  messagingSenderId: "213738164749",
  appId: "1:213738164749:web:08019760429025a2583b44",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// init service
const projectAuth = firebase.auth();

export { projectAuth };

