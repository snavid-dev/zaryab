'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import ArrowLink from '../ArrowLink/ArrowLink';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { truncateString } from '@/utils/GeneralFuncions/GeneralFunctions';

gsap.registerPlugin(ScrollTrigger);

export default function AuthorWeekCard({ data, isVisible }) {
  const cardRef = useRef(null);
  useGSAP(() => {
    if (isVisible && data) {
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 50%',
          end: 'top 10%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [isVisible, data]);
  return (
    <div
      className="border-4 border-black p-25px xl:p-50px w-full col-span-6 md:col-span-3 xl:col-span-6 mt-7 flex flex-col items-end translate-y-200px opacity-0"
      ref={cardRef}
    >
      {/* it has four rows */}
      <div className="w-full h-230px xl:h-360px 2xl:h-500px relative overflow-hidden">
        {data?.featured_image ? (
          <Image
            src={data?.featured_image}
            alt={data?.title ? data?.title : 'not found'}
            fill
            className="absolute object-cover hover:scale-110 transition-all duration-300"
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="w-full">
        {data?.title && (
          <h3 className="font-common-lg mt-5 text-28px md:text-20px lg:text-59px rtl">
            {data?.title}
          </h3>
        )}
      </div>
      <div>
        {data?.excerpt && (
          <p className="rtl mt-4 font-common text-10px md:text-12px lg:text-17px">
            {truncateString(data?.excerpt, 300)}
          </p>
        )}
      </div>
      <div className="w-full flex justify-center items-center mt-7">
        {data?.slug && (
          <ArrowLink
            title="بیشتر بخوانید"
            path={`/author/${data?.slug}`}
          />
        )}
      </div>
    </div>
  );
}
