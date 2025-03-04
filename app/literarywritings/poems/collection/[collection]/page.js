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
  const [Error, ErrorData] = useState(null);
  const param = use(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/poems/collection/${param.collection}`
        );
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    // the main container of the page
    <div className="flex flex-col items-center mt-150px xl:mt-50px mb-150px">
      {/*  filter of the page  */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12">
          <Filter
            type="poem"
            title="انواع شعر"
          />
        </div>
      </div>

      {/* the title of the story collection */}
      <div className="main-container mt-7">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title={param.collection} />
        </div>
      </div>

      <div className="main-container mt-7 pb-14">
        {data?.map((data, index) => (
          <StoryPoemCard
            isStory={false}
            key={index}
            data={data}
          />
        ))}
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
