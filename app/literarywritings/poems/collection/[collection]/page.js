'use client';
import Authors from '@/components/Authors/Authors';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SmallAd from '@/components/SmallAd/SmallAd';
import StoryPoemCard from '@/components/StoryPoemCard/StoryPoemCard';
import axios from '@/utils/api';
import { use, useEffect, useState } from 'react';

export default function StoryCollectionPage({ params }) {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const param = use(params);
  const [filterDone, setFilterDone] = useState(false);
  const [typeFilter, setTypeFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/poems/collection/${param.collection}/?poem_type=${typeFilter}&categories=${categoryFilter}`
        );
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, [typeFilter, categoryFilter]);

  return (
    // the main container of the page
    <div className="flex flex-col items-center mt-100px xl:mt-0 mb-50px">
      {/*  filter of the page  */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12">
          <Filter
            type="poem"
            title="انواع شعر"
            setFilter={setTypeFilter}
            setCategoryFilter={setCategoryFilter}
            setFilterDone={setFilterDone}
          />
        </div>
      </div>

      {/* the title of the story collection */}
      <div className="main-container mt-7">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title={data?.collection_name} />
        </div>
      </div>

      <div className="main-container mt-7 pb-14 rtl">
        {filterDone && data?.data?.length === 0 ? (
          <div className="col-span-6 xl:col-span-12 flex justify-center items-center font-common-regular text-20px h-300px">
            هیچ موردی یافت نشد
          </div>
        ) : (
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
        <Authors />
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
