// import { BrowserRouter as Route, Router, } from 'react-router-dom';
import './App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Swipe from './pages/Swipe/Swipe';
import Onborading from './pages/Onborading/Onborading';
import ProfileCreation from './pages/ProfileCreation/ProfileCreation';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Swipe />} />
        <Route path="/onborading" element={<Onborading />} />
        <Route path="/profile" element={<ProfileCreation />} />
    </Routes>
    </>
  );
}

export default App;
