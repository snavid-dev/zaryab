'use client';

import { useRef, useState } from 'react';
import Filter from '../Filter/Filter';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import StoryPoemCard from '../StoryPoemCard/StoryPoemCard';
import FullAd from '../FullAd/FullAd';

export default function StorySection() {
  const [showPagination, setShowPagination] = useState(false);

  console.log(showPagination, ' : pagination');

  const cards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const mainCards = cards.slice(0, 9);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Calculate the total number of pages
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  // Calculate the index range of cards to display
  const indexOfLastCard = currentPage * itemsPerPage;
  const indexOfFirstCard = indexOfLastCard - itemsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="main-container mt-150px xl:mt-50px mb-100px">
      {/*  the filter of this section  */}

      <div className="col-span-6 xl:col-span-12">
        <Filter
          items={[
            'داستانک',
            'داستان کوتاه',
            'داستان بلند',
            'رمان کوتاه',
            'قصه',
            'رمان',
            'نمایش نامه',
            'فیلم نامه',
          ]}
          title="انواع داستان ها"
          genre={[]}
        />
      </div>

      {/*  title of the section  */}
      <div className="mt-5 col-span-6 xl:col-span-12 rtl">
        <Heading1 title="داستان ها" />
      </div>

      {/*  section body  */}
      <div>
        <div className={`w-full ${showPagination ? 'hidden' : 'block'}`}>
          <div className={`main-container mt-5`}>
            {/* {mainCards.map((item, index) => {
            return (
              <>
                <StoryPageCard
                  key={index}
                  item={item}
                  isStory={true}
                />
                {(index + 1) % 3 === 0 && <SmallAddsContainer />}
              </>
            );
          })} */}
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            {/* full ad */}
            <FullAd />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            {/* full ad */}
            <FullAd />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            {/* full ad */}
            <FullAd />
          </div>
        </div>
        <div className={`w-full ${showPagination ? 'block' : 'hidden'}`}>
          <div
            id="story"
            className="main-container mt-5"
          >
            {/* {currentCards.map((item, index) => (
              <>
                <StoryPageCard
                  key={index}
                  item={item}
                  isStory={true}
                />
                {(index + 1) % 3 === 0 && <SmallAddsContainer />}
              </>
            ))} */}
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            {/* full ad */}
            <FullAd />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            {/* full ad */}
            <FullAd />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            <StoryPoemCard isStory={true} />
            {/* full ad */}
            <FullAd />
          </div>
          {/* Pagination controls */}
          <div className="main-container">
            <div className="col-span-6 xl:col-span-12 flex justify-center mt-5">
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
        </div>
      </div>
      <div
        className={`col-span-6 xl:col-span-12 rtl mt-5 ${
          showPagination ? 'hidden' : 'flex'
        }`}
        onClick={() => setShowPagination(true)}
      >
        <ArrowLink
          title="همه داستان ها"
          path="#story"
        />
      </div>
    </div>
  );
}
