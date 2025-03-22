'use client';
import { useEffect, useRef, useState } from 'react';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import PodcastCard from '../PodcastCard/PodcastCard';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Podcasts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  // check for tablets
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // check screen width

    const checkScreenWidth = () => {
      const width = window.innerWidth;

      return width > 766 && width < 1920;
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/podcasts?per_page=${checkScreenWidth() ? 4 : 3}`
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
    <section
      className="flex justify-center"
      ref={ref}
    >
      {isVisible && (
        <div className="main-container mt-50px">
          {/*  it has two rows  */}
          <div
            className="col-span-6 xl:col-span-12 flex flex-row-reverse justify-between translate-y-200px opacity-0"
            ref={titleRef}
          >
            <Heading1 title="کتاب های صوتی" />
            <ArrowLink
              title="همه کتاب های صوتی"
              path="/podcasts"
            />
          </div>
          <div className="main-container">
            {data?.map((data, index) => (
              <PodcastCard
                data={data}
                key={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
