'use client';

import ArrowLink from '@/components/ArrowLink/ArrowLink';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import PodcastCard from '@/components/PodcastCard/PodcastCard';
import { useRef, useState, useEffect } from 'react';

import axios from '@/utils/api';
import Pagination from '@/components/Pagination/Pagination';

export default function PodcastsPage() {
  // get data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/podcasts?per_page=15&page=${currentPage}`
        );

        setData(response.data.data);
        setTotalPages(response.data.meta.pages); // Assuming the API provides total pages
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, [currentPage]);

  console.log(data, 'podcasts');

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
          <ArrowLink
            title="همه نشست ها"
            path="/podcasts"
          />
        </div>
      </div>
      {/* the body of the page the cards sections */}
      <div className="main-container mt-7">
        {data?.map((data, index) => (
          <PodcastCard
            data={data}
            key={index}
          />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center mt-5">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
