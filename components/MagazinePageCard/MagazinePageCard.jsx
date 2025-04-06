'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function MagazinePageCard({ letter }) {
  const cardRef = useRef(null);

  useGSAP(() => {
    if (letter) {
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [letter]);

  return (
    <div
      className="w-full flex flex-col items-center mt-7 cursor-pointer translate-y-200px opacity-0"
      ref={cardRef}
    >
      <div className="w-full flex justify-center items-center p-3 border-4 border-black">
        <div className="w-full h-380px md:h-390px xl:h-290px 2xl:h-390px m-3 relative">
          {letter?.image ? (
            <Image
              src={letter?.image}
              alt="letter page"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {letter?.number && (
        <div className="text-30px border-4 border-black px-6 py-2 mt-3">
          {letter?.number}
        </div>
      )}
    </div>
  );
}
