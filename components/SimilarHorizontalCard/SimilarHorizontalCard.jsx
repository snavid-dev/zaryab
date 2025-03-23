'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import Genre from '../Genre/Genre';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { truncateString } from '@/utils/GeneralFuncions/GeneralFunctions';

gsap.registerPlugin(ScrollTrigger);

export default function SimilarHorizontalCard({
  data,
  isArticle,
  isStory,
  isVisible,
}) {
  // animation

  const cardRef = useRef(null);

  useGSAP(() => {
    if ((isVisible, data)) {
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [isVisible, data]);

  return (
    <Link
      href={`/${isArticle ? 'articles' : 'review'}/${data?.slug}`}
      className="col-span-6 xl:col-span-12 grid grid-cols-6 xl:grid-cols-9 gap border-b-4 py-20px border-black translate-y-200px opacity-0"
      ref={cardRef}
    >
      <div className="relative col-span-2 h-95px md:h-200px xl:h-210px 2xl:h-270px">
        {data?.image ? (
          <Image
            src={data?.image}
            alt={data?.title}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center"></div>
        )}
      </div>
      <div className="col-span-4 xl:col-span-7 gap relative">
        <div className="col-span-4 text-16px md:text-30px xl:text-43px font-new-extra-black">
          {data?.title}
        </div>
        <div className="col-span-4 text-6px md:text-12px xl:text-14px 2xl:text-20px font-smallText font-bold">
          {truncateString(data?.excerpt, 500)}
        </div>
        <div className="w-full xl:col-span-7 xl:grid xl:grid-cols-7 xl:gap absolute bottom-0">
          <div className="w-full flex md:col-span-3 md:grid md:grid-cols-3 gap-10px font-bold">
            <div className="xl:col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px md:text-12px 2xl:text-14px">
                  نویسنده:
                </p>
                <p className="font-common-thin text-8px md:text-12px 2xl:text-14px">
                  {data?.author}
                </p>
              </div>
            </div>
            <div className="xl:col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px md:text-12px 2xl:text-14px">
                  تاریخ:
                </p>
                <p className="font-common-thin text-8px md:text-12px 2xl:text-14px">
                  {data?.date_shamsi}
                </p>
              </div>
            </div>
            <div className="xl:col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px md:text-12px 2xl:text-14px">
                  زمان:
                </p>
                <p className="font-common-thin text-8px md:text-12px 2xl:text-14px">
                  {data?.time}
                </p>
                <p className="font-common-thin text-8px md:text-12px 2xl:text-14px">
                  دقیقه
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-5 hidden xl:block"></div>
          <div className="col-span-3 md:grid grid-cols-3 md:mt-2 xl:mt-0 gap-10px hidden">
            {data?.categories.map(
              (category, index) =>
                index + 1 < 4 && (
                  <div
                    className="col-span-1 flex justify-start"
                    key={index}
                  >
                    <Genre title={category.name} />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
