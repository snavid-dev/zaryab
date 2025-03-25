'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading2 from '../Heading2/Heading2';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MailMobile() {
  const [newLetter, setNewLetter] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/letters/?type=non-archive&per_page=1`
        );
        setNewLetter(response.data.data[0]);
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

  const cardRef = useRef(null);

  useGSAP(() => {
    if (isVisible && newLetter) {
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [isVisible, newLetter]);

  return (
    <div
      className="w-full"
      ref={ref}
    >
      {isVisible && (
        <div
          className="w-full flex flex-col items-end translate-y-200px opacity-0"
          ref={cardRef}
        >
          {/* it has three rows */}
          <div className="w-full flex flex-col items-end">
            <Heading2 title="مجله جدید" />
            {newLetter?.release_date && (
              <p className="text-3xl mt-7">{newLetter?.release_date}</p>
            )}
            <div className="relative w-full h-490px md:h-500px mt-7">
              {newLetter?.featured_image ? (
                <Image
                  src={newLetter?.featured_image}
                  alt="new magazine"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              ) : (
                <div className="h-full w-full flex justify-center items-center"></div>
              )}
            </div>
            {newLetter?.slug && (
              <Link
                href={`/letters/${newLetter?.slug}`}
                className="w-full h-10 flex justify-center items-center mt-7 border border-black font-common-lg text-28px
          bg-white text-black transition-all duration-300"
              >
                خواندن نامه
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
