'use client';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

export default function PodcastCard({ data }) {
  const ref = useRef(null);

  return (
    // it has two rows
    <div className="col-span-6 md:col-span-3 xl:col-span-4 mt-7 md:mt-0 border-2 border-black p-5">
      {/*  it has two rows  */}
      <Link
        className="w-full"
        href={`/podcasts/${data?.slug}` || '/podcasts/mypodcast'}
      >
        <div className="w-full flex flex-col items-end">
          {/*  it has two rows  */}
          <div className="w-full h-300px md:h-320px xl:h-330px 2xl:h-450px relative overflow-hidden">
            <Image
              src={data?.featured_image || '/assets/img/podcastPic.png'}
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute
                    hover:scale-110 transition-all duration-300"
            />
          </div>
          <div>
            <h3 className="font-common-heavy rtl text-30px md:text-36px mt-3">
              {data?.title || 'راه زنده گی'}
            </h3>
          </div>
        </div>
        <div>
          {/*  it has tow rows  */}
          <div className="mt-3">
            <div className="rtl flex">
              <p className="font-common-heavy text-xl text-20px ">میزبان:</p>
              <p className="font-common-regular text-xl text-20px ">
                {data?.meta.host_name || 'باسط یزدانی'}
              </p>
            </div>
            <div className="rtl flex">
              <p className="font-common-heavy text-xl text-20px ">مهمان:</p>
              <p className="font-common-regular text-xl text-20px ">
                {data?.meta.guest_name || 'باسط یزدانی'}
              </p>
            </div>
          </div>
          <div className="rtl flex mt-3">
            <div className="flex ml-4">
              <p className="font-common-heavy text-12px md:text-18px">تاریخ:</p>
              <p className="font-common-regular text-12px md:text-18px">
                {data?.meta.podcast_date_shamsi || '۱۴۰۳.۰۸.۰۹'}
              </p>
            </div>
            <div className="flex">
              <p className="font-common-heavy text-12px md:text-18px">طول:</p>
              <p className="font-common-regular text-12px md:text-18px">
                <span className="font-common-heavy text-12px md:text-18px">
                  {data?.meta.podcast_duration || '40'}
                </span>
                دقیقه
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
