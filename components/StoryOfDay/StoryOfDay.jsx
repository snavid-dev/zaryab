'use client';
import React, { useEffect, useRef, useState } from 'react';
import Heading1 from '../Heading1/Heading1';
import Genre from '../Genre/Genre';
import Image from 'next/image';
import axios from '@/utils/api';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function StoryOfDay() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);
  // use effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          fetchData();
          setHasFetched(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasFetched]);
  // fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get('/v1/featured-story');
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };
  // animation because it is the first component of the page does not need scroll animation

  useGSAP(() => {
    if (isVisible && data) {
      gsap.to('#title', {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
      });

      gsap.to('#storyTitle', {
        y: 0,
        opacity: 1,
        delay: 0.5,
        ease: 'power2.out',
      });

      gsap.to('#storyExcerpt', {
        y: 0,
        opacity: 1,
        delay: 1,
        ease: 'power2.out',
      });

      gsap.to('#storyAuthor', {
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: 'power2.out',
      });

      gsap.to('#storyGenre', {
        y: 0,
        opacity: 1,
        delay: 2,
        ease: 'power2.out',
      });

      gsap.to('#storyPic', {
        y: 0,
        opacity: 1,
        delay: 2.5,
        ease: 'power2.out',
      });
    }
  }, [isVisible, data]);

  return (
    <section
      className="flex justify-center w-full mt-50px"
      ref={ref}
    >
      {isVisible && (
        <div className="flex justify-center w-full">
          <div className="main-container">
            {/* subtitle */}
            <div
              className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
              id="title"
            >
              <div className="flex flex-row-reverse">
                <Heading1 title="داستان روز" />
              </div>
            </div>
            {/* title and description section */}
            <div className="col-span-6 xl:col-span-12 main-container rtl mt-50px">
              {/* title of the story */}
              <div
                className="col-span-6 xl:col-span-5 translate-y-200px opacity-0"
                id="storyTitle"
              >
                <h1 className="flex flex-row xl:flex-col text-50px md:text-94px 2xl:text-[120px] font-new-black leading-67%">
                  {data?.title && (
                    <Link
                      href={`/episode/${data?.slug}`}
                      className="xl:leading-[140px] w-[80%]"
                    >
                      {data?.title}
                    </Link>
                  )}
                </h1>
              </div>
              <div
                className="col-span-6 xl:col-span-7 mt-20px xl:mt-0 placeholder:translate-y-200px opacity-0"
                id="storyExcerpt"
              >
                {data?.excerpt && (
                  <p className="font-common rtl text-12px md:text-18px">
                    {data?.excerpt}
                  </p>
                )}
              </div>
              <div className="col-span-6 xl:col-span-12 main-container">
                <div className="hidden xl:block xl:col-span-5"></div>
                <div
                  className="col-span-6  xl:col-span-5 grid grid-cols-3 gap-10px rtl translate-y-200px opacity-0"
                  id="storyAuthor"
                >
                  <div className="col-span-1 hidden xl:block"></div>
                  <div className="col-span-1 hidden xl:block"></div>
                  <div className="col-span-1 hidden xl:block"></div>
                  <div className="col-span-1 xl:mt-6">
                    <div className="rtl flex justify-center text-right">
                      <p className="font-common-thin ml-1 text-12px md:text-18px xl:text-14px font-bold">
                        نویسنده:
                      </p>
                      {data?.author && (
                        <p className="font-common-thin text-12px md:text-18px xl:text-14px">
                          {data?.author}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-span-1 xl:mt-6">
                    <div className="rtl flex justify-center text-right">
                      <p className="font-common-thin ml-1 text-12px md:text-18px xl:text-14px font-bold">
                        تاریخ:
                      </p>
                      {data?.date && (
                        <p className="font-common-thin text-12px md:text-18px xl:text-14px">
                          {data?.date}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-span-1 xl:mt-6">
                    <div className="rtl flex justify-center text-right">
                      <p className="font-common-thin ml-1 text-12px md:text-18px xl:text-14px font-bold">
                        زمان:
                      </p>
                      {data?.duration && (
                        <p className="font-common-thin text-12px md:text-18px xl:text-14px">
                          {data?.duration}{' '}
                        </p>
                      )}
                      <p className="font-common-thin text-12px md:text-18px xl:text-14px">
                        دقیقه
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-6 xl:col-span-2 grid grid-cols-4 xl:grid-cols-2 gap translate-y-200px opacity-0"
                  id="storyGenre"
                >
                  {Array.isArray(data?.categories) &&
                    data?.categories.map(
                      (category, index) =>
                        index + 1 < 5 && (
                          <div
                            className="col-span-1 flex justify-center"
                            key={index}
                          >
                            <Genre title={category.name} />
                          </div>
                        )
                    )}
                </div>
              </div>
              <div
                className="col-span-6 xl:col-span-12 mt-10px md:mt-0 translate-y-200px opacity-0"
                id="storyPic"
              >
                <div
                  id="photo"
                  className="w-full h-170px md:h-370px xl:h-580px 2xl:h-750px relative"
                >
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
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
