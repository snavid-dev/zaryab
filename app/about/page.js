'use client';
import AboutCord from '@/components/AboutCard/AboutCard';
import axios from '@/utils/api';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/about-us');
        setData(response.data.questions);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center bg-aboutPagePic bg-no-repeat bg-bottom min-h-1500px mt-150px xl:mt-50px">
      <div className="main-container">
        {data?.map((data, index) => (
          <AboutCord
            key={index}
            title={data.question}
            text={data.answer}
          />
        ))}
      </div>
    </div>
  );
}
