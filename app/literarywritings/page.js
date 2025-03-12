'use client';
import Authors from '@/components/Authors/Authors';
import FullAd from '@/components/FullAd/FullAd';
import PoemSection from '@/components/PoemSection/PoemSection';
import SmallAd from '@/components/SmallAd/SmallAd';
import StorySection from '@/components/SorySection/StorySection';
import React, { use } from 'react';

export default function LiteraryWritingsPage({ searchParams }) {
  const params = use(searchParams);
  const type = params?.type || '';

  return (
    <div className="flex flex-col items-center pt-100px xl:pt-0 pb-50px">
      <StorySection type={type} />
      {/* full ad */}
      {/* <FullAd /> */}
      <PoemSection type={type} />

      <div>
        <Authors />
      </div>

      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
