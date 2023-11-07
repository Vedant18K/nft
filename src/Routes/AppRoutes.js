import React from 'react'
import { Routes, Route } from 'react-router-dom';

import AboutUs from '../HomePage/AboutUs';
import Home from '../HomePage/Home';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            
            <Route path="/about" element={<AboutUs />} />
            
            



        </Routes>
    )
}

export default AppRoutes