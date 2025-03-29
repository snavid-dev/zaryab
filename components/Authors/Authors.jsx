'use client';
import React, { useRef } from 'react';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import OurAuthorCard from '../OurAuthorCard/OurAuthorCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Authors({ data }) {
  // animation
  const titleRef = useRef(null);

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
    <div className="w-full mt-50px">
      <div className="main-container ">
        {/* it have two rows */}
        <div
          className="col-span-6 xl:col-span-12 flex flex-col items-end md:flex-row-reverse md:justify-between md:items-center translate-y-200px opacity-0"
          ref={titleRef}
        >
          <Heading1 title="نویسندگان و شاعران آوای زریاب" />
          <ArrowLink
            title="همه نویسندگان و شاعران"
            path="/authors"
          />
        </div>
        <div className="main-container mt-7 rtl">
          {Array.isArray(data) &&
            data?.map((data, index) => (
              <OurAuthorCard
                key={index}
                data={data}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
