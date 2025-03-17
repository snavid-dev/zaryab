'use client';

import Authors from '@/components/Authors/Authors';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SimilarHorizontalCard from '@/components/SimilarHorizontalCard/SimilarHorizontalCard';
import SmallAd from '@/components/SmallAd/SmallAd';
import { use, useEffect, useRef, useState } from 'react';
import axios from '@/utils/api';
import Pagination from '@/components/Pagination/Pagination';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ReviewsAndOpinionsPage({ searchParams }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [filterDone, setFilterDone] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  const params = use(searchParams);
  const reviewType = params?.review_type || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/author-reviews?per_page=8&page=${currentPage}&review_type=${
            typeFilter ? typeFilter : reviewType ? reviewType : ''
          }&categories=${categoryFilter}`
        );
        setData(response.data.data);
        setTotalPages(response.data.meta.pages);
        if (reviewType) {
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
  }, [currentPage, typeFilter, categoryFilter, reviewType, hasFetched]);

  // animation

  const filterRef = useRef(null);
  const titleRef = useRef(null);
  const paginationRef = useRef(null);

  useGSAP(() => {
    if (isVisible && data) {
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

      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        delay: 0.5,
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
    // main container of the page
    <div
      className="w-full min-h-100vh"
      ref={ref}
    >
      {isVisible && (
        <div className="flex flex-col items-center mt-100px xl:mt-0 mb-50px">
          {/*  the filter of the page  */}
          <div className="main-container">
            <div
              className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
              ref={filterRef}
            >
              <Filter
                title="انواع نقد و نظر"
                type="review"
                setFilter={setTypeFilter}
                setCategoryFilter={setCategoryFilter}
                setFilterDone={setFilterDone}
                setHasFetched={setHasFetched}
              />
            </div>
          </div>

          {/*  title of the page  */}
          <div className="main-container mt-5">
            <div
              className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
              ref={titleRef}
            >
              <Heading1 title="نقد و نظر ها" />
            </div>
          </div>

          {/*  the body of the page  */}
          <div className="main-container rtl">
            {filterDone && data.length === 0 ? (
              <div className="col-span-6 xl:col-span-12 flex justify-center items-center font-common-regular text-20px h-300px">
                هیچ موردی یافت نشد
              </div>
            ) : (
              data?.map((data, index) => (
                <SimilarHorizontalCard
                  data={data}
                  isArticle={false}
                  key={index}
                  isVisible={isVisible}
                />
              ))
            )}
          </div>
          {/* Pagination controls */}
          <div
            className="flex justify-center mt-5 translate-y-200px opacity-0"
            ref={paginationRef}
          >
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setHasFetched={setHasFetched}
            />
          </div>

          {/* full ad */}
          {/* <FullAd /> */}

          {/*  the authors section  */}
          <div className="main-container">
            <Authors />
          </div>
          {/* small ad */}
          {/* <SmallAd /> */}
        </div>
      )}
    </div>
  );
}
