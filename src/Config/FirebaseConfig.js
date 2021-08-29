import { initializeApp } from "firebase/app"
import {getAuth,GoogleAuthProvider} from'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBep4vJpOSfDQOjlw3i5Uoog30ot_6hSvI",
    authDomain: "find-the-focus.firebaseapp.com",
    projectId: "find-the-focus",
    storageBucket: "find-the-focus.appspot.com",
    messagingSenderId: "886158223317",
    appId: "1:886158223317:web:b85cd70d635ce5fcdd3f5c"
  };
  const firebaseApp=initializeApp(firebaseConfig);
  
  const localAuth = getAuth();
  const authProviderGoogle = new GoogleAuthProvider();
//   const authProviderFb = new  firebase.auth.FacebookAuthProvider();
  const localFireDb = firebaseApp.firestore;

  export {localAuth,localFireDb,authProviderGoogle}
