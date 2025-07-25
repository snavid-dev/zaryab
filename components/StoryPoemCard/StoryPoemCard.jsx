'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import Link from 'next/link';
import Genre from '../Genre/Genre';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { truncateString } from '@/utils/GeneralFuncions/GeneralFunctions';

gsap.registerPlugin(ScrollTrigger);

export default function StoryPoemCard({ data, isStory }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  // handle the length of the string
  function truncateString1(str) {
    if (str?.length > 20) {
      return str.substring(0, 20) + '...';
    }
    return str;
  }

  // animation

  useGSAP(() => {
    if (data) {
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'topo 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    //     main container of the card
    <div
      className="col-span-6 lg:col-span-3 xl:col-span-4 p-5 md:p-10 lg:p-7 border-4 border-black flex flex-col items-end justify-between mt-5 translate-y-200px opacity-0"
      ref={cardRef}
    >
      {/*  it has 6 rows  */}
      <div
        className="w-full h-260px md:h-570px lg:h-260px xl:h-280px 2xl:h-370px border-4 border-black relative hover:border-footerBtn transition-all duration-700"
        onMouseEnter={handleMouseEnter}
      >
        {data?.featured_image ? (
          <Image
            src={data?.featured_image}
            alt={data?.title ? data?.title : 'not found'}
            layout="fill"
            objectFit="cover"
            className={`absolute transition-all duration-700
                    ${isHovered ? 'opacity-50' : 'opacity-100'}`}
          />
        ) : (
          <div></div>
        )}
      </div>
      {data?.title && (
        <div className="font-pashto text-36px w-full rtl md:text-76px lg:text-50px mt-3">
          {truncateString1(data?.title)}
        </div>
      )}
      {isStory ? (
        <div className="font-pashto text-8px md:text-18px lg:text-17px mt-3 text-right font-bold">
          {data?.excerpt && truncateString(data?.excerpt, 300)}
        </div>
      ) : (
        <div className="font-pashto text-8px md:text-18px lg:text-17px mt-3 text-right font-bold">
          {data?.excerpt && (
            <div
              dangerouslySetInnerHTML={{ __html: data?.excerpt.split('\n')[0] }}
              suppressHydrationWarning
            ></div>
          )}
          {data?.excerpt && (
            <div
              dangerouslySetInnerHTML={{ __html: data?.excerpt.split('\n')[1] }}
              suppressHydrationWarning
            ></div>
          )}
          {data?.excerpt && (
            <div
              dangerouslySetInnerHTML={{ __html: data?.excerpt.split('\n')[2] }}
              suppressHydrationWarning
            ></div>
          )}
        </div>
      )}
      <div className="w-full flex items-center justify-between mt-3 text-xs">
        <div className="rtl flex items-center text-right">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            زمان:
          </b>
          {data?.duration && (
            <p className="font-pashto md:mt-1 text-8px md:text-18px lg:text-12px">
              {data?.duration}
            </p>
          )}
          <p className="font-common-thin md:mt-1 text-8px md:text-18px lg:text-12px">
            دقیقه
          </p>
        </div>
        <div className="rtl flex items-center text-right md:text-18px lg:text-12px">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            تاریخ:
          </b>
          {data?.date && (
            <p className="font-pashto md:mt-1 text-8px md:text-18px lg:text-12px">
              {data?.date}
            </p>
          )}
        </div>
        <div className="rtl flex items-center text-right">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            نویسنده:
          </b>
          {data?.author && (
            <p className="font-pashto md:mt-1 text-8px md:text-18px lg:text-12px">
              {data?.author}
            </p>
          )}
        </div>
      </div>
      {isStory ? (
        <div className="w-full flex justify-between gap-2 mt-3 rtl">
          {Array.isArray(data?.categories) &&
            data?.categories.map((category, index) => {
              if (index < 3) {
                return (
                  <Genre
                    title={category.name}
                    key={index}
                  />
                );
              }
            })}
        </div>
      ) : (
        data?.poem_type && (
          <div className="w-full flex gap-2 mt-3 rtl">
            {Array.isArray(data?.poem_type) &&
              data?.poem_type.map((poem, index) => {
                if (index < 4) {
                  return (
                    <Genre
                      title={poem.name}
                      key={index}
                    />
                  );
                }
              })}
          </div>
        )
      )}
      <div className="w-full mt-3">
        {data?.slug && (
          <Link
            href={`/${isStory ? 'episode' : 'poem'}/${data?.slug}`}
            className="w-full py-2 font-common-heavy text-20px md:text-43px lg:text-28px border-2 border-black flex justify-center items-center
                bg-black text-white hover:bg-white hover:text-black transition-all duration-700"
          >
            {isStory ? 'خواندن داستان' : 'خواندن شعر'}
          </Link>
        )}
      </div>
    </div>
  );
}
