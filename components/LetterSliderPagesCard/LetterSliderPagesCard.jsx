import Image from 'next/image';
import React from 'react';

export default function LetterSliderPagesCard({ image, index, currentIndex }) {
  return (
    <div
      key={index}
      className={`absolute inset-0 transition-transform duration-700 ease-in-out flex justify-center items-center
                                        ${
                                          index === currentIndex
                                            ? 'translate-x-0'
                                            : index < currentIndex
                                            ? '-translate-x-full'
                                            : 'translate-x-full'
                                        }`}
    >
      <div className="w-full md:w-[80%] h-full relative">
        <Image
          src={`/assets/img/${image}`}
          alt={`Slide ${index}`}
          fill
          className="absolute object-contain"
        />
      </div>
      <div className="absolute bottom-0 bg-[#00000091] text-white p-2 text-5xl">
        {index + 1}
      </div>
    </div>
  );
}
