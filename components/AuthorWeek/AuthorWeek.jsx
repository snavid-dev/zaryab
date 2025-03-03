'use client';
import React, { useEffect, useRef, useState } from 'react';

import AuthorWeekCard from '../AuthorWeekCard/AuthorWeekCard';
import Heading1 from '../Heading1/Heading1';
import axios from '@/utils/api';

export default function AuthorWeek() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/authors-archive?per_page=2');
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="main-contianer mt-50px">
      {/* it has two rows */}
      <div className="col-span-6 xl:col-span-12 rtl">
        <Heading1 title="نویسنده و شاعر هفته" />
      </div>
      <div className="col-span-6 xl:col-span-12 main-container">
        {data?.map((data, index) => (
          <AuthorWeekCard
            key={index}
            data={data}
          />
        ))}
      </div>
    </section>
  );
}
