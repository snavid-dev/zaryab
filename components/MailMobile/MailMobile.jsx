'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading2 from '../Heading2/Heading2';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MailMobile({ newLetter }) {
  // animation

  const cardRef = useRef(null);

  useGSAP(() => {
    if (newLetter) {
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
  }, [newLetter]);

  return (
    <div className="w-full">
      <div
        className="w-full flex flex-col items-end translate-y-200px opacity-0"
        ref={cardRef}
      >
        {/* it has three rows */}
        <div className="w-full flex flex-col items-end">
          <Heading2 title="مجله جدید" />
          {newLetter?.release_date && (
            <p className="text-3xl mt-7">{newLetter?.release_date}</p>
          )}
          <div className="relative w-full h-490px md:h-500px mt-7">
            {newLetter.featured_image ? (
              <Image
                src={newLetter.featured_image}
                alt="new magazine"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            ) : (
              <div className="h-full w-full flex justify-center items-center"></div>
            )}
          </div>
          {newLetter?.slug && (
            <Link
              href={`/letters/${newLetter?.slug}`}
              className="w-full h-10 flex justify-center items-center mt-7 border border-black font-common-lg text-28px
          bg-white text-black transition-all duration-300"
            >
              خواندن نامه
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
