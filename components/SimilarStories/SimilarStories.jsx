import { useState, useEffect } from 'react';
import Heading1 from '../Heading1/Heading1';
import SimilarHorizontalCard from '../SimilarHorizontalCard/SimilarHorizontalCard';

import axios from '@/utils/api';
import SimilarHorizontalStoryCard from '../SimilarHorizontalStoryCard/SimilarHorizontalStoryCard';

export default function SimilarStories({ slug }) {
  // fetch data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/stories/similar/${slug}?per_page=5`
        );
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    // the main container of the section
    <div className="flex flex-col items-center mt-50px">
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="داستان های مشابه" />
        </div>
      </div>
      <div className="main-container rtl">
        {data?.map((data, index) => (
          <SimilarHorizontalStoryCard
            data={data}
            key={index}
            isStory={true}
          />
        ))}
      </div>
    </div>
  );
}
