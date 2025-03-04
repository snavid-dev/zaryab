'use client';

import { useState, useEffect } from 'react';

import axios from '@/utils/api';
import Heading1 from '@/components/Heading1/Heading1';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import OurAuthorCard from '@/components/OurAuthorCard/OurAuthorCard';
import BookDesk from '@/components/BookDesk/BookDesk';
import AuthorWeek from '@/components/AuthorWeek/AuthorWeek';
import FullAd from '@/components/FullAd/FullAd';
import SmallAd from '@/components/SmallAd/SmallAd';
import Pagination from '@/components/Pagination/Pagination';

export default function AuthorPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`/v1/authors?per_page=8&page=${page}`);
      setData(response.data);
      setTotalPages(response.data.meta.pages); // Assuming the API provides total pages
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    // the main container of the page
    <div className="flex flex-col items-center mt-150px">
      {/*  the title of the page  */}
      <div className="main-container rtl">
        <div className="md:col-span-4 col-span-6 xl:col-span-8">
          <Heading1 title="نویسنده ها و شاعران آوای زریاب" />
        </div>
        <div className="md:col-span-2 col-span-6 xl:col-span-4 xl:mt-10px flex md:justify-end">
          <ArrowLink
            title="همه نویسنده ها و شاعران"
            path="/authors"
          />
        </div>
      </div>
      {/*  the authors section  */}
      <div className="main-container mt-14">
        {data?.data.map((data, index) => (
          <OurAuthorCard
            key={index}
            data={data}
          />
        ))}
      </div>
      <div className="main-container mt-5">
        <div className="xl:col-span-4"></div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <div className="xl:col-span-4"></div>
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
      {/*  book section  */}
      <div className="mt-14">
        <BookDesk />
      </div>
      {/* fullad */}
      {/* <FullAd /> */}
      <div className="mt-14 mb-14">
        <AuthorWeek />
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
