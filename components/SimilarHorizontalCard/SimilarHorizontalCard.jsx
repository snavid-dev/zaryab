import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Genre from '../Genre/Genre';

export default function SimilarHorizontalCard({ data }) {
  return (
    <Link
      href={`/articles/${data?.slug}`}
      className="col-span-6 xl:col-span-12 grid grid-cols-6 xl:grid-cols-9 gap border-b-4 py-20px border-black"
    >
      <div className="relative col-span-2 h-95px md:h-200px xl:h-210px 2xl:h-270px">
        {data?.image ? (
          <Image
            src={data?.image}
            alt="story image"
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            the article image not found
          </div>
        )}
      </div>
      <div className="col-span-4 xl:col-span-7 gap relative">
        <div className="col-span-4 text-27px md:text-59px font-new-extra-black">
          {data?.title}
        </div>
        <div
          className="col-span-4 text-6px md:text-12px font-smallText"
          dangerouslySetInnerHTML={{ __html: data?.excerpt }}
        ></div>
        <div className="col-span-7 grid grid-cols-7 gap absolute bottom-0">
          <div className="col-span-3 grid grid-cols-3 gap">
            <div className="col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px xl:text-14px">
                  نویسنده:
                </p>
                <p className="font-common-thin text-8px xl:text-14px">
                  {data?.author}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px xl:text-14px">
                  تاریخ:
                </p>
                <p className="font-common-thin text-8px xl:text-14px">
                  {data?.date_shamsi}
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px xl:text-14px">
                  زمان:
                </p>
                <p className="font-common-thin text-8px xl:text-14px">
                  {data?.time}
                </p>
                <p className="font-common-thin text-8px xl:text-14px">دقیقه</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-5"></div>
          <div className="col-span-2 grid grid-cols-3 gap">
            {data?.categories.map(
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
        </div>
      </div>
    </Link>
  );
}
