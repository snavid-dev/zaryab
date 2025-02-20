import React from 'react';

export default function SmallAd() {
  return (
    <div className="main-container w-full my-35px">
      <div className="col-span-6 md:col-span-3 xl:col-span-3 bg-addColor h-300px xl:h-250px md:h-300px lg:h-350px border-2"></div>
      <div className="hidden md:block md:col-span-3 xl:col-span-3 bg-addColor h-300px xl:h-250px md:h-300px lg:h-350px border-2"></div>
      <div className="col-span-3 hidden xl:block xl:col-span-3 bg-addColor h-300px xl:h-250px md:h-300px lg:h-350px border-2"></div>
      <div className="col-span-3 hidden xl:block xl:col-span-3 bg-addColor h-300px xl:h-250px md:h-300px lg:h-350px border-2"></div>
    </div>
  );
}
