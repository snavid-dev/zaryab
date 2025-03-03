import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function StoryHarizontalCard({ data }) {
  return (
    <Link
      href={`/literarywritings/story/${data?.slug}`}
      className="grid grid-cols-6 xl:grid-cols-9 gap border-b-4 py-20px border-black"
    >
      <div className="relative col-span-2 h-95px md:h-200px xl:h-155px 2xl:h-200px">
        {data?.featured_image ? (
          <Image
            src={data?.featured_image}
            alt="story image"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            story image
          </div>
        )}
      </div>
      <div className="col-span-4 xl:col-span-7 gap relative">
        <div className="col-span-4 text-27px md:text-59px font-new-extra-black">
          {data?.title}
        </div>
        <div className="col-span-4 text-6px md:text-12px font-smallText">
          {data?.excerpt}
        </div>
        <div className="col-span-4 grid grid-cols-3 gap absolute bottom-0">
          <div className="col-span-1">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-8px xl:text-14px font-bold">
                نویسنده:
              </p>
              <p className="font-common-thin text-8px xl:text-14px">
                {data?.author}
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-8px xl:text-14px font-bold">
                تاریخ:
              </p>
              <p className="font-common-thin text-8px xl:text-14px">
                {data?.date}
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-8px xl:text-14px font-bold">
                زمان:
              </p>
              <p className="font-common-thin text-8px xl:text-14px">
                {data?.duration}
              </p>
              <p className="font-common-thin text-8px xl:text-14px">دقیقه</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
