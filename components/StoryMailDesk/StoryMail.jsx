'use client';
import React, { useEffect, useState } from 'react';
import StoryHarizontalCard from '../StoryHarizontalCard/StoryHarizontalCard';
import Mail from '../Mail/Mail';
import ArrowLink from '../ArrowLink/ArrowLink';
import axios from '@/utils/api';

export default function StoryMail() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/stories?per_page=5');
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-50px main-container rtl">
      <div className="col-span-6 xl:col-span-9">
        {data?.map((data, index) => (
          <StoryHarizontalCard
            key={index}
            data={data}
          />
        ))}
      </div>
      <div className="hidden xl:block xl:col-span-3">
        <Mail />
      </div>
      <div className="col-span-6 xl:col-span-12">
        <div className="flex justify-start">
          <ArrowLink
            title="همه نوشته ها"
            path="/literarywritings"
          />
        </div>
      </div>
    </div>
  );
}
