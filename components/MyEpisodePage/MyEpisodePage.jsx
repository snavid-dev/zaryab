'use client';
import Authors from '@/components/Authors/Authors';
import Episode from '@/components/Episode/Episode';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import Pagination from '@/components/Pagination/Pagination';
import SmallAd from '@/components/SmallAd/SmallAd';
import { IoClose } from 'react-icons/io5';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function MyEpisodePage({
  param,
  serverData,
  types,
  categories,
  authorData,
}) {
  const [data, setData] = useState(serverData?.data);
  const [Error, setError] = useState(null);
  const ref = useRef(null);
  const filterRef = useRef(null);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(serverData?.meta?.pages);
  const [filterDone, setFilterDone] = useState(false);
  const [searchItem, setSearchItem] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [searchNumber, setSearchNumber] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (
        typeFilter ||
        categoryFilter ||
        currentPage ||
        searchTitle ||
        searchNumber
      ) {
        try {
          const response = await axios.get(
            `/v1/stories/${param}/?per_page=8&page=${currentPage}&story_type=${typeFilter}&categories=${categoryFilter}&episode_number=${searchNumber}&episode_title=${searchTitle}`
          );

          setData(response.data);
        } catch (err) {
          setError(err.response?.data?.message || err.message);
        }
      }
    };

    fetchData();
  }, [typeFilter, categoryFilter, currentPage, searchTitle, searchNumber]);

  // animation

  useGSAP(() => {
    if (data) {
      gsap.to('#filter', {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
      });

      gsap.to('#title', {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        delay: 0.5,
      });

      gsap.to('#search', {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        delay: 1,
      });
    }
  }, [data]);

  function notOnlyNumbers(str) {
    return !/^\d+$/.test(str);
  }

  const handleSearch = () => {
    if (notOnlyNumbers(searchItem)) {
      setSearchTitle(searchItem);
    } else {
      setSearchNumber(searchItem);
    }
    setFilterDone(true);
  };

  const searchRemove = () => {
    setSearchTitle('');
    setSearchNumber('');
    setSearchItem('');

    setFilterDone(false);
  };
  return (
    <div
      ref={ref}
      className="min-h-100vh"
    >
      {/* main container of the page */}

      <div className="flex flex-col items-center mt-100px xl:mt-0 mb-50px">
        {/*  the filter of the page  */}
        <div className="main-container">
          <div
            className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
            ref={filterRef}
            id="filter"
          >
            <Filter
              type={types}
              categories1={categories}
              title="انواع داستان ها"
              setFilter={setTypeFilter}
              setCategoryFilter={setCategoryFilter}
              setFilterDone={setFilterDone}
            />
          </div>
        </div>
        {/*  title of the page  */}
        <div className="main-container mt-7 rtl">
          <div
            className="col-span-6 xl:col-span-6 translate-y-200px opacity-0"
            id="title"
          >
            {data?.story_title && (
              <Heading1
                title={data?.story_title}
                pashto={true}
              />
            )}
          </div>

          {/*  the search bar of the eposides  */}
          <div className="col-span-6 xl:col-span-6 mt-5">
            <div
              className="w-full flex flex-row-reverse border-b-2 border-black translate-y-200px opacity-0"
              id="search"
            >
              <IoClose
                className="text-xl text-black cursor-pointer mt-2px"
                onClick={searchRemove}
              />
              <input
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className="outline-none w-full font-common-regular rtl px-1 bg-white text-black"
              />
              <IoIosSearch
                className="text-xl text-black cursor-pointer mt-1"
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>

        {/*  list of the   episodes*/}
        <div className="mt-7 main-container rtl">
          {filterDone && data?.data.length === 0 ? (
            <div className="col-span-6 xl:col-span-12 flex justify-center items-center font-common-regular text-20px h-300px">
              هیچ موردی یافت نشد
            </div>
          ) : (
            Array.isArray(data?.data) &&
            data?.data?.map((data, index) => (
              <Episode
                data={data}
                key={index}
              />
            ))
          )}
        </div>

        <div className="mt-7 w-full">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {/*  the authors section  */}

        <div className="mt-14 main-container">
          <Authors data={authorData?.data} />
        </div>
        {/* small ad */}
        {/* <SmallAd /> */}
      </div>
    </div>
  );
}
