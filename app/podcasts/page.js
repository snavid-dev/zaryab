'use client';

import ArrowLink from '@/components/ArrowLink/ArrowLink';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import PodcastCard from '@/components/PodcastCard/PodcastCard';
import { useRef, useState, useEffect } from 'react';

// import axios from '@/utils/api';

export default function PodcastsPage() {
  // get data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);

  //   const fetchData = async (page) => {
  //     try {
  //       const response = await axios.get(`/v1/podcasts?per_page=5&page=${page}`);
  //       setData(response.data);
  //       setTotalPages(response.data.pages); // Assuming the API provides total pages
  //       console.log('fetch again');
  //     } catch (err) {
  //       setError(err.response?.data?.message || err.message);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData(currentPage);
  //   }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    // the main container of the page
    <div className="flex flex-col items-center mb-5">
      {/*  the title of the page  */}
      <div className="main-container mt-7 rtl">
        <div className="col-span-6 md:col-span-3 xl:col-span-6">
          <Heading1 title="نشست ها" />
        </div>
        <div className="col-span-6 md:col-span-3 xl:col-span-6 flex justify-end">
          <ArrowLink title="همه نشست ها" />
        </div>
      </div>
      {/* the body of the page the cards sections */}
      <div className="main-container mt-7">
        {/* {data?.podcasts.map((data, index) => (
          <Podcast
            key={index}
            data={data}
          />
        ))} */}
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        {/* full ad */}
        <FullAd />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        {/* full ad */}
        <FullAd />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        {/* full ad */}
        <FullAd />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        {/* full ad */}
        <FullAd />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        {/* full ad */}
        <FullAd />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        {/* full ad */}
        <FullAd />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        {/* full ad */}
        <FullAd />
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center mt-5">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`w-20 h-20 mr-1 pt-3 flex justify-center items-center border-2 border-black font-common-heavy text-3xl
                            ${
                              currentPage === index + 1
                                ? 'bg-black text-white'
                                : ''
                            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
