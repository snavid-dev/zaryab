'use client';
import React, { useEffect, useState } from 'react';
import axios from '@/utils/api';
import StoryPoemCard from '../StoryPoemCard/StoryPoemCard';

export default function StoriesPoemSection() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/poems?per_page=3');
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main-container mt-7">
      {data?.map((data, index) => (
        <StoryPoemCard
          data={data}
          key={index}
          isStory={false}
        />
      ))}
    </div>
  );
}
