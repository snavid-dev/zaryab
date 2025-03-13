'use client';
import axios from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';

export default function ChampionPopUp() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [data, setData] = useState({});
  const [Error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible && !(Object.entries(data).length === 0)) {
      const timer = setTimeout(() => {
        setShowPopUp(true);
      }, 7000);
      return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts
    }
  }, [isVisible, data]);

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

  const fetchData = async () => {
    try {
      const response = await axios.get('/v1/story-champion/latest');
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div
      className="w-full flex justify-center"
      ref={ref}
    >
      {isVisible && (
        <div
          className={`flex flex-col items-center fixed z-50 w-full md:w-600px xl:w-600px border-4 border-black p-1 bg-white ${
            showPopUp ? 'top-5' : '-top-100%'
          } transition-all duration-1000`}
        >
          <div className="w-full rtl">
            <IoClose
              className="text-30px text-footerBtn cursor-pointer"
              onClick={() => setShowPopUp(false)}
            />
          </div>
          <div className="w-full px-5 flex flex-col items-center">
            <div className="rtl w-full text-footerBtn font-common-heavy text-25px md:text-30px">
              برنده مسابقه داستان نویسی آوای زریاب
            </div>
            <div className="w-full relative h-200px md:h-280px mt-1">
              {data?.featured_image ? (
                <Image
                  src={data?.featured_image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              ) : (
                <div className="w-full  h-full flex justify-center items-center">
                  the champion image not found
                </div>
              )}
            </div>
            <div className="w-full font-new-black text-30px rtl mt-1">
              {data?.story?.title}
            </div>
            <div className="w-full font-common-heavy text-16px text-footerBtn rtl mt-1 flex">
              <div>نویسنده:</div>
              <div className="mr-1">{data?.author?.name}</div>
            </div>
            <div className="w-full rtl font-common-regular text-10px md:text-14px mt-1">
              {data?.story?.excerpt}
            </div>
            <div className="w-full flex flex-row-reverse justify-between mt-3 mb-3">
              <Link
                href={`/literarywritings/story/${data?.story?.slug}`}
                className="flex justify-center items-center font-common-heavy text-18px px-7 py-2 md:px-12 md:text-20px md:py-3 bg-black border-2 border-black text-white"
              >
                خواندن داستان
              </Link>
              <Link
                href={`/authors/${data?.author?.slug}`}
                className="flex justify-center items-center font-common-heavy text-18px px-7 py-2 md:px-12 md:text-20px md:py-3 bg-white border-2 border-footerBtn text-footerBtn"
              >
                درباره نویسنده
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
