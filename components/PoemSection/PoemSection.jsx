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

export default function PoemSection() {
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState(null);
  const [alldata, setAllData] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisble, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const ref = useRef(null);
  const filterRef = useRef(null);
  const ref1 = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get(
          `/v1/poems?per_page=9&poem_type=${typeFilter}&categories=${categoryFilter}`
        );
        setData(response.data.data);
        setHasFetched(false);
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [typeFilter, categoryFilter, hasFetched]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/poems?per_page=9&page=${currentPage}`
        );
        setAllData(response.data.data);
        setTotalPage(response.data.meta.pages);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, [currentPage]);

  // animation

  useGSAP(() => {
    if (isVisble) {
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
    }
  }, [isVisble]);

  return (
    <div
      className="w-full flex justify-center"
      ref={ref}
    >
      {isVisble && (
        <div className="main-container mt-100px xl:mt-50px mb-50px">
          {/*  the filter of this section  */}

          <div
            className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
            ref={filterRef}
          >
            <Filter
              type="poem"
              title="انواع شعر"
              setFilter={setTypeFilter}
              setCategoryFilter={setCategoryFilter}
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
            <div ref={ref1}>
              {isVisble && (
                <div
                  className={`w-full ${showPagination ? 'hidden' : 'block'}`}
                >
                  <div className={`main-container mt-5 rtl`}>
                    {data?.map((data, index) => {
                      return (
                        <StoryPoemCard
                          isStory={false}
                          data={data}
                          key={index}
                          isVisible={isVisble}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className={`w-full ${showPagination ? 'block' : 'hidden'}`}>
              <div
                id="poem"
                className="main-container mt-5 rtl"
              >
                {alldata?.map((data, index) => (
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
      )}
    </div>
  );
}
