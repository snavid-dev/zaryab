import Link from 'next/link';
import React from 'react';

export default function NewArticle({ data }) {
  return (
    <div className="mt-7">
      <div>
        <p className="rtl font-common-med text-3xl">
          <Link href={`/articles/${data?.slug}`}>{data?.title}</Link>
        </p>
      </div>
      <div className="flex rtl justify-between items-center">
        <div className="rtl flex text-right items-center text-[8px]">
          <b className="font-smallTitle">نویسنده:</b>
          <p className="font-smallText">{data?.author}</p>
        </div>
        <div className="rtl flex text-right text-8px items-center">
          <b className="font-smallTitle">تاریخ:</b>
          <p className="font-smallText">{data?.date_shamsi}</p>
        </div>
        <div className="flex text-8px">
          {data?.categories.map(
            (category, index) =>
              index + 1 < 3 && (
                <p
                  key={index}
                  className={`font-smallText ${index + 1 === 2 ? 'mr-1' : ''}`}
                >
                  {category.name}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
}
