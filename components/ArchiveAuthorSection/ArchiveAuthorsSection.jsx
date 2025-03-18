'use client';

import { useEffect, useRef, useState } from 'react';
import Heading1 from '../Heading1/Heading1';
import OurAuthorCard from '../OurAuthorCard/OurAuthorCard';
import AuthorWeekCard from '../AuthorWeekCard/AuthorWeekCard';
import SmallAd from '../SmallAd/SmallAd';
import axios from '@/utils/api';
import Pagination from '../Pagination/Pagination';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ArchiveAuthorsSection() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/authors-archive?per_page=6&page=${currentPage}`
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
  }, [currentPage, hasFetched]);

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
      className="w-full"
      ref={ref}
    >
      {isVisible && (
        <div className="flex flex-col items-center">
          {/*  the title of the section  */}
          <div className="main-container">
            <div
              className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
              ref={titleRef}
            >
              <Heading1 title="آرشیو نویسنده ها و شاعران معرفی شده" />
            </div>
          </div>

          {/*  the pagination section  */}
          <div className="main-container rtl">
            {data?.map((data, index) => (
              <AuthorWeekCard
                key={index}
                data={data}
                isVisible={isVisible}
              />
            ))}
          </div>
          {/* small ad */}
          {/* <SmallAd /> */}
          {/* Pagination controls */}
          <div
            className="flex justify-center mt-14 translate-y-200px opacity-0"
            ref={paginationRef}
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      )}
    </div>
  );
}
