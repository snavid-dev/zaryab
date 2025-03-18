'use client';

import ArrowLink from '@/components/ArrowLink/ArrowLink';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import PodcastCard from '@/components/PodcastCard/PodcastCard';
import { useRef, useState, useEffect, use } from 'react';

import axios from '@/utils/api';
import Pagination from '@/components/Pagination/Pagination';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PodcastsPage({ searchParams }) {
  // get data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  const params = use(searchParams);
  const podcastType = params?.podcast_type || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/podcasts?per_page=15&page=${currentPage}&podcast_type=${
            podcastType ? podcastType : ''
          }`
        );

        setData(response.data.data);
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
  }, [currentPage, hasFetched, podcastType]);

  // animaiton
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
    // the main container of the page
    <div
      className="w-full flex justify-center min-h-100vh"
      ref={ref}
    >
      {isVisible && (
        <div className="flex flex-col items-center mt-100px xl:mt-0 mb-50px">
          {/*  the title of the page  */}
          <div
            className="main-container mt-7 rtl translate-y-200px opacity-0"
            ref={titleRef}
          >
            <div className="col-span-6 md:col-span-3 xl:col-span-6">
              <Heading1 title="کتاب های صوتی" />
            </div>
            <div className="col-span-6 md:col-span-3 xl:col-span-6 flex justify-start md:justify-end">
              <ArrowLink
                title="همه کتاب های صوتی"
                path="/podcasts"
              />
            </div>
          </div>
          {/* the body of the page the cards sections */}
          <div className="main-container mt-7 rtl">
            {data?.map((data, index) => (
              <PodcastCard
                isVisible={isVisible}
                data={data}
                key={index}
              />
            ))}
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
            />
          </div>
        </div>
      )}
    </div>
  );
}
