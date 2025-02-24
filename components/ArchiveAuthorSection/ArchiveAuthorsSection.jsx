'use client';

import { useRef, useState } from 'react';
import Heading1 from '../Heading1/Heading1';
import OurAuthorCard from '../OurAuthorCard/OurAuthorCard';
import AuthorWeekCard from '../AuthorWeekCard/AuthorWeekCard';
import SmallAd from '../SmallAd/SmallAd';

export default function ArchiveAuthorsSection() {
  const authors = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(authors.length / itemsPerPage);

  // Calculate the index range of cards to display
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = authors.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
        {currentCards.map((item, index) => (
          <AuthorWeekCard
            key={index}
            item={item}
          />
        ))}
      </div>
      {/* small ad */}
      <SmallAd />
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
