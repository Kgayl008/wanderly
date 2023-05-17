import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAmBhobFQTeR4nQFTI73OVuyPmMbKhInAo",
    authDomain: "wanderly-bd918.firebaseapp.com",
    projectId: "wanderly-bd918",
    storageBucket: "wanderly-bd918.appspot.com",
    messagingSenderId: "692471075888",
    appId: "1:692471075888:web:1434e04556f53e1e5ac9f5",
    measurementId: "G-DH1X58LYJH"
};


const firebaseApp = firebase.default.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

export default firestore;
export const auth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp)




