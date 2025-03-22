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

export default function StoriesPoemSection() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const checkScreenWidth = () => {
      const width = window.innerWidth;

      return width > 766 && width < 1920;
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/poems?per_page=${checkScreenWidth() ? 4 : 3}`
        );
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          fetchData();
          setIsVisible(true);
          setHasFetched(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasFetched]);

  // animation

  const poemTitleRef = useRef(null);

  useGSAP(() => {
    if (data && isVisible) {
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
  }, [isVisible, data]);

  return (
    <div
      className="w-full"
      ref={ref}
    >
      {isVisible && (
        <div className="w-full flex flex-col items-center">
          <div
            className="main-container mt-50px rtl translate-y-200px opacity-0"
            ref={poemTitleRef}
          >
            <div className="col-span-6 md:col-span-3 xl:col-span-6">
              <Heading1 title="اشعار" />
            </div>
            <div className="col-span-6 md:col-span-3 xl-col-span-6 flex justify-start md:justify-end">
              <ArrowLink title="همه اشعار" />
            </div>
          </div>
          <div className="main-container mt-7">
            {data?.map((data, index) => (
              <StoryPoemCard
                data={data}
                key={index}
                isStory={false}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
