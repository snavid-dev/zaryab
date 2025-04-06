'use client';
import { useRef } from 'react';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import PodcastCard from '../PodcastCard/PodcastCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Podcasts({ data }) {
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
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);
  return (
    <section className="flex justify-center">
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
          {Array.isArray(data) &&
            data?.map((data, index) => {
              if (checkScreenWidth) {
                if (index < 3) {
                  return (
                    <PodcastCard
                      data={data}
                      key={index}
                    />
                  );
                }
              } else {
                return (
                  <PodcastCard
                    data={data}
                    key={index}
                  />
                );
              }
            })}
        </div>
      </div>
    </section>
  );
}
