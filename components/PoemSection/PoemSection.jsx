'use client';

import { useEffect, useRef, useState } from 'react';
import Filter from '../Filter/Filter';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import StoryPoemCard from '../StoryPoemCard/StoryPoemCard';
import FullAd from '../FullAd/FullAd';
import Pagination from '../Pagination/Pagination';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PoemSection({ type, serverData, types, categories }) {
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(serverData?.meta?.pages);
  const [data, setData] = useState(serverData?.data);
  const [alldata, setAllData] = useState(serverData?.data);
  const [Error, setError] = useState(null);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filterDone, setFilterDone] = useState(false);
  const [paginationStart, setPaginationStart] = useState(false);
  const filterRef = useRef(null);
  const ref1 = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const fetchData1 = async () => {
      if (typeFilter || categoryFilter || type) {
        try {
          const response = await axios.get(
            `/v1/poems?per_page=9&poem_type=${
              typeFilter ? typeFilter : type ? type : ''
            }&categories=${categoryFilter}`
          );
          setData(response.data.data);
          if (type) {
            setFilterDone(true);
          }
        } catch (err) {
          setError(err.response?.data?.message || err.message);
        }
      }
    };

    fetchData1();
  }, [typeFilter, categoryFilter, type]);

  useEffect(() => {
    const fetchData = async () => {
      if (paginationStart) {
        try {
          const response = await axios.get(
            `/v1/poems?per_page=9&page=${currentPage}`
          );
          setAllData(response.data.data);
        } catch (err) {
          setError(err.response?.data?.message || err.message);
        }
      }
    };
    fetchData();
  }, [currentPage]);

  // animation

  useGSAP(() => {
    gsap.to(filterRef.current, {
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: filterRef.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });

    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      delay: 0.5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        end: 'top 20%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="main-container mt-100px xl:mt-50px mb-50px">
        {/*  the filter of this section  */}

        <div
          className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
          ref={filterRef}
        >
          <Filter
            type={types}
            categories1={categories}
            title="انواع شعر"
            setFilter={setTypeFilter}
            setCategoryFilter={setCategoryFilter}
            setFilterDone={setFilterDone}
          />
        </div>

        {/*  title of the section  */}
        <div
          className="mt-5 col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
          ref={titleRef}
        >
          <Heading1 title="اشعار" />
        </div>

        {/*  section body  */}
        <div>
          <div>
            <div className={`w-full ${showPagination ? 'hidden' : 'block'}`}>
              <div className={`main-container mt-5 rtl`}>
                {filterDone && data.length === 0 ? (
                  <div className="col-span-6 xl:col-span-12 flex justify-center items-center font-common-regular text-20px h-300px">
                    هیچ موردی یافت نشد
                  </div>
                ) : (
                  Array.isArray(data) &&
                  data?.map((data, index) => {
                    return (
                      <StoryPoemCard
                        isStory={false}
                        data={data}
                        key={index}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
          <div className={`w-full ${showPagination ? 'block' : 'hidden'}`}>
            <div
              id="poem"
              className="main-container mt-5 rtl"
            >
              {Array.isArray(alldata) &&
                alldata?.map((data, index) => (
                  <StoryPoemCard
                    isStory={false}
                    data={data}
                    key={index}
                  />
                ))}
            </div>
            {/* Pagination controls */}
            <div className="main-container">
              <div className="col-span-6 xl:col-span-12 flex justify-center mt-5">
                <Pagination
                  totalPages={totalPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  setPaginationStart={setPaginationStart}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`col-span-6 xl:col-span-12 rtl mt-5 ${
            showPagination ? 'hidden' : 'flex'
          }`}
          onClick={() => setShowPagination(true)}
        >
          <ArrowLink
            title="همه اشعار"
            path="#poem"
          />
        </div>
      </div>
    </div>
  );
}
