// import { BrowserRouter as Route, Router, } from 'react-router-dom';
import './App.scss';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Swipe from './pages/Swipe/Swipe';
import Onborading from './pages/Onborading/Onborading';
import ProfileCreation from './pages/ProfileCreation/ProfileCreation';
import Chat from './pages/Chat/Chat';
import Name from './pages/Name/Name';
import Questions from './pages/Questions/Questions';
import Photo from './pages/Photo/Photo';
import Home from './pages/Home/Home';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="onborading" element={<Onborading/>}/>
                <Route path="/name" element={<Name/>}/>
                <Route path="/photo" element={<Photo/>}/>
                <Route path="/profile" element={<ProfileCreation/>}/>
                <Route path="/questions" element={<Questions/>}/>
                <Route path="/swipe" element={<Swipe/>}/>
                <Route path="/chat" element={<Chat/>}/>
            </Routes>
        </>
    );
}

export default App;


// const db = firebase.firestore();

// // Create a new collection for users
// const usersCollection = db.collection("users");

// // Export the collection for use in other parts of your app
// export { usersCollection };
