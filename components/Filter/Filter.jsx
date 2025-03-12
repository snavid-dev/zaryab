'use client';
import { useEffect, useState } from 'react';
import FilterItem from '../FilterItem/FilterItem';
import axios from '@/utils/api';

export default function Filter({
  title,
  type,
  setFilter,
  setCategoryFilter,
  setFilterDone,
}) {
  const [showFilterBody, setShowFilterBody] = useState(false);
  const [categories, setCategories] = useState(null);
  const [Error, setError] = useState(null);
  const [categoryType, setCategoryType] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/v1/categories');
        let data = response.data;

        // محاسبه نزدیک‌ترین مضرب 6 بزرگتر از طول آرایه
        const nextMultipleOfSix = Math.ceil(data.length / 6) * 6;

        // اضافه کردن استرینگ خالی تا رسیدن به مضرب 6
        while (data.length < nextMultipleOfSix) {
          data.push({ name: '', slug: '#' });
        }

        setCategories(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    const fetchCategoryType = async () => {
      const urlMap = {
        story: '/v1/story_type',
        poem: '/v1/poem_type',
        article: '/v1/article_type',
        review: '/v1/review_type',
        letter: '/v1/letter_type',
        podcast: '/v1/podcast_type',
      };

      const url = urlMap[type];
      if (!url) return;

      try {
        const response = await axios.get(url);
        let data = response.data;

        // محاسبه نزدیک‌ترین مضرب 6 بزرگتر از طول آرایه
        const nextMultipleOfSix = Math.ceil(data.length / 6) * 6;

        // اضافه کردن استرینگ خالی تا رسیدن به مضرب 6
        while (data.length < nextMultipleOfSix) {
          data.push({ name: '', slug: '#' });
        }
        setCategoryType(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    fetchCategories();
    fetchCategoryType();
  }, [type]); // حالا هر بار `type` تغییر کند، دیتا آپدیت می‌شود

  const filterDone = () => {
    setFilter(filteredItems.join(','));
    setCategoryFilter(categoryItems.join(','));
    setFilterDone(true);
  };

  const filterClear = () => {
    setFilteredItems([]);
    setCategoryItems([]);
    setFilter([]);
    setCategoryFilter([]);
    setFilterDone(false);
  };

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
            {categoryType?.map((category, index) => (
              <FilterItem
                key={index}
                data={category}
                filteredItems={filteredItems}
                setFilteredItems={setFilteredItems}
              />
            ))}
          </div>
        </div>
        <div className="w-full border-t-2 border-b-2 border-black mt-1">
          <div className="w-full flex justify-end font-common-heavy text-20px md:text-30px my-5">
            جانر ها
          </div>
          <div className="flex flex-col h-[200px] flex-wrap rtl">
            {categories?.map(
              (data, index) =>
                data?.name && (
                  <FilterItem
                    key={index}
                    data={data}
                    filteredItems={categoryItems}
                    setFilteredItems={setCategoryItems}
                  />
                )
            )}
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between w-2/3 mt-3">
          <button
            onClick={filterDone}
            className="flex justify-center items-center font-common-heavy text-10px md:text-20px xl:text-28px w-1/3 text-white bg-footerBtn py-2
                    border-2 border-footerBtn hover:bg-white transition-all duration-700 hover:text-footerBtn"
          >
            اجرای فیلتر
          </button>
          <button
            onClick={filterClear}
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
