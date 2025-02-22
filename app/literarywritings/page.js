import FullAd from '@/components/FullAd/FullAd';
import PoemSection from '@/components/PoemSection/PoemSection';
import StorySection from '@/components/SorySection/StorySection';
import React from 'react';

export default function LiteraryWritingsPage() {
  return (
    <div className="flex flex-col items-center">
      <StorySection />
      {/* full ad */}
      <FullAd />
      <PoemSection />
    </div>
  );
}
