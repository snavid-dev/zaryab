'use client';

import { useRef, useState } from 'react';
import Filter from '../Filter/Filter';
import LetterCard from '../LetterCard/LetterCard';
import Heading1 from '../Heading1/Heading1';
import FullAd from '../FullAd/FullAd';

export default function ArchivedLettersSection() {
  const letters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the total number of pages
  const totalPages = Math.ceil(letters.length / itemsPerPage);

  // Calculate the index range of cards to display
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = letters.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        {/* {
                    currentCards.map((item , index) => (
                        <LetterCard key={index} item={item}/>
                    ))
                } */}
        <LetterCard />
        <LetterCard />
        <LetterCard />
        {/* full ad */}
        <FullAd />
        <LetterCard />
        <LetterCard />
        <LetterCard />
        {/* full ad */}
        <FullAd />
        <LetterCard />
        <LetterCard />
        <LetterCard />
        {/* full ad */}
        <FullAd />
        <LetterCard />
        <LetterCard />
        <LetterCard />
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
