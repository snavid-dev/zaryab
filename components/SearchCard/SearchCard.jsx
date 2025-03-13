'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import Link from 'next/link';

export default function SearchCard({ data, type }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };
  return (
    //     main container of the card
    <div className="col-span-6 md:col-span-3 xl:col-span-2 p-5 xl:p-2 md:p-10 lg:p-7 border-4 border-black flex flex-col items-end justify-between mt-5">
      {/*  it has 6 rows  */}
      <div
        className="w-full h-260px md:h-240px lg:h-260px xl:h-140px 2xl:h-180px border-4 border-black relative hover:border-footerBtn transition-all duration-700"
        onMouseEnter={handleMouseEnter}
      >
        {data?.featured_image ? (
          <Image
            src={data?.featured_image}
            alt={data?.title}
            layout="fill"
            objectFit="cover"
            className={`absolute transition-all duration-700
                ${isHovered ? 'opacity-50' : 'opacity-100'}`}
          />
        ) : (
          <div className="w-full h-full"></div>
        )}
      </div>
      <div className="w-full font-new-extra-bold text-20px 2xl:text-27px mt-3">
        {data?.title}
      </div>
      <div className="w-full mt-3">
        <Link
          href={
            type === 'story'
              ? `/literarywritings/story/episode/${data?.slug}`
              : type === 'poem'
              ? `/literarywritings/poems/${data?.slug}`
              : type === 'article'
              ? `/articles/${data?.slug}`
              : type === 'letter'
              ? `/magazines/${data?.slug}`
              : type === 'review'
              ? `/reviewsandopinions/${data?.slug}`
              : type === 'podcast'
              ? `/podcasts/${data?.slug}`
              : ''
          }
          className="w-full py-2 font-common-heavy text-13px border-2 border-black flex justify-center items-center
                bg-black text-white hover:bg-white hover:text-black transition-all duration-700"
        >
          {type === 'story'
            ? 'خواندن داستان'
            : type === 'poem'
            ? 'خواندن شعر'
            : type === 'article'
            ? 'خواندن مقاله'
            : type === 'letter'
            ? 'خواندن مجله'
            : type === 'review'
            ? 'خواندن نقد و نظر'
            : type === 'podcast'
            ? 'شنیدن کتاب صوتی'
            : ''}{' '}
        </Link>
      </div>
    </div>
  );
}
