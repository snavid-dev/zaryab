'use client';
import { useState } from 'react';

export default function FilterItem({ title, isLow }) {
  const [itemSelected, setItemSelected] = useState(false);
  return (
    // the filter item main container
    <div
      className={`flex flex-row-reverse h-1/5  ltr ${
        isLow ? 'w-1/3' : 'w-1/6'
      }`}
    >
      <div
        className={`w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-7 xl:h-7 border-2 group flex justify-center cursor-pointer items-center transition-all duration-700
            ${itemSelected ? 'border-footerBtn' : 'border-black'} ${
          title.length === 0 ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setItemSelected(!itemSelected)}
      >
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2L7.71429 13L2 6.88889"
            stroke={itemSelected ? '#FCA30A' : '#2F3030'}
            strokeWidth="3"
            strokeLinecap="round"
            className={`group-hover:opacity-100 transition-all duration-1000 ${
              itemSelected ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </svg>
      </div>
      <div
        className={`font-common-regular text-12px md:text-15px lg:text-20px xl:text-25px mr-1 xl:mr-3 ${
          title.length === 0 ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {title}
      </div>
    </div>
  );
}
