import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgF5YuRGOczKRsNo4XBLHjqhGpYUOKHGU",
    authDomain: "wanderly-455da.firebaseapp.com",
    projectId: "wanderly-455da",
    storageBucket: "wanderly-455da.appspot.com",
    messagingSenderId: "1071553837847",
    appId: "1:1071553837847:web:a814395097986a1004d552",
    measurementId: "G-JZ5TJZX64M"
};

const firebaseApp = firebase.initailizingApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;