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

export default function AuthorsPage({
  serverData,
  bookData,
  archiveAuthorData,
}) {
  const [data, setData] = useState(serverData);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(serverData?.meta?.pages);
  const [allAuthors, setAllAuthrs] = useState(false);
  const [paginationStart, setPaginationStart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (allAuthors || paginationStart) {
        try {
          const response = await axios.get(
            `/v1/authors?per_page=${allAuthors ? 1000 : 8}&page=${currentPage}`
          );
          setData(response.data);
          setTotalPages(response.data.meta.pages); // Assuming the API provides total pages
        } catch (err) {
          setError(err.response?.data?.message || err.message);
        }
      }
    };

    fetchData();
  }, [currentPage, allAuthors]);

  // animation

  const titleRef = useRef(null);
  const paginationRef = useRef(null);

  useGSAP(() => {
    if (data) {
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
  }, [data]);

  const allAuthorHandler = () => {
    setAllAuthrs(true);
  };

  return (
    // the main container of the page
    <div className="w-full min-h-100vh">
      <div className="flex flex-col items-center mt-130px xl:mt-50px mb-50px">
        {/*  the title of the page  */}
        <div
          className="main-container rtl translate-y-200px opacity-0"
          ref={titleRef}
        >
          <div className="md:col-span-4 col-span-6 xl:col-span-8">
            <Heading1 title="نویسندگان و شاعران آوای زریاب" />
          </div>
          <div
            className="md:col-span-2 col-span-6 xl:col-span-4 xl:mt-10px flex md:justify-end"
            onClick={allAuthorHandler}
          >
            <ArrowLink
              title="همه نویسندگان و شاعران"
              path="/authors"
            />
          </div>
        </div>
        {/*  the authors section  */}
        <div className="main-container mt-14">
          {Array.isArray(data?.data) &&
            data?.data?.map((data, index) => (
              <OurAuthorCard
                key={index}
                data={data}
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
            setPaginationStart={setPaginationStart}
          />

          <div className="xl:col-span-4"></div>
        </div>
        {/* small ad */}
        {/* <SmallAd /> */}
        {/*  book section  */}
        <div className="mt-14">
          <BookDesk data={bookData} />
        </div>
        {/* fullad */}
        {/* <FullAd /> */}
        <div>
          <AuthorWeek data={archiveAuthorData?.data} />
        </div>
        {/* small ad */}
        {/* <SmallAd /> */}
      </div>
    </div>
  );
}
