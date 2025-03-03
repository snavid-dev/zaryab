'use client';
import React, { useEffect, useState } from 'react';
import Heading1 from '../Heading1/Heading1';
import Genre from '../Genre/Genre';
import Image from 'next/image';
import axios from '@/utils/api';
import Link from 'next/link';

export default function StoryOfDay() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/featured-story');
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="flex justify-center w-full mt-50px">
      <div className="main-container">
        {/* subtitle */}
        <div className="col-span-6 xl:col-span-12">
          <div className="flex flex-row-reverse">
            <Heading1 title="داستان روز" />
          </div>
        </div>
        {/* title and description section */}
        <div className="col-span-6 xl:col-span-12 main-container rtl mt-50px">
          {/* title of the story */}
          <div className="col-span-6 xl:col-span-4">
            <h1 className="flex flex-row xl:flex-col text-50px md:text-94px font-new-black leading-67%">
              <Link href={`/literarywritings/story/${data?.slug}`}>
                {data?.title}
              </Link>
            </h1>
          </div>
          <div className="hidden xl:col-span-1"></div>
          <div className="col-span-6 xl:col-span-7 mt-20px xl:mt-0">
            <p className="font-common rtl text-12px md:text-18px">
              {data?.excerpt}
            </p>
          </div>
          <div className="col-span-6 xl:col-span-12 main-container">
            <div className="hidden xl:block xl:col-span-5"></div>
            <div className="col-span-6  xl:col-span-5 grid grid-cols-3 gap rtl">
              <div className="col-span-1 hidden xl:block"></div>
              <div className="col-span-1 hidden xl:block"></div>
              <div className="col-span-1 hidden xl:block"></div>
              <div className="col-span-1 xl:mt-6">
                <div className="rtl flex justify-center text-right">
                  <p className="font-common-thin ml-1 text-12px md:text-25px xl:text-18px">
                    نویسنده:
                  </p>
                  <p className="font-common-thin text-12px md:text-25px xl:text-18px">
                    {data?.author}
                  </p>
                </div>
              </div>
              <div className="col-span-1 xl:mt-6">
                <div className="rtl flex justify-center text-right">
                  <p className="font-common-thin ml-1 text-12px md:text-25px xl:text-18px">
                    تاریخ:
                  </p>
                  <p className="font-common-thin text-12px md:text-25px xl:text-18px">
                    {data?.date}
                  </p>
                </div>
              </div>
              <div className="col-span-1 xl:mt-6">
                <div className="rtl flex justify-center text-right">
                  <p className="font-common-thin ml-1 text-12px md:text-25px xl:text-18px">
                    زمان:
                  </p>
                  <p className="font-common-thin text-12px md:text-25px xl:text-18px">
                    {data?.duration}{' '}
                  </p>
                  <p className="font-common-thin text-12px md:text-25px xl:text-18px">
                    دقیقه
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 xl:col-span-2 grid grid-cols-4 xl:grid-cols-2 gap">
              {data?.categories.map(
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
          <div className="col-span-6 xl:col-span-12 mt-10px md:mt-0">
            <div
              id="photo"
              className="w-full h-170px md:h-370px xl:h-580px 2xl:h-750px relative"
            >
              {data?.featured_image ? (
                <Image
                  src={data?.featured_image}
                  alt="story of the day image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center">
                  image not found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
