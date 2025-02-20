'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading2 from '../Heading2/Heading2';

export default function MailMobile() {
  //   const ref = useRef(null);
  //   const isInView = useInView(ref, { once: true });
  return (
    <div className="w-full flex flex-col items-end">
      {/* it has three rows */}
      <div className="w-full flex flex-col items-end">
        <Heading2 title="نامه جدید" />
        <p className="text-3xl mt-7">1403/06/07</p>
        <div className="relative w-full h-490px md:h-500px mt-7">
          <Image
            src="/assets/img/mail.png"
            alt=""
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        </div>
        <Link
          href="#"
          className="w-full h-10 flex justify-center items-center mt-7 border border-black font-common-lg text-28px
          bg-white text-black transition-all duration-300"
        >
          خواندن نامه
        </Link>
      </div>
    </div>
  );
}
