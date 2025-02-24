'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import Link from 'next/link';

export default function SearchCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };
  return (
    //     main container of the card
    <div className="col-span-6 md:col-span-3 xl:col-span-2 p-5 xl:p-2 md:p-10 lg:p-7 border-4 border-black flex flex-col items-end mt-5">
      {/*  it has 6 rows  */}
      <div
        className="w-full h-260px md:h-240px lg:h-260px xl:h-140px 2xl:h-180px border-4 border-black relative hover:border-footerBtn transition-all duration-700"
        onMouseEnter={handleMouseEnter}
      >
        <Image
          src="/assets/img/story-card.png"
          alt=""
          layout="fill"
          objectFit="cover"
          className={`absolute transition-all duration-700
                ${isHovered ? 'opacity-50' : 'opacity-100'}`}
        />
      </div>
      <div className="font-new-extra-bold text-20px 2xl:text-27px mt-3">
        صندوقچه بی بی
      </div>
      <div className="w-full flex justify-end mt-3">
        <div className="font-common-heavy text-11px">قسمت اول</div>
      </div>
      <div className="w-full mt-3">
        <Link
          href="#"
          className="w-full py-2 font-common-heavy text-13px border-2 border-black flex justify-center items-center
                bg-black text-white hover:bg-white hover:text-black transition-all duration-700"
        >
          خواندن داستان
        </Link>
      </div>
    </div>
  );
}
