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
import Expores from '../Explore/Expores';
import CreateNft from '../Pages/CreateNft';
import UserType from '../Pages/UserType';
import ConnectWallet from '../Wallet/ConnectWallet';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';


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
            <Route path="/explore" element={<Expores/>}/>
            <Route path="/pages" element={<Pages/>}/>
            <Route path="/create-nft" element={<CreateNft/>}/>
            <Route path="/user-type" element={<UserType/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/connect-wallet" element={<ConnectWallet/>}/>
        </Routes>
        <Footer/>
        </div>
    )
}

export default AppRoutes