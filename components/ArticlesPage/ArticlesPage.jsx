'use client';
import Authors from '@/components/Authors/Authors';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SimilarHorizontalCard from '@/components/SimilarHorizontalCard/SimilarHorizontalCard';
import SmallAd from '@/components/SmallAd/SmallAd';
import { useEffect, useRef, useState } from 'react';
import axios from '@/utils/api';
import Pagination from '@/components/Pagination/Pagination';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ArticlesPage({
  type,
  serverData,
  authorData,
  categories,
  types,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(serverData?.meta?.pages);
  const [data, setData] = useState(serverData?.data);
  const [Error, setError] = useState(null);
  const [filterDone, setFilterDone] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [paginationStart, setPaginationStart] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (typeFilter || categoryFilter || type || paginationStart) {
        try {
          const response = await axios.get(
            `/v1/articles?per_page=8&page=${currentPage}&article_type=${
              typeFilter ? typeFilter : type ? type : ''
            }&categories=${categoryFilter}`
          );
          setData(response.data.data);
        } catch (err) {
          setError(err.response?.data?.message || err.message);
        }
      }
    };

    fetchData();
  }, [currentPage, typeFilter, categoryFilter, type]);

  // animation

  const filterRef = useRef(null);
  const titleRef = useRef(null);
  const paginationRef = useRef(null);

  useGSAP(() => {
    if (data) {
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
  }, [data]);

  return (
    // main container of the page
    <div className="w-full min-h-100vh">
      <div className="flex flex-col items-center mt-100px xl:mt-0 mb-50px">
        {/*  the filter of the page  */}
        <div className="main-container">
          <div
            className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
            ref={filterRef}
          >
            <Filter
              title="انواع مقاله ها"
              categories1={categories}
              type={types}
              setFilter={setTypeFilter}
              setCategoryFilter={setCategoryFilter}
              setFilterDone={setFilterDone}
            />
          </div>
        </div>

        {/*  title of the page  */}
        <div className="main-container mt-5">
          <div
            className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
            ref={titleRef}
          >
            <Heading1 title="مقاله ها" />
          </div>
        </div>

        {/*  the body of the page  */}
        <div className="main-container rtl">
          {filterDone && data.length === 0 ? (
            <div className="col-span-6 xl:col-span-12 flex justify-center items-center font-common-regular text-20px h-300px">
              هیچ موردی یافت نشد
            </div>
          ) : (
            Array.isArray(data) &&
            data?.map((data, index) => (
              <SimilarHorizontalCard
                data={data}
                isArticle={true}
                key={index}
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
            setPaginationStart={setPaginationStart}
          />
        </div>

        {/* full ad
        <FullAd /> */}

        {/*  the authors section  */}
        <div className="main-container">
          <Authors data={authorData?.data} />
        </div>
        {/* small ad
        <SmallAd /> */}
      </div>
    </div>
  );
}
