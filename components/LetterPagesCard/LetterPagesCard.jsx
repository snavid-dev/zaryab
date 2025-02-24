import Image from 'next/image';
import React from 'react';

export default function LetterPagesCard(letter, setModal, index) {
  return (
    <div
      className="col-span-6 md:col-span-3 xl:col-span-3 flex flex-col items-center mt-7 cursor-pointer"
      onClick={() => setModal(true)}
      key={index}
    >
      <div className="w-full flex justify-center items-center p-3 border-4 border-black">
        <div className="w-full h-[350px] md:h-[300px] lg:h-[270px] xl:h-[250px] m-3 relative">
          <Image
            src={`/assets/img/${letter}`}
            alt="letter page"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
      </div>
      <div className="text-30px border-4 border-black px-6 py-2 mt-3">
        {index + 1}
      </div>
    </div>
  );
}
