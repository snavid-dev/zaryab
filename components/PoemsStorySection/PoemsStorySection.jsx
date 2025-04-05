'use client';
import React, { useEffect, useRef, useState } from 'react';
import axios from '@/utils/api';
import StoryPoemCard from '../StoryPoemCard/StoryPoemCard';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PoemsStorySection({ data }) {
  const checkScreenWidth = () => {
    const width = window.innerWidth;

    return width > 766 && width < 1280;
  };
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
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center">
        <div
          className="main-container mt-14 rtl translate-y-200px opacity-0"
          ref={titleRef}
        >
          <div className="col-span-6 md:col-span-3 xl:col-span-6">
            <Heading1 title="داستان ها" />
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-6 flex items-center justify-start md:justify-end">
            <ArrowLink
              title="همه داستان ها"
              path="/writing"
            />
          </div>
        </div>
        <div className="main-container mt-7 rtl">
          {Array.isArray(data) &&
            data?.map((data, index) => {
              if (!checkScreenWidth()) {
                if (index < 3) {
                  return (
                    <StoryPoemCard
                      data={data}
                      key={index}
                      isStory={true}
                    />
                  );
                }
              } else {
                return (
                  <StoryPoemCard
                    data={data}
                    key={index}
                    isStory={true}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
