'use client';

import Authors from '@/components/Authors/Authors';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SimilarHorizontalCard from '@/components/SimilarHorizontalCard/SimilarHorizontalCard';
import SmallAd from '@/components/SmallAd/SmallAd';
import { useRef, useState } from 'react';

export default function ArticlesPage() {
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Calculate the index range of cards to display
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = items.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        {/* {currentCards.map((item, index) => (
          <ArticlesHorizontalCard
            key={index}
            vlaue={item}
          />
        ))} */}
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
        <SimilarHorizontalCard />
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
