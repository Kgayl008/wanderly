// import { BrowserRouter as Route, Router, } from 'react-router-dom';
import './App.scss';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Swipe from './pages/Swipe/Swipe';

function App() {
  return (
    <>
    <Routes>
      <Route path="/swipe" element={<Swipe />} />
    </Routes>
    </>
  );
}

export default App;
