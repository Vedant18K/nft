import React from 'react'
import LiveBidding from "../HomePage/LiveBidding";
import { array , array1 } from '../Data/Data';

const Expores = () => {
   

  return (
    <div>
        <div className='pt-[100px]'>Explore Style Isotop</div>
        <div>Explore Product</div>
        <LiveBidding array={array}/>
        <LiveBidding array={array1}/>
        
    </div>
  )
}

export default Expores