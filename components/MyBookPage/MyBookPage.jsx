'use client';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import Authors from '@/components/Authors/Authors';
import Genre from '@/components/Genre/Genre';
import Heading1 from '@/components/Heading1/Heading1';
import SimilarStories from '@/components/SimilarStories/SimilarStories';
import StoryPoemCard from '@/components/StoryPoemCard/StoryPoemCard';
import Image from 'next/image';
import axios from '@/utils/api';
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
import StoriesPoemSection from '@/components/StoriesPoemSection/StoriesPoemSection';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MyBookPage({
  data,
  similarStoryData,
  poemsData,
  authorData,
}) {
  // animation

  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const collRef = useRef(null);
  const dateRef = useRef(null);
  const genreRef = useRef(null);
  const textRef = useRef(null);
  const authorRef = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(imageRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(dateRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: dateRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(collRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: collRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(genreRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: genreRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(authorRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: authorRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);
  return (
    // the main container of the page
    <div className="w-full min-h-100vh flex flex-col items-center">
      <div className="flex flex-col items-center mt-100px xl:mt-50px mb-50px">
        {/*  the title section of the article  */}
        <div className="main-container rtl">
          {/*  the story section */}
          <div className="col-span-6 xl:col-span-9 xl:pl-5">
            {/*  the picture of the article  */}
            <div
              className="w-full px-6 md:px-16 py-4 md:py-10 border-2 border-black mt-14 translate-y-200px opacity-0"
              ref={imageRef}
            >
              <div className="w-full h-150px md:h-310px xl:h-370px 2xl:h-500px relative">
                {data?.featured_image ? (
                  <Image
                    src={data?.featured_image}
                    alt={data?.title || 'book'}
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center"></div>
                )}
              </div>
            </div>
            {/*  the title section of the story  */}
            <div className="mt-14 flex flex-col items-end">
              <div className="w-full flex flex-row">
                <div
                  className="inline  relative p-[1px] box-border translate-y-200px opacity-0"
                  ref={titleRef}
                >
                  {data?.title && (
                    <p
                      className={`font-pashto inline text-26px md:text-52px lg:text-60px`}
                    >
                      {data?.title}
                    </p>
                  )}
                </div>
              </div>
              {data?.collection && (
                <div
                  className="w-full flex flex-row-reverse justify-end rtl font-pashto text-10px md:text-16px lg:text-25px translate-y-200px opacity-0"
                  ref={collRef}
                >
                  {data?.collection}
                </div>
              )}
              <div className="w-full grid grid-cols-9 gap-20px md:gap-30px items-center">
                {/* time */}
                <div
                  className="col-span-9 md:col-span-3  grid grid-cols-2 gap justify-between pl-3 items-end translate-y-200px opacity-0"
                  ref={dateRef}
                >
                  <div className="col-span-1 rtl flex items-center text-right">
                    <b className="font-common-bold text-12px md:text-7px lg:text-12px ml-1">
                      زمان:
                    </b>
                    {data?.time && (
                      <p className="font-common-thin mt-1 md:mt-2 text-12px md:text-7px lg:text-12px">
                        {data?.time}
                      </p>
                    )}
                    <p className="font-common-thin mt-1 md:mt-2 text-12px md:text-7px lg:text-12px">
                      دقیقه
                    </p>
                  </div>
                  <div className="col-span-1 rtl flex text-right items-center">
                    <b className="font-common-bold text-12px md:text-7px lg:text-12px ml-1">
                      تاریخ:
                    </b>
                    {data?.date_shamsi && (
                      <p className="font-common-thin mt-1 md:mt-2 text-12px md:text-7px lg:text-12px">
                        {data?.date_shamsi}
                      </p>
                    )}
                  </div>
                </div>
                {/* genre */}
                <div
                  className="col-span-9 md:col-span-6 grid grid-cols-4 xl:grid-cols-6 gap items-center mt-2 translate-y-200px opacity-0"
                  ref={genreRef}
                >
                  {Array.isArray(data?.categories) &&
                    data?.categories.map((category, index) => {
                      if (index < 6) {
                        return (
                          <div
                            className={`col-span-1 flex justify-start ${
                              index > 3 ? 'hidden xl:flex' : ''
                            }`}
                            key={index}
                          >
                            <Genre title={category.name} />
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
            {/*  the story text  */}
            {data?.content && (
              <div
                className="font-pashto text-10px md:text-12px lg:text-18px rtl mt-7 translate-y-200px opacity-0"
                dangerouslySetInnerHTML={{
                  __html: data?.content,
                }}
                ref={textRef}
              ></div>
            )}
          </div>
          {/* the author section */}
          <div
            className="col-span-6 xl:col-span-3 md:mt-14 flex flex-row xl:flex-col items-start translate-y-200px opacity-0"
            ref={authorRef}
          >
            {/*  it has 7 rows  */}
            <div className="w-1/2 xl:w-full border-2 border-black p-3 md:p-7 lg:p-10">
              <div className="w-full h-150px md:h-320px lg:h-290px xl:h-200px 2xl:h-280px relative">
                {data?.author?.featured_image ? (
                  <Image
                    src={data?.author.featured_image}
                    alt={data?.author?.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                ) : (
                  <div className="h-full w-full flex justify-center items-center"></div>
                )}
              </div>
            </div>
            <div className="flex flex-col items-start mr-4 xl:mr-0 lg:mb-10 xl:mb-0">
              {data?.author?.name && (
                <div className="font-pashto text-25px md:text-50px rtl text-black">
                  {data?.author?.name}
                </div>
              )}
              <div className="flex rtl md:mt-7 text-black">
                <div className="font-common-heavy text-10px md:text-18px">
                  موقعیت:
                </div>
                {data?.author?.location && (
                  <div className="font-pashto text-10px md:text-18px mr-1">
                    {data?.author?.location}
                  </div>
                )}
              </div>
              <div className="flex rtl mt-3 lg:mt-5 xl:mt-3 text-black">
                <div className="font-common-heavy text-10px md:text-18px">
                  وظیفه:
                </div>
                {data?.author?.job && (
                  <div className="font-pashto text-10px md:text-18px mr-1">
                    {data?.author?.job}
                  </div>
                )}
              </div>
              <div className="flex rtl mt-3 lg:mt-5 xl:mt-3 text-black">
                <div className="font-common-heavy text-10px md:text-18px">
                  تعداد آثار:
                </div>
                {data?.author?.total_letters && (
                  <div className="font-common-regular text-10px md:text-18px mr-1">
                    {data?.author?.total_letters}
                  </div>
                )}
              </div>
              <div className="flex rtl mt-3 lg:mt-5 xl:mt-3 text-black">
                <div className="font-common-heavy text-10px md:text-18px">
                  سن:
                </div>
                {data?.author?.age && (
                  <div className="font-common-regular text-10px md:text-18px mr-1">
                    {data?.author?.age}
                  </div>
                )}
              </div>
              <div className="flex mt-1 lg:mt-5 xl:mt-3">
                {data?.author?.facebook && (
                  <Link href={data?.author?.facebook || '#'}>
                    <Image
                      src="/assets/svg/facebook.svg"
                      alt="facebook logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
                {data?.author?.instagram && (
                  <Link href={data?.author?.instagram || '#'}>
                    <Image
                      src="/assets/svg/instagram.svg"
                      alt="instagram logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
                {data?.author?.telegram && (
                  <Link href={data?.author?.telegram || '#'}>
                    <Image
                      src="/assets/svg/telegram.svg"
                      alt="telegram logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
                {data?.author?.youtube && (
                  <Link href={data?.author?.youtube || '#'}>
                    <Image
                      src="/assets/svg/youtube.svg"
                      alt="youtube logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*  the similar articles  */}
        <div className="main-container">
          <div className="col-span-6 xl:col-span-12">
            <SimilarStories data={similarStoryData} />
          </div>
        </div>
        {/* the poems section of the page */}

        <div className="w-full">
          <StoriesPoemSection data={poemsData} />
        </div>

        {/*  the author section  */}
        <div>
          <Authors data={authorData} />
        </div>
      </div>
    </div>
  );
}
