'use client';

import { useEffect, useRef, useState } from 'react';
import Filter from '../Filter/Filter';
import LetterCard from '../LetterCard/LetterCard';
import Heading1 from '../Heading1/Heading1';
import FullAd from '../FullAd/FullAd';
import Pagination from '../Pagination/Pagination';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function ArchivedLettersSection({ type }) {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);
  const [filterDone, setFilterDone] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/letters/?type=${
            typeFilter ? typeFilter : type ? type : 'archive'
          }&per_page=3&page=${currentPage}`
        );
        setData(response.data.data);
        setTotalPage(response.data.meta.pages);
        setHasFetched(false);
        if (type) {
          setFilterDone(true);
        }
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
  }, [currentPage, hasFetched, typeFilter, type]);

  // animation
  const titleRef = useRef(null);
  const filterRef = useRef(null);
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

      gsap.to(filterRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: filterRef.current,
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

  console.log(typeFilter, 'typeFilter');

  return (
    <div
      className="w-full"
      ref={ref}
    >
      {isVisible && (
        <div className="flex flex-col items-center">
          {/* the title of the section */}
          <div className="main-container">
            <div
              className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
              ref={titleRef}
            >
              <Heading1 title="آرشیو نامه ها" />
            </div>
          </div>
          {/*  the Filter section  */}
          <div className="main-container mt-5">
            <div
              className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
              ref={filterRef}
            >
              <Filter
                type="letter"
                title="انواع نامه ها"
                setFilter={setTypeFilter}
                setCategoryFilter={false}
                setFilterDone={setFilterDone}
              />
            </div>
          </div>
          {/*  pagination section  */}
          <div className="main-container mt-7 rtl">
            {data?.map((data, index) => (
              <LetterCard
                key={index}
                data={data}
                isVisible={isVisible}
              />
            ))}
          </div>
          {/* Pagination controls */}
          <div
            className="flex justify-center mt-14 translate-y-200px opacity-0"
            ref={paginationRef}
          >
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
