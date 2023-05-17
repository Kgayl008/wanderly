// import { BrowserRouter as Route, Router, } from 'react-router-dom';
import './App.scss';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Swipe from './pages/Swipe/Swipe';
import Onboarding from './pages/Onboarding/Onboarding';
import ProfileCreation from './pages/ProfileCreation/ProfileCreation';
import Chat from './pages/Chat/Chat';
import Name from './pages/Name/Name';
import Questions from './pages/Questions/Questions';
import Photo from './pages/Photo/Photo';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignIn from './pages/SignIn/SignIn';
import { AuthProvider } from './context/AuthContext/AuthContext'

function App() {
    return (
        <>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignIn/>}/>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/onboarding" element={<Onboarding/>}/>
                <Route path="/name" element={<Name/>}/>
                <Route path="/photo" element={<Photo/>}/>
                <Route path="/profile" element={<ProfileCreation/>}/>
                <Route path="/questions" element={<Questions/>}/>
                <Route path="/swipe" element={<Swipe/>}/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </AuthProvider>
        </>
    );
}

export default App;


// const db = firebase.firestore();

// // Create a new collection for users
// const usersCollection = db.collection("users");

// // Export the collection for use in other parts of your app
// export { usersCollection };
