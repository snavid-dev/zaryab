'use client';
import AboutCord from '@/components/AboutCard/AboutCard';
import axios from '@/utils/api';
import { useEffect, useRef, useState } from 'react';

export default function AboutPage({ data }) {
  return (
    <div className="flex flex-col items-center bg-aboutPagePic bg-no-repeat bg-bottom min-h-1500px mt-130px xl:mt-50px">
      <div className="main-container">
        {Array.isArray(data) &&
          data?.map((data, index) => (
            <AboutCord
              key={index}
              title={data?.question ? data?.question : ''}
              text={data?.answer ? data?.answer : ''}
              data={data}
            />
          ))}
      </div>
    </div>
  );
}
