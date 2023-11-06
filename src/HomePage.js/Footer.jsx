import React from "react";
import p1 from "../Images/portfolio-01.webp";
import p2 from "../Images/portfolio-02.webp";
import p3 from "../Images/portfolio-03.webp";
import facebook from '../Images/facebook.svg'
import twitter from '../Images/twitter.svg'
import instagram from '../Images/instagram.svg'
import linkedin from '../Images/linkedin.svg'
import mail from '../Images/mail.svg'

const Footer = () => {
  const topbidder = [
    {
      profilepic: p1,
      name: "#21 The Wonder",
      Bid: 1 / 20,
      amout: 0.244,
    },
    {
      profilepic: p2,
      name: "Diamond Dog",
      Bid: 1 / 20,
      amout: 0.022,
    },
    {
      profilepic: p3,
      name: "Morgan11",
      Bid: 1 / 20,
      amout: 0.892,
    },
  ];
  return (
    <div>
      <div className="flex justify-between m-[80px]  py-4">
        <div>
          <div className="pt-4 pb-4">
            Created with the collaboration of over
            <p /> 60 of the world's best Nuron Artists.
          </div>
          <hr />
          <div className="pt-4 pb-8">Get The Latest Nuron Updates</div>

          <div className="border ">
            <input className="p-2" type="text" placeholder="Your Username " />
            <button className="bg-[#13131d] text-white rounded-md p-2 hover:bg-[#00a3ff] "> Subscribe</button>
          </div>
          <div> Email is safe. We don't spam.</div>
        </div>
        <div>
          <div className="font-bold text-[24px]">Nuron</div>
          <div className="pt-4">
            <ul>
              <div className="pt-2">Protocol Explore</div>
              <div className="pt-2">System Token</div>
              <div className="pt-2">Otimize Time</div>
              <div className="pt-2">Visual Checking</div>
              <div className="pt-2">Fadeup System</div>
              <div className="pt-2">Activity Log</div>
              <div className="pt-2">System Auto Since</div>
            </ul>
          </div>
        </div>
        <div>
          <div className="font-bold text-[24px]">Information</div>
          <div className="pt-4 ">
            <ul>
              <div className="pt-2 hover:text-[#00a3ff] hover:scale-110 hover:border-b-2 hover:border-blue-500 transition-transform duration-300 ">Market Explore</div>
              <div className="pt-2 hover:text-[#00a3ff] ">Ready Token</div>
              <div className="pt-2 hover:text-[#00a3ff]">Otimize Time</div>
              <div className="pt-2 hover:text-[#00a3ff]">Main Option</div>
              <div className="pt-2 hover:text-[#00a3ff]">Blog Grid</div>
              <div className="pt-2 hover:text-[#00a3ff]">About Us</div>
              <div className="pt-2 hover:text-[#00a3ff]">Fix Bug</div>
            </ul>
          </div>
        </div>
        <div>
          <div className="font-bold text-[24px]">Recent Sold Out</div>
          <div className="pt-4">
            {topbidder.map((bidder, index) => (
              <div className="flex m-3 gap-2 " key={index}>
                <img
                  className="w-15 h-15 rounded-full"
                  src={bidder.profilepic}
                  alt={bidder.name}
                />
                <div>
                  <div> {bidder.name}</div>
                  <div>Highest Bid{bidder.Bid}</div>
                  <div> {bidder.amout}wETH</div>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between ">
        <div>©2022 Nuron, Inc. All rights reserved Terms Privacy Policy</div>
        <div className="flex gap-5 ">
            <div className="hover:bg-[#00a3ff] p-2  rounded-full"><img alt='facebook'src={facebook}/></div>
            <div className="hover:bg-[#00a3ff] p-2  rounded-full"><img alt='twitter'src={twitter}/></div>
            <div className="hover:bg-[#00a3ff] p-2  rounded-full"><img alt='instagram'src={instagram}/></div>
            <div className="hover:bg-[#00a3ff] p-2  rounded-full"><img alt='linkedin'src={linkedin}/></div>
            <div className="hover:bg-[#00a3ff] p-2  rounded-full"><img alt='mail'src={mail}/></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
