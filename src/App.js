import './App.scss';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Swipe from './pages/Swipe/Swipe';
import Onboarding from './pages/Onboarding/Onboarding';
import ProfileCreation from './pages/ProfileCreation/ProfileCreation';
import Name from './pages/Name/Name';
import Questions from './pages/Questions/Questions';
import Photo from './pages/Photo/Photo';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignIn from './pages/SignIn/SignIn';
import { AuthContextProvider  } from './context/AuthContext/AuthContext'
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
    return (
        <>
        <AuthContextProvider >
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
                <Route path="/account" element={<ProfilePage/>}/>
            </Routes>
        </AuthContextProvider >
        </>
    );
}

export default App;


