'use client';

import { useEffect, useRef, useState } from 'react';
import Filter from '../Filter/Filter';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import StoryPoemCard from '../StoryPoemCard/StoryPoemCard';
import FullAd from '../FullAd/FullAd';
import axios from '@/utils/api';
import Pagination from '../Pagination/Pagination';

export default function StorySection() {
  const [showPagination, setShowPagination] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState(null);
  const [alldata, setAllData] = useState(null);
  const [Error, setError] = useState(null);
  const [storyType, setStoryType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/stories?per_page=9');
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, [currentPage]);

  return (
    <div className="main-container mt-150px xl:mt-50px mb-100px">
      {/*  the filter of this section  */}

      <div className="col-span-6 xl:col-span-12">
        <Filter
          title="انواع داستان ها"
          type="story"
        />
      </div>

      {/*  title of the section  */}
      <div className="mt-5 col-span-6 xl:col-span-12 rtl">
        <Heading1 title="داستان ها" />
      </div>

      {/*  section body  */}
      <div>
        <div className={`w-full ${showPagination ? 'hidden' : 'block'}`}>
          <div className={`main-container mt-5`}>
            {data?.map((data, index) => {
              return (
                <StoryPoemCard
                  isStory={true}
                  data={data}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className={`w-full ${showPagination ? 'block' : 'hidden'}`}>
          <div
            id="story"
            className="main-container mt-5"
          >
            {alldata?.map((data, index) => (
              <StoryPoemCard
                isStory={true}
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
          title="همه داستان ها"
          path="#story"
        />
      </div>
    </div>
  );
}
