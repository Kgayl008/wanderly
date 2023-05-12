// import { BrowserRouter as Route, Router, } from 'react-router-dom';
import './App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Swipe from './pages/Swipe/Swipe';
import Onborading from './pages/Onborading/Onborading';
import ProfileCreation from './pages/ProfileCreation/ProfileCreation';
import Chat from './pages/Chat/Chat'

function App() {
  return (
    <>
    <Routes>
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/" element={<Onborading />} />
        <Route path="/profile" element={<ProfileCreation />} />
        <Route path="/chat" element={<Chat/>} />
    </Routes>
    </>
  );
}

export default App;
