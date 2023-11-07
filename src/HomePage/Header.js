import React from "react";
import logoicon from "../Images/logo-dark.webp";
import bellicon from "../Images/bell.svg";
import darktheme from "../Images/moon.svg";
// import whitetheme from "../Images/sun.svg";
import Slider from "./Slider";
import LiveBidding from "./LiveBidding";

import NewestItem from "./NewestItem";
import TopSeller from "./TopSeller";
import TopCollection from "./TopCollection";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="pb-10 ">
      <div className="flex pt-4 pb-4 mx-4  fixed bg-white z-20 w-full">
        <div>
          <div>
            <img alt="logoicon" src={logoicon}></img>
          </div>
        </div>
        <div className="flex justify-between w-[90%]">
          <div>
            <ul className="flex px-10 pt-2 gap-7">
              <li>Home</li>
              <li><Link to="/about"> About</Link></li>
              <li>Explore</li>
              <li>Pages</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex pt-2  ">
            <div>
              <input
                placeholder="search Here"
                type="text"
                className="bg-transparent "
              />
            </div>
            <div>
              <button className=" border 2 solid rounded-md px-2 text-white bg-[#212e48] hover:bg-[#00a3ff] whitespace-nowrap">
                Connect Wallet
              </button>
            </div>
            <div>
              <img alt="bellicon" src={bellicon} />
            </div>
            <div>
              {" "}
              <img alt="darktheme" src={darktheme} />
            </div>
          </div>
        </div>
      </div>
      <Slider />
      <LiveBidding />
      <NewestItem />
      <TopSeller />
      <TopCollection />
      <Footer />
    </div>
  );
};

export default Header;
