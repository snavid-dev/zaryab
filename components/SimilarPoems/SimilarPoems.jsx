import { useState, useEffect, useRef } from 'react';
import Heading1 from '../Heading1/Heading1';

import axios from '@/utils/api';

import SimilarHorizontalStoryCard from '../SimilarHorizontalStoryCard/SimilarHorizontalStoryCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SimilarPoems({ data }) {
  // animation

  const titleRef = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    // the main container of the section
    <div className="w-full">
      <div className="mt-14 flex flex-col items-center">
        <div className="main-container">
          <div
            className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
            ref={titleRef}
          >
            <Heading1 title="اشعار مشابه" />
          </div>
        </div>
        <div className="main-container rtl">
          {Array.isArray(data) &&
            data?.map((data, index) => (
              <SimilarHorizontalStoryCard
                key={index}
                data={data}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
