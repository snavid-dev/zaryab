import React from 'react';
import SearchCard from '../SearchCard/SearchCard';
import Heading2 from '../Heading2/Heading2';

export default function SearchResult({ title, count }) {
  return (
    <div className="flex flex-col items-center mt-30px">
      <div className="main-container rtl">
        <div className="col-span-5 xl:col-span-11 font-common-regular text-50px">
          {title}
        </div>
        <div className="col-span-1 ltr font-common-regular text-50px">
          {count}
        </div>
      </div>
      <div className="main-container">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </div>

      <div className="main-container mt-30px">
        <div className="col-span-6 xl:col-span-12 rtl">
          <button className="bg-black px-12 py-3 xl:px-16 xl:py-5 font-common-heavy text-18px xl:text-28px text-white">
            {count != 0 ? `دیدن تمام نتایج ${title}` : 'هیچ نتیجه ای یافت نشد'}
          </button>
        </div>
      </div>
    </div>
  );
}
