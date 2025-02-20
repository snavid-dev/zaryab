'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading2 from '../Heading2/Heading2';
import OldMails from '../OldMails/OldMails';
import NewArticle from '../NewArticle/NewArticle';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

export default function Mail() {
  const letterRef = useRef(null);

  //   useGSAP(() => {
  //     gsap.to(letterRef.current, {
  //       y: 0,
  //       opacity: 1,
  //       ease: 'power2.out',
  //       scrollTrigger: {
  //         trigger: letterRef.current,
  //         start: '-80%',
  //         end: '-40%',
  //         toggleActions: 'play none none none',
  //       },
  //     });
  //   }, []);

  return (
    <div
      ref={letterRef}
      id="letter"
      className="w-full rtl"
    >
      {/* it has three rows */}
      <div className="w-full flex flex-col items-start">
        <Heading2 title="نامه جدید" />
        <p className="mt-5 md:mt-0">1403/06/07</p>
        <div className="relative w-full xl:h-400px 2xl:h-500px mt-5 md:mt-0">
          <Image
            src="/assets/img/mail.png"
            alt=""
            fill
            className="absolute object-cover"
          />
        </div>
        <Link
          href="#"
          className="w-full h-10 flex justify-center items-center border border-black font-common-lg text-27px text-black bg-white lg:text-white lg:bg-black
          lg:hover:bg-white lg:hover:text-black transition-all duration-300"
        >
          خواندن نامه
        </Link>
      </div>
      <div className="w-full hidden md:flex flex-col items-start mt-7">
        <Heading2 title="نامه های قدیم" />
        <OldMails />
        <OldMails />
        <OldMails />
        <OldMails />
      </div>
      <div className="w-full hidden md:flex flex-col items-start mt-7">
        <Heading2 title="مقاله های جدید" />
        <NewArticle />
        <NewArticle />
        <NewArticle />
        <NewArticle />
      </div>
    </div>
  );
}
