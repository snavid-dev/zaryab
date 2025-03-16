'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function ChampionPopUp() {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(true);
    }, 7000);
    return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        className={`flex flex-col items-center fixed z-50 w-full md:w-600px xl:w-600px border-4 border-black p-1 bg-white ${
          showPopUp ? 'top-5' : '-top-100%'
        } transition-all duration-1000`}
      >
        <div className="w-full rtl">
          <IoClose
            className="text-30px text-footerBtn cursor-pointer"
            onClick={() => setShowPopUp(false)}
          />
        </div>
        <div className="w-full px-5 flex flex-col items-center">
          <div className="w-full relative h-280px md:h-400px mt-1">
            <Image
              src="/assets/img/amanullah-khan.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          </div>
          <div className="w-full font-new-black text-30px rtl mt-1">
            <div>
              به جای تفنگ، قلم به دست بگیرید، که یک ملت بی سواد هیچ‌گاه آزاد
              بوده نمی‌تواند.
            </div>
            <div className="mt-2 font-new-light font-bold">
              شاه غازی امان الله خان
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
