'use client';
import Authors from '@/components/Authors/Authors';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SmallAd from '@/components/SmallAd/SmallAd';
import StoryPoemCard from '@/components/StoryPoemCard/StoryPoemCard';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export default function MyPoemCollection({
  param,
  serverData,
  authorData,
  types,
  categories,
}) {
  const [data, setData] = useState(serverData);
  const [Error, setError] = useState(null);
  const [filterDone, setFilterDone] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (typeFilter || categoryFilter) {
        try {
          const response = await axios.get(
            `/v1/poems/collection/${param}/?poem_type=${typeFilter}&categories=${categoryFilter}`
          );
          setData(response.data);
        } catch (err) {
          setError(err.response?.data?.message || err.message);
        }
      }
    };

    fetchData();
  }, [typeFilter, categoryFilter]);

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
    }
  }, [data]);
  return (
    // the main container of the page
    <div className="w-full min-h-100vh">
      <div className="flex flex-col items-center mt-100px xl:mt-0 mb-50px">
        {/*  filter of the page  */}
        <div className="main-container">
          <div
            className="col-span-6 xl:col-span-12 translate-y-200px opacity-0"
            id="filter"
          >
            <Filter
              type={types}
              categories1={categories}
              title="انواع شعر"
              setFilter={setTypeFilter}
              setCategoryFilter={setCategoryFilter}
              setFilterDone={setFilterDone}
            />
          </div>
        </div>

        {/* the title of the story collection */}
        <div className="main-container mt-7">
          <div
            className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
            id="title"
          >
            {data?.collection_name && (
              <Heading1
                title={data?.collection_name}
                pashto={true}
              />
            )}
          </div>
        </div>

        <div className="main-container mt-7 pb-14 rtl">
          {filterDone && data?.data.length === 0 ? (
            <div className="col-span-6 xl:col-span-12 flex justify-center items-center font-common-regular text-20px h-300px">
              هیچ موردی یافت نشد
            </div>
          ) : (
            Array.isArray(data?.data) &&
            data?.data?.map((data, index) => (
              <StoryPoemCard
                isStory={false}
                key={index}
                data={data}
              />
            ))
          )}
        </div>

        {/* autors section */}
        <div>
          <Authors data={authorData} />
        </div>
        {/* small ad */}
        {/* <SmallAd /> */}
      </div>
    </div>
  );
}
