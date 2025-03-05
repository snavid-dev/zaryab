'use client';
import React, { useEffect, useRef, useState } from 'react';

import AuthorWeekCard from '../AuthorWeekCard/AuthorWeekCard';
import Heading1 from '../Heading1/Heading1';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function AuthorWeek() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          fetchData();
          setHasFetched(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasFetched]);

  // animation

  useGSAP(() => {
    if (isVisible && data) {
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
  }, [isVisible, data]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/v1/authors-archive?per_page=2');
      setData(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <section
      className="w-full flex justify-center"
      ref={ref}
    >
      {/* it has two rows */}
      {isVisible && (
        <div className="main-contianer mt-50px">
          <div
            className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
            ref={titleRef}
          >
            <Heading1 title="نویسنده و شاعر هفته" />
          </div>
          <div className="col-span-6 xl:col-span-12 main-container">
            {data?.map((data, index) => (
              <AuthorWeekCard
                key={index}
                data={data}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
