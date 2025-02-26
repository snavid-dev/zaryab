'use client';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import OurAuthorCard from '../OurAuthorCard/OurAuthorCard';
import axios from '@/utils/api';

export default function Authors() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/authors?per_page=8');
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  console.log(error);

  return (
    <div className="main-container">
      {/* it have two rows */}
      <div className="col-span-6 xl:col-span-12 flex flex-col items-end md:flex-row-reverse md:justify-between">
        <Heading1 title="نویسنده ها و شاعران آوای زریاب" />
        <ArrowLink
          title="همه نویسنده و شاعران"
          path="/authors"
        />
      </div>
      <div className="main-container mt-7">
        {data?.map((data, index) => (
          <OurAuthorCard
            key={index}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
