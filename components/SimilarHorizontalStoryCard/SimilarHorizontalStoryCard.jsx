import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Genre from '../Genre/Genre';

export default function SimilarHorizontalStoryCard({
  data,
  isArticle,
  isStory,
}) {
  return (
    <Link
      href={`/literarywritings/story/${data?.slug}`}
      className="col-span-6 xl:col-span-12 grid grid-cols-6 xl:grid-cols-9 gap border-b-4 py-20px border-black"
    >
      <div className="relative col-span-2 h-95px md:h-200px xl:h-210px 2xl:h-270px">
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
            the image not found
          </div>
        )}
      </div>
      <div className="col-span-4 xl:col-span-7 gap relative">
        <div className="col-span-4 text-16px md:text-30px xl:text-43px font-new-extra-black">
          {data?.title}
        </div>
        <div
          className="col-span-4 text-6px md:text-12px xl:text-14px 2xl:text-20px font-smallText"
          dangerouslySetInnerHTML={{ __html: data?.excerpt }}
        ></div>
        <div className="w-full xl:col-span-7 xl:grid xl:grid-cols-7 xl:gap absolute bottom-0">
          <div className="w-full flex xl:col-span-3 xl:grid xl:grid-cols-3 gap">
            <div className="xl:col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px xl:text-14px">
                  نویسنده:
                </p>
                <p className="font-common-thin text-8px xl:text-14px">
                  {data?.author}
                </p>
              </div>
            </div>
            <div className="xl:col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px xl:text-14px">
                  تاریخ:
                </p>
                <p className="font-common-thin text-8px xl:text-14px">
                  {data?.date}
                </p>
              </div>
            </div>
            <div className="xl:col-span-1">
              <div className="rtl flex text-right">
                <p className="font-common-thin ml-1 text-8px xl:text-14px">
                  زمان:
                </p>
                <p className="font-common-thin text-8px xl:text-14px">
                  {data?.duration}
                </p>
                <p className="font-common-thin text-8px xl:text-14px">دقیقه</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 h-5 hidden xl:block"></div>
          <div className="col-span-2 xl:grid grid-cols-3 gap hidden">
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
