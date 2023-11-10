import React from 'react'
import { Routes, Route } from 'react-router-dom';

import AboutUs from '../HomePage/AboutUs';
import Home from '../HomePage/Home';
import Contact from '../ContactUs/Contact';
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer"
import Blog from '../Blog/Blog';
import Notification from '../Notification/Notification';
import Pages from '../Pages/Pages';


const AppRoutes = () => {
    return (
        <div>
             <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/pages" element={<Pages/>}/>
        </Routes>
        <Footer/>
        </div>
    )
}

export default AppRoutes