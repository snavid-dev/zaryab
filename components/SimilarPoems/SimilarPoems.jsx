import { useState, useEffect, useRef } from 'react';
import Heading1 from '../Heading1/Heading1';

import axios from '@/utils/api';

import SimilarHorizontalStoryCard from '../SimilarHorizontalStoryCard/SimilarHorizontalStoryCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SimilarPoems({ slug }) {
  // fetch data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/poems/similar/${slug}?per_page=5`
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

  const titleRef = useRef(null);

  useGSAP(() => {
    if (isVisible && data) {
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
  }, [isVisible, data]);

  return (
    // the main container of the section
    <div
      className="w-full"
      ref={ref}
    >
      {isVisible && (
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
            {data?.map((data, index) => (
              <SimilarHorizontalStoryCard
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
