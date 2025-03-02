'use client';
import Authors from '@/components/Authors/Authors';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SmallAd from '@/components/SmallAd/SmallAd';
import StoryPoemCard from '@/components/StoryPoemCard/StoryPoemCard';
import { use, useEffect, useState } from 'react';
import axios from '@/utils/api';

export default function StoryCollectionPage({ params }) {
  const param = use(params);
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/stories/collection/${param.collection}`
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
            items={[
              'داستانک',
              'داستان کوتاه',
              'داستان بلند',
              'رمان کوتاه',
              'قصه',
              'رمان',
              'نمایش نامه',
              'فیلم نامه',
            ]}
            title="انواع داستان ها"
            genre={[]}
          />
        </div>
      </div>

      {/* the title of the story collection */}
      <div className="main-container mt-7">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="مجموعه داستان هری پاتر" />
        </div>
      </div>

      <div className="main-container mt-7 pb-14">
        {data?.map((data, index) => (
          <StoryPoemCard
            data={data}
            isStory={true}
            key={index}
          />
        ))}
      </div>

      {/* autors section */}
      <div>
        <Authors />
      </div>
      {/* small ad */}
      <SmallAd />
    </div>
  );
}
