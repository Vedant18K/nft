import React from 'react'
import { Routes, Route } from 'react-router-dom';

import AboutUs from '../HomePage/AboutUs';
import Home from '../HomePage/Home';
import Contact from '../ContactUs/Contact';

import Blog from '../Blog/Blog';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
    
            



        </Routes>
    )
}

export default AppRoutes