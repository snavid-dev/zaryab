import { useState, useEffect } from 'react';
import Heading1 from '../Heading1/Heading1';
import SimilarHorizontalCard from '../SimilarHorizontalCard/SimilarHorizontalCard';

import axios from '@/utils/api';

export default function SimilarReviews({ slug }) {
  // fetch data
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/author-reviews/similar/${slug}?per_page=6`
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
    <div className="mt-14 flex flex-col items-center">
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="نقد و نظر های مشابه" />
        </div>
      </div>
      <div className="main-container rtl">
        {data?.map((data, index) => (
          <SimilarHorizontalCard
            key={index}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
