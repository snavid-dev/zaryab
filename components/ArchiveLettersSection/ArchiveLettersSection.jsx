'use client';

import { useEffect, useRef, useState } from 'react';
import Filter from '../Filter/Filter';
import LetterCard from '../LetterCard/LetterCard';
import Heading1 from '../Heading1/Heading1';
import FullAd from '../FullAd/FullAd';
import Pagination from '../Pagination/Pagination';
import axios from '@/utils/api';

export default function ArchivedLettersSection() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/letters/?type=archive&per_page=3&page=${currentPage}`
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
      {/* the title of the section */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="آرشیو نامه ها" />
        </div>
      </div>
      {/*  the Filter section  */}
      <div className="main-container mt-5">
        <div className="col-span-6 xl:col-span-12">
          <Filter
            items={['جدید', 'پر بازدید ترین ها', 'آرشیو']}
            title="انواع نامه ها"
            genre={[]}
          />
        </div>
      </div>
      {/*  pagination section  */}
      <div className="main-container mt-7">
        {data?.map((data, index) => (
          <LetterCard
            key={index}
            data={data}
          />
        ))}
      </div>
      {/* Pagination controls */}
      <div className="flex justify-center mt-5">
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
