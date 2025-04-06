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

export default function ArchiveAuthorsSection({ serverData }) {
  const [data, setData] = useState(serverData?.data);
  const [Error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(serverData?.meta?.pages);
  const [paginationStart, setPaginationStart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (paginationStart) {
        try {
          const response = await axios.get(
            `/v1/authors-archive?per_page=6&page=${currentPage}`
          );

          setData(response.data.data);
        } catch (err) {
          setError(err.response?.data?.message || err.message);
        }
      }
    };
    fetchData();
  }, [currentPage]);

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

  return (
    <div className="w-full">
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
          {Array.isArray(data) &&
            data?.map((data, index) => (
              <AuthorWeekCard
                key={index}
                data={data}
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
            setPaginationStart={setPaginationStart}
          />
        </div>
      </div>
    </div>
  );
}
