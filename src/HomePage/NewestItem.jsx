import React from "react";

// import livebiddingimg10 from "../Images/new1.webp";
import LiveBidding from "./LiveBidding";
import Step from "./Step";
import { array, array1 } from "../Data/Data";

const NewestItem = () => {

  // Prop drilling > parent component > news item > child > jyachyat pathawayche ahe to child
  return (
    <div>
      <LiveBidding array={array} />
      <Step />
      <div className="container text-[24px] font-bold pt-[100px] px-10">Newest Items</div>
      <LiveBidding array={array1} />
      
      
    </div>
  );
};

export default NewestItem;
