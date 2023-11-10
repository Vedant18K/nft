import React from "react";
import logoicon from "../Images/logo-dark.webp";
import bellicon from "../Images/bell.svg";
import darktheme from "../Images/moon.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="flex pt-4    fixed bg-white z-20 w-full">
        <div>
          <div>
            <img alt="logoicon" src={logoicon}></img>
          </div>
        </div>
        <div className="flex justify-between w-[90%]">
          <div>
            <ul className="flex px-10 pt-2 gap-7">
              <li>
                <Link to="/home"> Home</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>Explore</li>
              <li><Link to="/pages"> Pages</Link></li>
              <li>
                <Link to="/blog"> Blog</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
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
              <Link to="/notification">
                <img alt="bellicon" src={bellicon} />
              </Link>
            </div>
            <div>
              {" "}
              <img alt="darktheme" src={darktheme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
