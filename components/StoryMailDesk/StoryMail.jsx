'use client';
import React, { useEffect, useRef, useState } from 'react';
import StoryHarizontalCard from '../StoryHarizontalCard/StoryHarizontalCard';
import Mail from '../Mail/Mail';
import ArrowLink from '../ArrowLink/ArrowLink';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StoryMail() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

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

  const fetchData = async () => {
    try {
      const response = await axios.get('/v1/stories?per_page=5');
      setData(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  // animation
  const mailRef = useRef(null);
  const linkRef = useRef(null);

  useGSAP(() => {
    if (isVisible && data) {
      gsap.to(mailRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mailRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(linkRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: linkRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [isVisible, data]);

  return (
    <div
      className="w-full flex justify-center"
      ref={ref}
    >
      {isVisible && (
        <div className="mt-50px main-container rtl">
          <div className="col-span-6 xl:col-span-9">
            {Array.isArray(data) &&
              data?.map((data, index) => (
                <StoryHarizontalCard
                  key={index}
                  data={data}
                  isVisible={isVisible}
                />
              ))}
          </div>
          <div
            className="hidden xl:block xl:col-span-3 translate-y-200px opacity-0"
            ref={mailRef}
          >
            <Mail />
          </div>
          <div className="col-span-6 xl:col-span-12">
            <div
              className="flex justify-start translate-y-200px opacity-0"
              ref={linkRef}
            >
              <ArrowLink
                title="همه آثار"
                path="/writing"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
