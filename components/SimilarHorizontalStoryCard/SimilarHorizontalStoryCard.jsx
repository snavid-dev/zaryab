import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import Genre from '../Genre/Genre';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { truncateString } from '@/utils/GeneralFuncions/GeneralFunctions';

gsap.registerPlugin(ScrollTrigger);

export default function SimilarHorizontalStoryCard({
  data,
  isArticle,
  isStory,
}) {
  // animation
  const cardRef = useRef(null);

  useGSAP(() => {
    if (data) {
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
  }, [data]);

  return (
    <div
      className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
      ref={cardRef}
    >
      {data?.slug && (
        <Link
          href={`/${isStory ? 'episode' : 'poem'}/${data?.slug}`}
          className="w-full grid grid-cols-6 xl:grid-cols-9 gap border-b-4 py-20px border-black"
        >
          <div className="relative col-span-2 h-95px md:h-200px xl:h-210px 2xl:h-270px">
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
              <div className="col-span-4 text-16px md:text-30px xl:text-43px font-pashto font-extrabold">
                {data?.title}
              </div>
            )}
            {isStory ? (
              <div className="col-span-4 text-6px md:text-12px xl:text-14px 2xl:text-20px font-pashto">
                {data?.excerpt && truncateString(data?.excerpt, 400)}
              </div>
            ) : (
              <div className="font-pashto text-8px md:text-18px lg:text-17px mt-3 text-right">
                {data?.excerpt && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.excerpt.split('\n')[0],
                    }}
                    suppressHydrationWarning
                  ></div>
                )}
                {data?.excerpt && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.excerpt.split('\n')[1],
                    }}
                    suppressHydrationWarning
                  ></div>
                )}
                {data?.excerpt && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.excerpt.split('\n')[2],
                    }}
                    suppressHydrationWarning
                  ></div>
                )}
              </div>
            )}
            <div className="w-full xl:col-span-7 xl:grid xl:grid-cols-7 xl:gap absolute bottom-0">
              <div className="w-full flex xl:col-span-4 xl:grid xl:grid-cols-3 gap font-bold">
                <div className="xl:col-span-1">
                  <div className="rtl flex text-right">
                    <p className="font-common-thin ml-1 text-8px md:text-12px xl:text-14px">
                      نویسنده:
                    </p>
                    {data?.author && (
                      <p className="font-pashto text-8px md:text-12px xl:text-14px">
                        {data?.author}
                      </p>
                    )}
                  </div>
                </div>
                <div className="xl:col-span-1">
                  <div className="rtl flex text-right">
                    <p className="font-common-thin ml-1 text-8px md:text-12px xl:text-14px">
                      تاریخ:
                    </p>
                    {data?.date && (
                      <p className="font-common-thin text-8px md:text-12px xl:text-14px">
                        {data?.date}
                      </p>
                    )}
                  </div>
                </div>
                <div className="xl:col-span-1">
                  <div className="rtl flex text-right">
                    <p className="font-common-thin ml-1 text-8px md:text-12px xl:text-14px">
                      زمان:
                    </p>
                    {data?.duration && (
                      <p className="font-common-thin text-8px md:text-12px xl:text-14px">
                        {data?.duration}
                      </p>
                    )}
                    <p className="font-common-thin text-8px md:text-12px xl:text-14px">
                      دقیقه
                    </p>
                  </div>
                </div>
              </div>

              {isStory ? (
                <div className="col-span-3 xl:grid grid-cols-3 gap hidden md:block md:mt-2">
                  {Array.isArray(data?.categories) &&
                    data?.categories.map(
                      (category, index) =>
                        index + 1 < 4 && (
                          <div
                            className="col-span-1"
                            key={index}
                          >
                            <Genre title={category.name} />
                          </div>
                        )
                    )}
                </div>
              ) : (
                <div className="col-span-3 xl:grid grid-cols-3 gap hidden md:block">
                  {Array.isArray(data?.poem_type) &&
                    data?.poem_type.map(
                      (category, index) =>
                        index + 1 < 4 && (
                          <div
                            className="col-span-1"
                            key={index}
                          >
                            <Genre title={category.name} />
                          </div>
                        )
                    )}
                </div>
              )}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
