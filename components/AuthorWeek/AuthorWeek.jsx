'use client';
import React, { useEffect, useRef, useState } from 'react';

import AuthorWeekCard from '../AuthorWeekCard/AuthorWeekCard';
import Heading1 from '../Heading1/Heading1';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function AuthorWeek({ data }) {
  const titleRef = useRef(null);

  // // animation

  useGSAP(() => {
    if (data) {
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    <section className="w-full flex justify-center">
      {/* it has two rows */}

      <div className="main-contianer mt-50px">
        <div
          className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
          ref={titleRef}
        >
          <Heading1 title="نویسنده و شاعر هفته" />
        </div>
        <div className="col-span-6 xl:col-span-12 main-container rtl">
          {Array.isArray(data) &&
            data?.map((data, index) => (
              <AuthorWeekCard
                key={index}
                data={data}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
