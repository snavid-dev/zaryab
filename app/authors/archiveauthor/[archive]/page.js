'use client';
import Image from 'next/image';
import Link from 'next/link';

import { use, useRef } from 'react';
import { useState, useEffect } from 'react';
import axios from '@/utils/api';
import Heading1 from '@/components/Heading1/Heading1';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import OurAuthorCard from '@/components/OurAuthorCard/OurAuthorCard';
import FullAd from '@/components/FullAd/FullAd';
import SmallAd from '@/components/SmallAd/SmallAd';

export default function AuthorPage({ params }) {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [similarData, setSimilarData] = useState(null);

  const param = use(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/authors-archive/${param.archive}`
        );
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    // the main container of the page
    <div className="flex flex-col items-center mt-130px xl:mt-50px mb-50px">
      {/* the author section */}
      <div className="main-container mt-7 rtl">
        {/*  it has 7 rows  */}
        <div className="col-span-6 md:col-span-3 border-2 border-black p-7">
          <div className="w-full h-290px md:h-300px xl:h-220px 2xl:h-300px relative">
            {data?.featured_image ? (
              <Image
                src={data?.featured_image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                failed to display image!!!
              </div>
            )}
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 xl:col-span-9 flex flex-col justify-end mr-7">
          <div className="font-common-heavy text-50px md:text-60px rtl text-black">
            {data?.title}
          </div>
          <div className="flex rtl mt-7 text-black">
            <div className="font-common-heavy text-20px">موقعیت:</div>
            <div className="font-common-regular text-20px">
              {data?.location}
            </div>
          </div>
          <div className="flex rtl mt-3 text-black">
            <div className="font-common-heavy text-20px">وظیفه:</div>
            <div className="font-common-regular text-20px">{data?.job}</div>
          </div>
          <div className="flex rtl mt-3 text-black">
            <div className="font-common-heavy text-20px">تعداد نوشته ها:</div>
            <div className="font-common-regular text-20px">
              {data?.total_letters}
            </div>
          </div>
          <div className="flex rtl mt-3 text-black">
            <div className="font-common-heavy text-20px">سن:</div>
            <div className="font-common-regular text-20px">{data?.age}</div>
          </div>
        </div>
      </div>
      {/*  introduction section  */}
      <div className="main-container mt-14 rtl">
        {/*  title  */}
        <div className="col-span-6 xl:col-span-12">
          <Heading1 title="معرفی نامه" />
        </div>
        {/*  the text  */}
        <div
          dangerouslySetInnerHTML={{
            __html: data?.content,
          }}
          className="font-common-regular col-span-6 xl:col-span-12  text-justify md:text-right text-20px lg:text-25px xl:text-30px rtl mt-7"
        ></div>
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
