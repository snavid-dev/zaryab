'use client';

import Authors from '@/components/Authors/Authors';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SimilarHorizontalCard from '@/components/SimilarHorizontalCard/SimilarHorizontalCard';
import SmallAd from '@/components/SmallAd/SmallAd';
import { useEffect, useRef, useState } from 'react';
import axios from '@/utils/api';
import Pagination from '@/components/Pagination/Pagination';

export default function ArticlesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/articles?per_page=8&page=${currentPage}`
        );
        setData(response.data.data);
        setTotalPages(response.data.meta.pages);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, [currentPage]);

  return (
    // main container of the page
    <div className="flex flex-col items-center mt-150px xl:mt-50px">
      {/*  the filter of the page  */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12">
          <Filter
            items={['علمی', 'تحقیقی', 'خبری']}
            title="انواع مقاله ها"
            genre={[]}
          />
        </div>
      </div>

      {/*  title of the page  */}
      <div className="main-container mt-5">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="مقاله ها" />
        </div>
      </div>

      {/*  the body of the page  */}
      <div className="main-container rtl">
        {data?.map((data, index) => (
          <SimilarHorizontalCard
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

      {/* full ad */}
      <FullAd />

      {/*  the authors section  */}
      <div className="main-container mt-14 mb-7">
        <Authors />
      </div>
      {/* small ad */}
      <SmallAd />
    </div>
  );
}
