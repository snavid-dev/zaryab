'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import Link from 'next/link';
import Genre from '../Genre/Genre';

export default function StoryPoemCard({ data, isStory }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  // handle the length of the string
  function truncateString(str) {
    if (str?.length > 13) {
      return str.substring(0, 13) + '...';
    }
    return str;
  }

  return (
    //     main container of the card
    <div className="col-span-6 lg:col-span-3 xl:col-span-4 p-5 md:p-10 lg:p-7 border-4 border-black flex flex-col items-end justify-between mt-5">
      {/*  it has 6 rows  */}
      <div
        className="w-full h-260px md:h-570px lg:h-260px xl:h-280px 2xl:h-370px border-4 border-black relative hover:border-footerBtn transition-all duration-700"
        onMouseEnter={handleMouseEnter}
      >
        {data?.featured_image || true ? (
          <Image
            src={data?.featured_image || '/assets/img/story-card.png'}
            alt=""
            layout="fill"
            objectFit="cover"
            className={`absolute transition-all duration-700
                    ${isHovered ? 'opacity-50' : 'opacity-100'}`}
          />
        ) : (
          <div>failed to display image!!!</div>
        )}
      </div>
      <div className="font-new-extra-bold text-36px rtl md:text-76px lg:text-50px mt-3">
        {truncateString(data?.title) || 'صندوقچه بی بی'}
      </div>
      <div className="font-common-thin text-8px md:text-18px lg:text-17px mt-3 text-right">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.content_array[0] || '<div>Hello</div>',
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.content_array[1] || '<div>Hello</div>',
          }}
        ></div>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.content_array[2] || '<div>Hello</div>',
          }}
        ></div>
      </div>
      <div className="w-full flex items-center justify-between mt-3 text-xs">
        <div className="rtl flex items-center text-right">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            زمان:
          </b>
          <p className="font-common-thin mt-2 text-8px md:text-18px lg:text-12px">
            {data?.time || '12'}
          </p>
          <p className="font-common-thin mt-2 text-8px md:text-18px lg:text-12px">
            دقیقه
          </p>
        </div>
        <div className="rtl flex items-center text-right md:text-18px lg:text-12px">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            تاریخ:
          </b>
          <p className="font-common-thin mt-2 text-8px md:text-18px lg:text-12px">
            {data?.shamsi_date || '12/2/1403'}
          </p>
        </div>
        <div className="rtl flex items-center text-right">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            نویسنده:
          </b>
          <p className="font-common-thin mt-2 text-8px md:text-18px lg:text-12px">
            {data?.author.name || 'باسط یزدانی'}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end gap-2 mt-3">
        {/* {data?.categories.map((category, index) => (
          <Genre
            title={category || 'ترسناک'}
            key={index}
          />
        ))} */}
        <Genre title="ترسناک" />
        <Genre title="ترسناک" />
        <Genre title="ترسناک" />
      </div>
      <div className="w-full mt-3">
        <Link
          href={`/literarywritings/poems/${data?.slug}`}
          className="w-full py-2 font-common-heavy text-20px md:text-43px lg:text-28px border-2 border-black flex justify-center items-center
                bg-black text-white hover:bg-white hover:text-black transition-all duration-700"
        >
          {isStory ? 'خوادن داستان' : 'خواندن شعر'}
        </Link>
      </div>
    </div>
  );
}
