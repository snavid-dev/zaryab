'use client';

import { useEffect, useRef, useState } from 'react';
import Filter from '../Filter/Filter';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import StoryPoemCard from '../StoryPoemCard/StoryPoemCard';
import FullAd from '../FullAd/FullAd';
import axios from '@/utils/api';
import Pagination from '../Pagination/Pagination';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function StorySection({ type }) {
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState(null);
  const [alldata, setAllData] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisble, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [filterDone, setFilterDone] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const ref1 = useRef(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get(
          `/v1/stories?per_page=9&story_type=${
            typeFilter ? typeFilter : type ? type : ''
          }&categories=${categoryFilter}`
        );
        setData(response.data.data);
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
          fetchData1();
          setHasFetched(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref1.current) observer.observe(ref1.current);

    return () => observer.disconnect();
  }, [typeFilter, categoryFilter, hasFetched, type]);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get(
          `/v1/stories?per_page=9&page=${currentPage}`
        );
        setAllData(response.data.data);
        setTotalPage(response.data.meta.pages);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData2();
  }, [currentPage]);

  // animations

  useGSAP(() => {
    if (isVisble) {
      gsap.to('#filter', {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
      });

      gsap.to('#title', {
        y: 0,
        opacity: 1,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, [isVisble]);

  console.log(data, 'filterdata');

  return (
    <div className="main-container min-h-100vh">
      {/*  the filter of this section  */}

      <div
        className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
        id="filter"
      >
        {isVisble && (
          <Filter
            title="انواع داستان ها"
            type="story"
            setFilter={setTypeFilter}
            setCategoryFilter={setCategoryFilter}
            setFilterDone={setFilterDone}
          />
        )}
      </div>

      {/*  title of the section  */}
      <div
        className="mt-5 col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
        id="title"
      >
        {isVisble && <Heading1 title="داستان ها" />}
      </div>

      {/*  section body  */}
      <div>
        <div ref={ref1}>
          {isVisble && (
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
                        isStory={true}
                        data={data}
                        key={index}
                        isVisble={isVisble}
                      />
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        <div className={`w-full ${showPagination ? 'block' : 'hidden'}`}>
          <div
            id="story"
            className="main-container mt-5 rtl"
          >
            {Array.isArray(alldata) &&
              alldata?.map((data, index) => (
                <StoryPoemCard
                  isStory={true}
                  data={data}
                  key={index}
                  isVisible={isVisble}
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
              />
            </div>
          </div>
        </div>
      </div>
      {isVisble && (
        <div
          className={`col-span-6 xl:col-span-12 rtl mt-5 ${
            showPagination ? 'hidden' : 'flex'
          }`}
          onClick={() => setShowPagination(true)}
        >
          <ArrowLink
            title="همه داستان ها"
            path="#story"
          />
        </div>
      )}
    </div>
  );
}
