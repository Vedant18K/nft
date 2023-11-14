import React from 'react'
import LiveBidding from "../HomePage/LiveBidding";
import { array , array1 } from '../Data/Data';

const Expores = () => {
   

  return (
    <div>
        <div className='pt-[100px] text-[24px] font-bold'>Explore Style Isotop</div>
        <hr/>
        <div className='text-[24px] font-bold'>Explore Product</div>
        <LiveBidding array={array}/>
        <LiveBidding array={array1}/>
        
    </div>
  )
}

export default Expores