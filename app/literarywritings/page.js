'use client';
import Authors from '@/components/Authors/Authors';
import FullAd from '@/components/FullAd/FullAd';
import PoemSection from '@/components/PoemSection/PoemSection';
import SmallAd from '@/components/SmallAd/SmallAd';
import StorySection from '@/components/SorySection/StorySection';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function LiteraryWritingsPage() {
  const searchParam = useSearchParams();
  const type = searchParam.get('type');
  console.log(type, 'type');

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
