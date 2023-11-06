import React, { useState } from "react";

const HoverEffectComponent = (props) => {
  console.log("array", props.array);
  // const array = [livebiddingimg1, livebiddingimg2, livebiddingimg3, livebiddingimg4, livebiddingimg5];
  const [isHovered, setHovered] = useState("");

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered("");
  };
  console.log("props.array", props.array);
  return (
    <div className="pt-10">
      <div className="flex flex-wrap gap-10 px-5 justify-center">
        {props.array &&
          props.array.map((item, index) => {
            return (
              <div className="relative h-[500px] w-[300px] ">
                <div
                  className=" absolute z-10 h-[400px] w-[300px] rounded-xl border-2  bg-white"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    className={` ${
                      isHovered === index
                        ? " mx-auto flex transition-all duration-[0.5s] rounded-md shadow-sm shadow-black h-[280px] my-auto w-[280px]"
                        : ""
                    } w-[300px] h-[300px]    rounded-md`}
                    src={item.image}
                    alt="Live Bidding "
                  />
                  <div className="p-4">
                    <div>{item.name}</div>
                    <div>Highest Bid{item.bid}</div>
                    <div className="flex justify-between">
                      <div className="text-[#0040ff]">{item.amount}wETH</div>
                      <div>{item.rating}</div>
                    </div>
                  </div>
                </div>
                <div
                  className={`  ${
                    isHovered === index
                      ? "hovered -translate-x-[4px] rotate-6  absolute top-4  bg-gradient-to-tr from-[#CCEAFC]  via-[#93D7FD] to-[#0040ff] rounded-md duration-[1s]  h-[390px] w-[240px]"
                      : ""
                  }`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HoverEffectComponent;
