import React, { useState } from "react";
import icon1 from "../Images/1.png";
import icon2 from "../Images/2.png";
import icon3 from "../Images/3.png";
import icon4 from "../Images/4.png";

const steps = [
  {
    step: 1,
    icon: icon1,
    title: "Set Up Your Wallet",
    description: "Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.",
    arrow : "=>"
  },
  {
    step: 2,
    icon: icon2,
    title: "Create Your Location",
    description: "Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.",
    arrow : "=>"
  },
  {
    step: 3,
    icon: icon3,
    title: "Add Your NFT's",
    description: "Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.",
    arrow : "=>"
  },
  {
    step: 4,
    icon: icon4,
    title: "Sell Your NFT's",
    description: "Powerful features and inclusions, which makes Nuron standout, easily customizable and scalable.",
    arrow : "=>"
  },
];

const Step = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="container px-14 font-bold text-[24px]">Create and sell your NFTs</div>
    <div className="flex justify-center px-20 gap-10 pt-[80px]">
      
      {steps.map((step, index) => (
        <div
          key={index}
          className="border shadow-xl w-[300px] h-[300px] rounded-md px-10 py-10"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className={` ${hoveredIndex === index ? '-translate-y-2' : ''}`}>
            <div className="flex items-center justify-between">
              <div>Step -{step.step}</div>
              <div>
                <img src={step.icon} alt={`icon${step.step}`} className="h-[80px] w-[100px]" />
              </div>
            </div>
            <div className={` ${hoveredIndex === index ? 'text-[#00a3ff]' : ''}`}>{step.title}</div>
            <div>{step.description}</div>
            <div className={` ${hoveredIndex === index ? 'text-[#00a3ff]' : ''}`}>{step.arrow}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Step;
