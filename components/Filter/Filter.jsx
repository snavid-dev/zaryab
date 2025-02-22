'use client';
import { useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';

export default function Filter({ items, genre, title }) {
  const [showFilterBody, setShowFilterBody] = useState(false);
  const itemsfilled =
    items.length > 16
      ? [...items, ...Array(30 - items.length).fill('')]
      : [...items, ...Array(15 - items.length).fill('')];
  if (genre.length !== 0) {
    const itemsfilled2 = [...genre, ...Array(30 - genre.length).fill('')];
  }
  return (
    // the filter main container
    <div>
      {/*  the button of filter  */}
      <div
        className="w-full flex flex-row-reverse mt-3 border-b-2 border-black pb-2 justify-between items-center cursor-pointer"
        onClick={() => setShowFilterBody(!showFilterBody)}
      >
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 1H1L9.36364 11.4348V25L15.6364 20.8261V11.4348L24 1Z"
            stroke="#201F1F"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>

        <svg
          width="23"
          height="14"
          viewBox="0 0 23 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 1L11.5 12L1 1"
            stroke="#818594"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      {/*  the filter body  */}
      <div
        className={`px-3 py-3 mt-3 flex flex-col items-end 
            ${
              showFilterBody ? 'h-full block' : 'h-0 hidden'
            } transition-all duration-700`}
      >
        <div className="w-full border-t-2 border-b-2 border-black mt-1">
          <div className="w-full flex justify-end font-common-heavy text-20px md:text-30px my-5">
            {title}
          </div>
          <div className="flex flex-col h-[200px] flex-wrap rtl">
            {itemsfilled?.map((item, index) => (
              <FilterItem
                key={index}
                title={item}
                isLow={items.length < 16}
              />
            ))}
          </div>
        </div>
        <div className="w-full border-t-2 border-b-2 border-black mt-1">
          {genre.length !== 0 ? (
            <>
              <div className="w-full flex justify-end font-common-heavy text-20px md:text-30px my-5">
                جانر ها
              </div>
              <div className="flex flex-col h-[200px] flex-wrap rtl">
                {itemsfilled2?.map((item, index) => (
                  <FilterItem
                    key={index}
                    title={item}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>
        <div className="flex flex-row-reverse justify-between w-2/3 mt-3">
          <button
            className="flex justify-center items-center font-common-heavy text-10px md:text-20px xl:text-28px w-1/3 text-white bg-footerBtn py-2
                    border-2 border-footerBtn hover:bg-white transition-all duration-700 hover:text-footerBtn"
          >
            اجرای فیلتر
          </button>
          <button
            className="flex justify-center items-center font-common-heavy text-10px md:text-20px xl:text-28px w-1/2 text-white bg-black py-2
                    border-2 border-black hover:bg-white transition-all duration-700 hover:text-black"
          >
            پاک کردن همه فیلتر ها
          </button>
        </div>
      </div>
    </div>
  );
}
