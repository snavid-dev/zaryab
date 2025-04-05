'use client';
import React, { useRef } from 'react';
import StoryPoemCard from '../StoryPoemCard/StoryPoemCard';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StoriesPoemSection({ data }) {
  const checkScreenWidth = () => {
    const width = window.innerWidth;

    return width > 766 && width < 1280;
  };
  // animation

  const poemTitleRef = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(poemTitleRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: poemTitleRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  console.log(checkScreenWidth(), 'width');

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center">
        <div
          className="main-container mt-50px rtl translate-y-200px opacity-0"
          ref={poemTitleRef}
        >
          <div className="col-span-6 md:col-span-3 xl:col-span-6">
            <Heading1 title="اشعار" />
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-6 flex justify-start md:justify-end">
            <ArrowLink
              title="همه اشعار"
              path="/writing"
            />
          </div>
        </div>
        <div className="main-container mt-7">
          {Array.isArray(data) &&
            data?.map((data, index) => {
              if (!checkScreenWidth()) {
                if (index < 3) {
                  return (
                    <StoryPoemCard
                      data={data}
                      key={index}
                      isStory={false}
                    />
                  );
                }
              } else {
                return (
                  <StoryPoemCard
                    data={data}
                    key={index}
                    isStory={false}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}
