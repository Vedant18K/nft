import React, { useState, useEffect } from "react";
import backgroundimage1 from "../Images/bg-image-22.webp";
import backgroundimage2 from "../Images/bg-image-6.webp";
import Blog from "../Blog/Blog";

const AboutUs = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    useEffect(() => {
      const timer1 = setInterval(() => {
        if (count1 < 100) {
          setCount1(count1 + 1);
        }
      }, 10);

      return () => clearInterval(timer1);
    }, [count1]);

    useEffect(() => {
      const timer2 = setInterval(() => {
        if (count2 < 500) {
          setCount2(count2 + 1);
        }
      }, 10);

      return () => clearInterval(timer2);
    }, [count2]);

    useEffect(() => {
      const timer3 = setInterval(() => {
        if (count3 < 700) {
          setCount3(count3 + 1);
        }
      }, 10);

      return () => clearInterval(timer3);
    }, [count3]);

    useEffect(() => {
      const timer4 = setInterval(() => {
        if (count4 < 900) {
          setCount4(count4 + 1);
        }
      }, 10);

      return () => clearInterval(timer4);
    }, [count4]);

  return (
    <div>
      {/* <NavBar /> */}
      <div className="pt-[100px] text-[40px] px-10">
        Direct Teams.
        <br /> For Your Dedicated Dreams
      </div>
      <div>
        <img src={backgroundimage1} alt="Background" />
      </div>
      <div className="flex justify-between m-5 gap-3">
        <div
          className="border h-[250px] p-[50px] z-2 relative bg-white"
          style={{ marginTop: "-200px", position: "sticky", top: "60px" }}
        >
          <div className="text-[24px] font-bold">Why We Do This</div>
          <div className="pt-5">
            NFTs are virtual tokens that represent ownership of something
            inherently distinct and scarce, whether it be a physical or digital
            item, such as artwork, a soundtrack, a collectible, an in-game item
            or real estate. Unlike regular cryptocurrencies like bitcoin or fiat
            money like the U.S.
          </div>
        </div>
        <div className="border p-[50px]">
          <div className="text-[24px] font-bold">
            Helping You
            <br /> Grow In Every Stage.
          </div>
          <div className="pt-5">
            NFTs are virtual tokens that represent ownership of something
            inherently distinct and scarce, whether it be a physical or digital
            item, such as artwork, a soundtrack, a collectible, an in-game item
            or real estate. Unlike regular cryptocurrencies like bitcoin or fiat
            money like the U.S.
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[180px]">
        <div className="text-[24px] font-bold py-10">
          Create, Sell well & Collect your Wonderful <br />
          NFTs at Nuron Very Fast
        </div>
        <div className="border px-10 py-10">
          The NFTs is a one-trick pony that climbed the ladders of success in
          recent
          <br /> years. The growth NFTs is tremendous, and according to
          Pymnts.com, the total
          <br /> sales volume of NFTs has nearly crossed $2.5 billion in the
          last six months of <br />
          2021. Surprisingly, the total sales volume of NFTs was $13.7 million
          in 2020. On
          <br /> comparing both the values,
        </div>
      </div>
      <div>
        <div className="text-[24px] font-bold pt-6 text-center">
          Nuron Statistics
        </div>
        <div className="counters-container flex flex-row justify-evenly text-center">
          <div
            className="counter shadow-md"
            style={{
              border: "1px solid #ccc",
              padding: "50px",
              margin: "50px",
            }}
          >
            <div>
              <span className="text-[#00a3ff] text-[30px] font-bold">
                {count1}
              </span>
            </div>
            <div className="counter-label font-bold">Nuron All NFT's</div>
          </div>
          <div
            className="counter shadow-md"
            style={{
              border: "1px solid #ccc",
              padding: "50px",
              margin: "50px",
            }}
          >
            <div>
              <span className="text-[#00a3ff] text-[30px] font-bold">
                {count2}
              </span>
            </div>
            <div className="counter-label font-bold">All Creators</div>
          </div>
          <div
            className="counter shadow-md"
            style={{
              border: "1px solid #ccc",
              padding: "50px",
              margin: "50px",
            }}
          >
            <div>
              <span className="text-[#00a3ff] text-[30px] font-bold">
                {count3}
              </span>
            </div>
            <div className="counter-label font-bold">Nuron Earning</div>
          </div>
          <div
            className="counter shadow-md"
            style={{
              border: "1px solid #ccc",
              padding: "50px",
              margin: "50px",
            }}
          >
            <div>
              <span className="text-[#00a3ff] text-[30px] font-bold">
                {count4}
              </span>
            </div>
            <div className="counter-label font-bold">Level One Seller</div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <img className="h-[400px] w-full" src={backgroundimage2} alt="Background" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[40px] font-bold text-center">
            Discover Discover Discover rare digital art and collect NFTs
          </div>
          <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[24px] text-center">
            The NFTs is a one-trick pony that climbed the recent years. The
            growth of NFTs is tremendous, and according to Pymnts.com, the total
            sales volume
          </div>
        </div>
      </div>
      <Blog/>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;
