'use client';
import Link from 'next/link';
import Image from 'next/image';

import { useRef, useState, useEffect } from 'react';

// import axios from '@/utils/api';

import Genre from '@/components/Genre/Genre';
import Heading1 from '@/components/Heading1/Heading1';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import Authors from '@/components/Authors/Authors';
import FullAd from '@/components/FullAd/FullAd';
import SmallAd from '@/components/SmallAd/SmallAd';
import axios from '@/utils/api';
import SimilarArticle from '@/components/SimilarArticle/SimilarArticle';
import StoriesPoemSection from '@/components/StoriesPoemSection/StoriesPoemSection';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MyArticlePage({
  data,
  similarArticlesData,
  poemData,
  authorData,
}) {
  // animation

  const imageRef = useRef(null);
  const titleRef = useRef(null);
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
    <div className="w-full min-h-100vh">
      <div className="flex flex-col items-center mt-130px xl:mt-50px mb-50px">
        {/* article picture */}
        <div className="main-container">
          <div
            className="col-span-6 xl:col-span-12 relative h-190px md:h-410px xl:h-650px 2xl:h-840px translate-y-200px opacity-0"
            ref={imageRef}
          >
            {data?.big_image ? (
              <Image
                src={data?.big_image}
                alt={data?.title ? data?.title : 'not found'}
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center"></div>
            )}
          </div>
        </div>
        {/*  it has two columns  */}
        <div className="main-container rtl">
          {/*  the story section */}
          <div className="col-span-6 xl:col-span-9 pl-5">
            {/*  the title section of the story  */}
            <div className="mt-14 flex flex-col items-end">
              {data?.title && (
                <div
                  className="w-full font-pashto text-50px md:text-60px lg:text-94px rtl translate-y-200px opacity-0"
                  ref={titleRef}
                >
                  {data?.title}
                </div>
              )}
              <div
                className="w-full grid grid-cols-6 md:grid-cols-9 items-center gap translate-y-200px opacity-0"
                ref={dateRef}
              >
                {/* time */}
                <div className="col-span-6 md:col-span-2 xl:col-span-2 pl-3 items-end grid grid-cols-2 gap">
                  <div className="rtl col-span-1 flex text-right">
                    <b className="font-common-bold text-12px md:text-7px lg:text-12px mt-2 md:mt-1 ml-1 lg:mt-0">
                      زمان:
                    </b>
                    {data?.time && (
                      <p className="font-common-thin mt-10px md:mt-1 text-12px md:text-7px lg:text-12px">
                        {data?.time}
                      </p>
                    )}
                    <p className="font-common-thin mt-10px md:mt-1 text-12px md:text-7px lg:text-12px">
                      دقیقه
                    </p>
                  </div>
                  <div className="rtl col-span-1 flex text-right">
                    <b className="font-common-bold text-12px md:text-7px lg:text-12px mt-2 md:mt-1 ml-1 lg:mt-0">
                      تاریخ:
                    </b>
                    {data?.date_shamsi && (
                      <p className="font-common-thin mt-10px md:mt-1 text-12px md:text-7px lg:text-12px">
                        {data?.date_shamsi}
                      </p>
                    )}
                  </div>
                </div>
                {/* genre */}
                <div
                  className="col-span-7 md:col-span-7 grid grid-cols-4 md:grid-cols-6 translate-y-200px opacity-0"
                  ref={genreRef}
                >
                  {Array.isArray(data?.categories) &&
                    data?.categories.map((category, index) => {
                      if (index < 6) {
                        return (
                          <div
                            className={`cols-span-1 flex justify-start ${
                              index > 3 ? 'hidden md:flex' : ''
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
                dangerouslySetInnerHTML={{
                  __html: data?.content,
                }}
                className="font-pashto text-10px md:text-18px rtl mt-7 translate-y-200px opacity-0"
                ref={textRef}
              ></div>
            )}
          </div>
          {/* the author section */}
          <div
            className="col-span-6 xl:col-span-3 mt-14 xl:mt-52 md:items-center flex xl:flex-col items-end translate-y-200px opacity-0"
            ref={authorRef}
          >
            {/*  it has 7 rows  */}
            <div className="w-1/2 xl:w-full border-2 border-black p-3 md:p-7">
              <div className="w-full h-150px md:h-310px xl:h-220px 2xl:h-300px relative">
                {data?.author?.featured_image ? (
                  <Image
                    src={data?.author?.featured_image}
                    alt={data?.author?.name ? data?.author?.name : 'not found'}
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="w-1/2 xl:w-full flex flex-col mr-7 xl:mr-0 rtl">
              {data?.author?.name && (
                <div className="font-pashto text-25px md:text-50px rtl mt-7 md:mt-0 xl:mt-7 text-black">
                  {data?.author?.name}
                </div>
              )}
              <div className="flex rtl md:mt-7 text-black">
                <div className="font-common-heavy text-10px md:text-18px ml-1">
                  موقعیت:
                </div>
                {data?.author?.location && (
                  <div className="font-pashto text-10px md:text-18px">
                    {data?.author?.location}
                  </div>
                )}
              </div>
              <div className="flex rtl mt-3 text-black">
                <div className="font-common-heavy text-10px md:text-18px ml-1">
                  وظیفه:
                </div>
                {data?.author?.job && (
                  <div className="font-pashto text-10px md:text-18px">
                    {data?.author?.job}
                  </div>
                )}
              </div>
              <div className="flex rtl mt-3 text-black">
                <div className="font-common-heavy text-10px md:text-18px ml-1">
                  تعداد آثار:
                </div>
                {data?.author?.total_letters && (
                  <div className="font-common-regular text-10px md:text-18px">
                    {data?.author?.total_letters}
                  </div>
                )}
              </div>
              <div className="flex rtl mt-3 text-black">
                <div className="font-common-heavy text-10px md:text-18px ml-1">
                  سن:
                </div>
                {data?.author?.age && (
                  <div className="font-common-regular text-10px md:text-18px">
                    {data?.author?.age}
                  </div>
                )}
              </div>
              <div className="flex md:mt-3">
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
        {/* full ad */}
        {/* <FullAd /> */}
        {/*  the similar stories  */}
        <div className="w-full flex justify-end">
          <div className="w-full">
            <SimilarArticle data={similarArticlesData} />
          </div>
        </div>
        {/* full ad */}
        {/* <FullAd /> */}
        {/* the story section of the page */}
        <div>
          <StoriesPoemSection data={poemData?.data} />
        </div>
        {/* small ad */}
        {/* <SmallAd /> */}
        {/*  the author section  */}
        <div>
          <Authors data={authorData?.data} />
        </div>
        {/* full ad */}
        {/* <FullAd /> */}
      </div>
    </div>
  );
}
