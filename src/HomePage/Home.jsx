import React from 'react'

import Slider from './Slider';
import LiveBidding from "./LiveBidding";

import NewestItem from "./NewestItem";
import TopSeller from "./TopSeller";
import TopCollection from "./TopCollection";


const Home = () => {
  return (
    <div>
        {/* <NavBar/> */}
        <Slider />
      <LiveBidding/>
      <NewestItem />
      <TopSeller />
      <TopCollection />
      {/* <Footer /> */}
    </div>
  )
}

export default Home