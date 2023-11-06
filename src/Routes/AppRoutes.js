import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../HomePage.js/Header';
import Slider from '../HomePage.js/Slider';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/slider" element={<Slider />} />
            
            



        </Routes>
    )
}

export default AppRoutes