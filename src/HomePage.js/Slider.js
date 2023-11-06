import React from 'react'
import slider1 from '../Images/slider-1.webp'

const Slider = () => {
    return (
        <div className='flex justify-between px-[100px] pt-10'>
            <div>
                <div className='text-6xl pt-14	'>Discover Digital Art,<p /> Collect and Sell Your <p />Specific NFTs.</div>
                <div className='text-xl pt-14'>Partner with one of the world's largest retailers to <p />showcase your brand and products.</div>
                <div className='flex gap-4 text-white pt-14'>
                    <div className='bg-[#00a3ff] rounded-lg px-4 py-4 cursor-pointer'>Get Started</div>
                    <div className='bg-[#212e48] rounded-lg px-4 py-4 cursor-pointer'>Create</div>
                </div>
            </div>
            <div>
                <img src={slider1} className='h-[589px] w-[589px]'/>
            </div>
        </div>
    )
}

export default Slider