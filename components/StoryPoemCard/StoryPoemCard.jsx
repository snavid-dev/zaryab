'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import Link from 'next/link';
import Genre from '../Genre/Genre';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StoryPoemCard({ data, isStory, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  // handle the length of the string
  function truncateString(str) {
    if (str?.length > 20) {
      return str.substring(0, 20) + '...';
    }
    return str;
  }

  // animation

  useGSAP(() => {
    if ((isVisible, data)) {
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
  }, [isVisible, data]);

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
      <div className="font-new-extra-bold text-36px w-full rtl md:text-76px lg:text-50px mt-3">
        {truncateString(data?.title)}
      </div>
      {isStory ? (
        <div
          className="font-common-thin text-8px md:text-18px lg:text-17px mt-3 text-right"
          dangerouslySetInnerHTML={{ __html: data?.excerpt }}
        ></div>
      ) : (
        <div className="font-common-thin text-8px md:text-18px lg:text-17px mt-3 text-right">
          <div
            dangerouslySetInnerHTML={{ __html: data?.excerpt.split('\n')[0] }}
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: data?.excerpt.split('\n')[1] }}
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: data?.excerpt.split('\n')[2] }}
          ></div>
        </div>
      )}
      <div className="w-full flex items-center justify-between mt-3 text-xs">
        <div className="rtl flex items-center text-right">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            زمان:
          </b>
          <p className="font-common-thin md:mt-1 text-8px md:text-18px lg:text-12px">
            {data?.duration}
          </p>
          <p className="font-common-thin md:mt-1 text-8px md:text-18px lg:text-12px">
            دقیقه
          </p>
        </div>
        <div className="rtl flex items-center text-right md:text-18px lg:text-12px">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            تاریخ:
          </b>
          <p className="font-common-thin md:mt-1 text-8px md:text-18px lg:text-12px">
            {data?.date}
          </p>
        </div>
        <div className="rtl flex items-center text-right">
          <b className="font-common-bold text-8px md:text-18px lg:text-12px ml-1">
            نویسنده:
          </b>
          <p className="font-common-thin md:mt-1 text-8px md:text-18px lg:text-12px">
            {data?.author}
          </p>
        </div>
      </div>
      {isStory ? (
        <div className="w-full flex gap-2 mt-3 rtl">
          {data?.categories.map((category, index) => (
            <Genre
              title={category.name}
              key={index}
            />
          ))}
        </div>
      ) : (
        data?.poem_type && (
          <div className="w-full flex gap-2 mt-3 rtl">
            {data?.poem_type.map((poem, index) => (
              <Genre
                title={poem.name}
                key={index}
              />
            ))}
          </div>
        )
      )}
      <div className="w-full mt-3">
        <Link
          href={`/literarywritings/${isStory ? 'story/episode' : 'poems'}/${
            data?.slug
          }`}
          className="w-full py-2 font-common-heavy text-20px md:text-43px lg:text-28px border-2 border-black flex justify-center items-center
                bg-black text-white hover:bg-white hover:text-black transition-all duration-700"
        >
          {isStory ? 'خواندن داستان' : 'خواندن شعر'}
        </Link>
      </div>
    </div>
  );
}
