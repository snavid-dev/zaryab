'use client';

import LetterCard from '../LetterCard/LetterCard';
import Heading1 from '../Heading1/Heading1';
import FullAd from '../FullAd/FullAd';
import { useEffect, useState } from 'react';
import axios from '@/utils/api';
import Pagination from '../Pagination/Pagination';

export default function LettersSection() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/letters/?type=non-archive&per_page=9&page=${currentPage}`
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
      {/* the heading of the section */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="مجله های ادبی" />
        </div>
      </div>
      {/* the cards section */}
      <div className="main-container rtl">
        {data?.map((data, index) => (
          <LetterCard
            data={data}
            key={index}
          />
        ))}
      </div>
      <div className="flex mt-10">
        {' '}
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
