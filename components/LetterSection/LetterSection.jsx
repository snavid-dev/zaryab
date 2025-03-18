'use client';

import LetterCard from '../LetterCard/LetterCard';
import Heading1 from '../Heading1/Heading1';
import FullAd from '../FullAd/FullAd';
import { useEffect, useRef, useState } from 'react';
import axios from '@/utils/api';
import Pagination from '../Pagination/Pagination';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LettersSection({ params }) {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  const letterType = params?.magazine_type || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/letters/?type=non-archive&per_page=9&page=${currentPage}&letter_type=${
            letterType ? letterType : ''
          }`
        );
        setData(response.data.data);
        setTotalPage(response.data.meta.pages);
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
  }, [currentPage, letterType, hasFetched]);

  // animation

  const titleRef = useRef(null);
  const paginationRef = useRef(null);

  useGSAP(() => {
    if (isVisible && data) {
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

      gsap.to(paginationRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: paginationRef.current,
          start: 'top 90%',
          end: 'top 70%',
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
        <div className="flex flex-col items-center">
          {/* the heading of the section */}
          <div className="main-container">
            <div
              className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
              ref={titleRef}
            >
              <Heading1 title="مجله های ادبی" />
            </div>
          </div>
          {/* the cards section */}
          <div className="main-container rtl">
            {data && data.length === 0 ? (
              <div className="col-span-6 xl:col-span-12 flex justify-center items-center font-common-regular text-20px h-300px">
                هیچ موردی یافت نشد
              </div>
            ) : (
              data?.map((data, index) => (
                <LetterCard
                  data={data}
                  key={index}
                  isVisible={isVisible}
                />
              ))
            )}
          </div>
          <div
            className="flex mt-10 translate-y-200px opacity-0"
            ref={paginationRef}
          >
            {' '}
            <Pagination
              totalPages={totalPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
