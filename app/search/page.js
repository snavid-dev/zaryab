'use client';
import Filter from '@/components/Filter/Filter';
import Heading1 from '@/components/Heading1/Heading1';
import SearchResult from '@/components/SearchResult/SearchResult';
import axios from '@/utils/api';
import React, { use, useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function SearchPage({ searchParams }) {
  const [searchItem, setSearchItem] = useState('');
  const [searchKeyWord, setSearchKeyWord] = useState(null);
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [searchDone, setSearchDone] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [filterDone, setFilterDone] = useState(false);
  const [filter, setFilter] = useState(''); // it is useless to prevent error

  const param = use(searchParams);
  const searchCategory = param.category || '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `v1/global-search?keyword=${searchKeyWord}&categories=${
            categoryFilter
              ? categoryFilter
              : searchCategory
              ? searchCategory
              : ''
          }`
        );
        if (searchCategory) {
          setFilterDone(true);
        }
        setData(response.data);
      } catch (error) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, [searchKeyWord, categoryFilter, searchCategory]);
  console.log(data, 'data');

  const handleSearch = () => {
    if (searchItem.length > 1) {
      if (!searchDone) {
        setSearchKeyWord(searchItem);
        setSearchDone(true);
      } else {
        setSearchDone(false);
        setSearchKeyWord(searchItem);
        setSearchDone(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-150px xl:mt-50px mb-50px min-h-100vh">
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12">
          <Filter
            title="همه"
            type="search"
            setCategoryFilter={setCategoryFilter}
            setFilterDone={setFilterDone}
            setFilter={setFilter}
            setHasFetched={false}
          />
        </div>
      </div>
      <div className="main-container mt-50px">
        <div className="col-span-6 xl:col-span-12 flex border-b-4 border-black">
          <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            className="w-full rtl text-20px font-common-regular px-2 py-3 outline-none bg-white"
          />
          <IoIosSearch
            className="text-50px cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>

      {(searchDone || filterDone) && (
        <div className="w-full flex flex-col items-center transition-all duration-700">
          <div className="main-container mt-30px">
            <div className="col-span-6 xl:col-span-12 rtl">
              <Heading1 title="نتایج جستجو" />
            </div>
          </div>

          <SearchResult
            title="داستان ها"
            count={data?.stories?.count}
            data={data?.stories?.posts}
            type="story"
          />
          <SearchResult
            title="اشعار"
            count={data?.poem?.count}
            data={data?.poem?.posts}
            type="poem"
          />
          <SearchResult
            title="مقاله ها"
            count={data?.articles?.count}
            data={data?.articles?.posts}
            type="article"
          />
          <SearchResult
            title="نقد و نظر ها"
            count={data?.review?.count}
            data={data?.review?.posts}
            type="review"
          />
          <SearchResult
            title="کتاب های صوتی"
            count={data?.podcast?.count}
            data={data?.podcast?.posts}
            type="podcast"
          />
          <SearchResult
            title="مجله ها"
            count={data?.letters?.count}
            data={data?.letters?.posts}
            type="letter"
          />
        </div>
      )}
    </div>
  );
}
