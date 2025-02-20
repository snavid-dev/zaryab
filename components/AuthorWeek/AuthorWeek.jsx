'use client';
import React, { useRef } from 'react';

import AuthorWeekCard from '../AuthorWeekCard/AuthorWeekCard';
import Heading1 from '../Heading1/Heading1';

export default function AuthorWeek() {
  const ref = useRef(null);
  return (
    <section className="main-contianer mt-50px">
      {/* it has two rows */}
      <div className="col-span-6 xl:col-span-12 rtl">
        <Heading1 title="نویسنده و شاعر هفته" />
      </div>
      <div className="col-span-6 xl:col-span-12 main-container">
        <AuthorWeekCard />
        <AuthorWeekCard />
      </div>
    </section>
  );
}
