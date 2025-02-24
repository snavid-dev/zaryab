'use client';

import { useRef } from 'react';
import LetterCard from '../LetterCard/LetterCard';
import Heading1 from '../Heading1/Heading1';
import FullAd from '../FullAd/FullAd';

export default function LettersSection() {
  const letters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const mainLetters = letters.slice(0, 12);

  return (
    <div className="flex flex-col items-center">
      {/* the heading of the section */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="نامه ها" />
        </div>
      </div>
      {/* the cards section */}
      <div className="main-container">
        {/* {mainLetters.map((item, index) => (
          <LetterCard
            key={index}
            item={item}
          />
        ))} */}
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
    </div>
  );
}
