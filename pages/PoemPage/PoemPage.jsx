'use client';
import Link from 'next/link';
import Image from 'next/image';

import { useRef, useState, useEffect } from 'react';

import axios from '@/utils/api';

import Genre from '@/components/Genre/Genre';
import Heading1 from '@/components/Heading1/Heading1';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import StoryPoemCard from '@/components/StoryPoemCard/StoryPoemCard';
import Authors from '@/components/Authors/Authors';
import SimilarPoems from '@/components/SimilarPoems/SimilarPoems';
import FullAd from '@/components/FullAd/FullAd';
import SmallAd from '@/components/SmallAd/SmallAd';
import PoemsStorySection from '@/components/PoemsStorySection/PoemsStorySection';

export default function PoemPage({ param }) {
  // fetch data
  // fetch data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/v1/poems/${param}`);
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    // the main container of the page
    <div className="flex flex-col items-center mt-100px xl:mt-0 mb-50px">
      {/*  it has two columns  */}
      <div className="main-container rtl">
        {/*  the story section */}
        <div className="col-span-6 xl:col-span-9 pl-5">
          {/*  the title section of the story  */}
          <div className="mt-14 flex flex-col items-end">
            <div className="w-full font-new-black text-50px md:text-60px lg:text-94px rtl">
              {data?.title}
            </div>
            <div className="w-full rtl font-common-heavy text-10px md:text-16px lg:text-25px xl:mt-14 flex">
              <div className="ml-1">از مجموعه</div>
              {data?.poem_collection.map((coll, index) => (
                <Link
                  className="ml-3"
                  href={`/literarywritings/poems/collection/${coll.slug}`}
                  key={index}
                >
                  {coll.name}
                </Link>
              ))}
            </div>
            <div className="w-full grid grid-cols-6 xl:grid-cols-9 items-center gap">
              {/* time */}
              <div className="col-span-2 pl-3 items-end grid grid-cols-2 gap">
                <div className="rtl col-span-1 flex text-right">
                  <b className="font-common-bold text-6px md:text-7px lg:text-12px mt-2 md:mt-1 ml-1 lg:mt-0">
                    زمان:
                  </b>
                  <p className="font-common-thin mt-10px md:mt-1 text-6px md:text-7px lg:text-12px">
                    {data?.time}
                  </p>
                  <p className="font-common-thin mt-10px md:mt-1 text-6px md:text-7px lg:text-12px">
                    دقیقه
                  </p>
                </div>
                <div className="rtl col-span-1 flex text-right">
                  <b className="font-common-bold text-6px md:text-7px lg:text-12px mt-2 md:mt-1 ml-1 lg:mt-0">
                    تاریخ:
                  </b>
                  <p className="font-common-thin mt-10px md:mt-1 text-6px md:text-7px lg:text-12px">
                    {data?.date}
                  </p>
                </div>
              </div>
              {/* genre */}
              <div className="col-span-7 grid grid-cols-6">
                {data?.poem_type.map((poem, index) => (
                  <div
                    className="cols-span-1"
                    key={index}
                  >
                    <Genre title={poem.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  the story text  */}
          <div
            dangerouslySetInnerHTML={{
              __html: data?.content,
            }}
            className="font-common-lg text-10px md:text-18px rtl mt-7"
          ></div>
        </div>
        {/* the author section */}
        <div className="col-span-6 xl:col-span-3 mt-14 xl:mt-64 md:items-center xl:flex-col items-end">
          {/*  it has 7 rows  */}
          <div className="w-1/2 xl:w-full border-2 border-black p-3 md:p-7">
            <div className="w-full h-150px md:h-310px xl:h-220px 2xl:h-300px relative">
              {data?.author?.featured_image ? (
                <Image
                  src={data?.author?.featured_image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              ) : (
                <div>failed to dispaly image</div>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col mr-7 xl:mr-0 rtl">
            <div className="font-common-heavy text-25px md:text-50px rtl mt-7 md:mt-0 xl:mt-7 text-black">
              {data?.author?.name}
            </div>
            <div className="flex rtl md:mt-7 text-black">
              <div className="font-common-heavy text-10px md:text-18px ml-1">
                موقعیت:
              </div>
              <div className="font-common-regular text-10px md:text-18px">
                {data?.author?.location}
              </div>
            </div>
            <div className="flex rtl mt-3 text-black">
              <div className="font-common-heavy text-10px md:text-18px ml-1">
                وظیفه:
              </div>
              <div className="font-common-regular text-10px md:text-18px">
                {data?.author?.job}
              </div>
            </div>
            <div className="flex rtl mt-3 text-black">
              <div className="font-common-heavy text-10px md:text-18px ml-1">
                تعداد نوشته ها:
              </div>
              <div className="font-common-regular text-10px md:text-18px">
                {data?.author?.total_letters}
              </div>
            </div>
            <div className="flex rtl mt-3 text-black">
              <div className="font-common-heavy text-10px md:text-18px ml-1">
                سن:
              </div>
              <div className="font-common-regular text-10px md:text-18px">
                {data?.author?.age}
              </div>
            </div>
            <div className="flex md:mt-3">
              <Link href={data?.author?.facebook_link || '#'}>
                <Image
                  src="/assets/svg/facebook.svg"
                  alt="facebook logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={data?.author?.instagram_link || '#'}>
                <Image
                  src="/assets/svg/instagram.svg"
                  alt="instagram logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={data?.author?.telegram_link || '#'}>
                <Image
                  src="/assets/svg/telegram.svg"
                  alt="telegram logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href={data?.author?.youtube_link || '#'}>
                <Image
                  src="/assets/svg/youtube.svg"
                  alt="youtube logo"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* full ad */}
      {/* <FullAd /> */}
      {/*  the similar stories  */}
      <div className="w-full flex justify-end">
        <div className="w-full">
          <SimilarPoems slug={param} />
        </div>
      </div>
      {/* full ad */}
      {/* <FullAd /> */}
      {/* the story section of the page */}
      <div>
        <div className="main-container mt-14 rtl">
          <div className="col-span-6 xl:col-span-6">
            <Heading1 title="داستان ها" />
          </div>
          <div className="col-span-6 xl-col-span-6 flex justify-start md:justify-end">
            <ArrowLink
              title="همه داستان ها"
              path="/literarywritings"
            />
          </div>
        </div>
        <PoemsStorySection />
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
      {/*  the author section  */}
      <div>
        <Authors />
      </div>
      {/* full ad */}
      {/* <FullAd /> */}
    </div>
  );
}
