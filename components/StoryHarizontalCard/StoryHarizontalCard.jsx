'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { truncateString } from '@/utils/GeneralFuncions/GeneralFunctions';
import Genre from '../Genre/Genre';

gsap.registerPlugin(ScrollTrigger);

export default function StoryHarizontalCard({ data }) {
  const storyCardRef = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(storyCardRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: storyCardRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);
  return (
    <Link
      href={`/episode/${data?.slug}`}
      className="grid grid-cols-6 xl:grid-cols-9 gap border-b-4 py-20px border-black translate-y-200px opacity-0"
      ref={storyCardRef}
    >
      <div className="relative col-span-2 h-95px md:h-200px xl:h-155px 2xl:h-200px">
        {data?.featured_image ? (
          <Image
            src={data?.featured_image}
            alt={data?.title ? data?.title : 'not found'}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center"></div>
        )}
      </div>
      <div className="col-span-4 xl:col-span-7 gap relative">
        {data?.title && (
          <div className="col-span-4 text-20px md:text-40px font-pashto font-extrabold">
            {data?.title}
          </div>
        )}
        {data?.excerpt && (
          <div className="col-span-4 text-6px md:text-12px font-pashto">
            {truncateString(data?.excerpt, 500)}
          </div>
        )}
        <div className="col-span-4 xl:col-span-7 w-full grid grid-cols-3 xl:grid-cols-10 gap-10px absolute bottom-0">
          <div className="col-span-1 xl:col-span-2">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-6px md:text-12px 2xl:text-14px font-bold">
                نویسنده:
              </p>
              {data?.author && (
                <p className="font-pashto text-6px md:text-12px 2xl:text-14px">
                  {data?.author}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1 xl:col-span-2">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-6px md:text-12px 2xl:text-14px font-bold">
                تاریخ:
              </p>
              {data?.date && (
                <p className="font-pashto text-6px md:text-12px 2xl:text-14px">
                  {data?.date}
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1 xl:col-span-2">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-6px md:text-12px 2xl:text-14px font-bold">
                زمان:
              </p>
              {data?.duration && (
                <p className="font-pashto text-6px md:text-12px 2xl:text-14px">
                  {data?.duration}
                </p>
              )}
              <p className="font-common-thin text-6px md:text-12px 2xl:text-14px">
                دقیقه
              </p>
            </div>
          </div>
          <div className="xl:col-span-4 xl:grid xl:grid-cols-4 hidden">
            {Array.isArray(data?.categories) &&
              data?.categories.map((cate, index) => {
                if (index < 2) {
                  return (
                    <div
                      className="col-span-2"
                      key={index}
                    >
                      <Genre title={cate?.name} />
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </Link>
  );
}
