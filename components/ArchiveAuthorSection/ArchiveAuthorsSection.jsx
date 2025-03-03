'use client';

import { useEffect, useRef, useState } from 'react';
import Heading1 from '../Heading1/Heading1';
import OurAuthorCard from '../OurAuthorCard/OurAuthorCard';
import AuthorWeekCard from '../AuthorWeekCard/AuthorWeekCard';
import SmallAd from '../SmallAd/SmallAd';
import axios from '@/utils/api';
import Pagination from '../Pagination/Pagination';

export default function ArchiveAuthorsSection() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/authors-archive?per_page=6&page=${currentPage}`
        );

        setData(response.data.data);
        setTotalPage(response.data.meta.pages);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center">
      {/*  the title of the section  */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="آرشیو نویسنده ها و شاعران معرفی شده" />
        </div>
      </div>

      {/*  the pagination section  */}
      <div className="main-container">
        {data?.map((data, index) => (
          <AuthorWeekCard
            key={index}
            data={data}
          />
        ))}
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
      {/* Pagination controls */}
      <div className="flex justify-center mt-5">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
