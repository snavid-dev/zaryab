import Authors from '@/components/Authors/Authors';
import FullAd from '@/components/FullAd/FullAd';
import PoemSection from '@/components/PoemSection/PoemSection';
import SmallAd from '@/components/SmallAd/SmallAd';
import StorySection from '@/components/SorySection/StorySection';
import React from 'react';

export default function LiteraryWritingsPage() {
  return (
    <div className="flex flex-col items-center pt-100px xl:pt-0 pb-50px">
      <StorySection />
      {/* full ad */}
      {/* <FullAd /> */}
      <PoemSection />

      <div>
        <Authors />
      </div>

      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
