import React, { useState } from 'react';
import SearchCard from '../SearchCard/SearchCard';
import Heading2 from '../Heading2/Heading2';

export default function SearchResult({ title, count, data, type }) {
  const [allResultShow, setAllResultShow] = useState(false);
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
      <div className="main-container rtl">
        {!count == 0 ? (
          data?.map((data, index) => {
            if (allResultShow) {
              return (
                <SearchCard
                  data={data}
                  key={index}
                  type={type}
                />
              );
            } else {
              if (index < 6) {
                return (
                  <SearchCard
                    data={data}
                    key={index}
                    type={type}
                  />
                );
              }
            }
          })
        ) : (
          <div className="col-span-6 xl:col-span-12 flex justify-center items-center text-20px h-300px font-common-regular">
            هیچ نتیجه ای یافت نشد
          </div>
        )}
      </div>

      <div className="main-container mt-30px">
        <div className="col-span-6 xl:col-span-12 rtl">
          {count > 6 && (
            <button
              className="bg-black px-12 py-3 xl:px-16 xl:py-5 font-common-heavy text-18px xl:text-28px text-white"
              onClick={() => setAllResultShow(!allResultShow)}
            >
              {count != 0
                ? `دیدن تمام نتایج ${title}`
                : 'هیچ نتیجه ای یافت نشد'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
