import React, { useState } from 'react';
import client1 from '../Images/client-12.webp';
import client2 from '../Images/client-2.webp';
import client3 from '../Images/client-3.webp';
import client4 from '../Images/client-5.webp';
import client5 from '../Images/client-4.webp';
import client6 from '../Images/client-6.webp';
import client7 from '../Images/client-7.webp';
import client8 from '../Images/client-8.webp';
import client9 from '../Images/client-9.webp';
import client10 from '../Images/client-12.webp';

const TopSeller = () => {
  const topSellers = [
    {
      id: 1,
      name: 'Mark Jorden',
      sales: 2500000,
      image: client1,
    },
    {
      id: 2,
      name: 'Sobuj Mk',
      sales: 2500000,
      image: client2,
    },
    {
      id: 3,
      name: 'Methods',
      sales: 2500000,
      image: client3,
    },
    {
      id: 4,
      name: 'Jone sone',
      sales: 2500000,
      image: client4,
    },
    {
      id: 5,
      name: 'Yash',
      sales: 2500000,
      image: client5,
    },
    {
      id: 6,
      name: 'Trodband',
      sales: 2500000,
      image: client6,
    },
    {
      id: 7,
      name: 'Siddhart',
      sales: 2500000,
      image: client7,
    },
    {
      id: 8,
      name: 'YASHKIB',
      sales: 2500000,
      image: client8,
    },
    {
      id: 9,
      name: 'Brodband',
      sales: 2500000,
      image: client9,
    },
    {
      id: 10,
      name: 'Ms. Parkline',
      sales: 2500000,
      image: client10,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className='px-4 text-[24px] font-bold'>Top Seller in 1 day</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
      {topSellers.map((seller, index) => (
        <div
          className={`flex items-center p-5 bg-white shadow-md rounded-md ${
            hoveredIndex === index ? 'translate-x-2' : ''
          }`}
          key={seller.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={seller.image}
            alt={`Client ${seller.id}`}
            className="w-20 h-20 rounded-full mr-4"
          />
          <div className="px-4">
            <div>{seller.name}</div>
            <div>{seller.sales}</div>
          </div>
          <div>{seller.id}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TopSeller;
