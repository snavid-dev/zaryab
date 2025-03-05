'use client';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import OurAuthorCard from '../OurAuthorCard/OurAuthorCard';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Authors() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/v1/authors?per_page=8');
  //       setData(response.data.data);
  //     } catch (err) {
  //       setError(err.response?.data?.message || err.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
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

  const fetchData = async () => {
    try {
      const response = await axios.get('/v1/authors?per_page=8');
      setData(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  // animation
  const titleRef = useRef(null);

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

  return (
    <div
      className="w-full mt-50px"
      ref={ref}
    >
      {isVisible && (
        <div className="main-container ">
          {/* it have two rows */}
          <div
            className="col-span-6 xl:col-span-12 flex flex-col items-end md:flex-row-reverse md:justify-between translate-y-200px opacity-0"
            ref={titleRef}
          >
            <Heading1 title="نویسنده ها و شاعران آوای زریاب" />
            <ArrowLink
              title="همه نویسنده و شاعران"
              path="/authors"
            />
          </div>
          <div className="main-container mt-7">
            {data?.map((data, index) => (
              <OurAuthorCard
                key={index}
                data={data}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
