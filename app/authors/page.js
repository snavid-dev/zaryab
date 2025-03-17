'use client';

import { useState, useEffect, useRef } from 'react';

import axios from '@/utils/api';
import Heading1 from '@/components/Heading1/Heading1';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import OurAuthorCard from '@/components/OurAuthorCard/OurAuthorCard';
import BookDesk from '@/components/BookDesk/BookDesk';
import AuthorWeek from '@/components/AuthorWeek/AuthorWeek';
import FullAd from '@/components/FullAd/FullAd';
import SmallAd from '@/components/SmallAd/SmallAd';
import Pagination from '@/components/Pagination/Pagination';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AuthorPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);
  const [allAuthors, setAllAuthrs] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/authors?per_page=${allAuthors ? 1000 : 8}&page=${currentPage}`
        );
        setData(response.data);
        setTotalPages(response.data.meta.pages); // Assuming the API provides total pages
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
  }, [currentPage, hasFetched, allAuthors]);

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

  const allAuthorHandler = () => {
    setAllAuthrs(true);
    setHasFetched(false);
    setIsVisible(false);
  };

  return (
    // the main container of the page
    <div
      className="w-full min-h-100vh"
      ref={ref}
    >
      {isVisible && (
        <div className="flex flex-col items-center mt-130px xl:mt-50px mb-50px">
          {/*  the title of the page  */}
          <div
            className="main-container rtl translate-y-200px opacity-0"
            ref={titleRef}
          >
            <div className="md:col-span-4 col-span-6 xl:col-span-8">
              <Heading1 title="نویسنده ها و شاعران آوای زریاب" />
            </div>
            <div
              className="md:col-span-2 col-span-6 xl:col-span-4 xl:mt-10px flex md:justify-end"
              onClick={allAuthorHandler}
            >
              <ArrowLink
                title="همه نویسنده ها و شاعران"
                path="/authors"
              />
            </div>
          </div>
          {/*  the authors section  */}
          <div className="main-container mt-14">
            {data?.data.map((data, index) => (
              <OurAuthorCard
                key={index}
                data={data}
                isVisible={isVisible}
              />
            ))}
          </div>
          <div
            className="main-container mt-5 translate-y-200px opacity-0"
            ref={paginationRef}
          >
            <div className="xl:col-span-4"></div>

            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setHasFetched={setHasFetched}
            />

            <div className="xl:col-span-4"></div>
          </div>
          {/* small ad */}
          {/* <SmallAd /> */}
          {/*  book section  */}
          <div className="mt-14">{!allAuthors && <BookDesk />}</div>
          {/* fullad */}
          {/* <FullAd /> */}
          <div>{!allAuthors && <AuthorWeek />}</div>
          {/* small ad */}
          {/* <SmallAd /> */}
        </div>
      )}
    </div>
  );
}
