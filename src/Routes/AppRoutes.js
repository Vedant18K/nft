import React from 'react'
import { Routes, Route } from 'react-router-dom';

import AboutUs from '../HomePage/AboutUs';
import Home from '../HomePage/Home';
import Contact from '../ContactUs/Contact';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
    
            



        </Routes>
    )
}

export default AppRoutes