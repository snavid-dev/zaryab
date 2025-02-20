'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import ArrowLink from '../ArrowLink/ArrowLink';

export default function AuthorWeekCard() {
  const ref = useRef(null);

  return (
    <div className="border-4 border-black p-25px xl:p-50px w-full col-span-6 md:col-span-3 xl:col-span-6 mt-7 flex flex-col items-end">
      {/* it has four rows */}
      <div className="w-full h-230px xl:h-360px 2xl:h-500px relative overflow-hidden">
        <Image
          src="/assets/img/rahnavard.png"
          alt=""
          fill
          className="absolute object-cover hover:scale-110 transition-all duration-300"
        />
      </div>
      <div>
        <h3 className="font-common-lg mt-5 text-28px md:text-30px lg:text-59px">
          رهنورد زریاب
        </h3>
      </div>
      <div>
        <p className="rtl mt-4 font-common text-10px md:text-12px lg:text-17px">
          sghdfsdllllllkjslfjsdlkfjsdlfjsdklfjsdklfjsdkfjdfkdjsfksdjflkdsj
        </p>
      </div>
      <div className="w-full flex justify-center items-center mt-7">
        <ArrowLink title="بیشتر بخوانید" />
      </div>
    </div>
  );
}
