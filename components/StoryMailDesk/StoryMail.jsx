import React from 'react';
import StoryHarizontalCard from '../StoryHarizontalCard/StoryHarizontalCard';

export default function StoryMail() {
  return (
    <div className="mt-50px main-container rtl">
      <div className="col-span-6 xl:col-span-9">
        <StoryHarizontalCard />
        <StoryHarizontalCard />
        <StoryHarizontalCard />
        <StoryHarizontalCard />
        <StoryHarizontalCard />
      </div>
      <div className="h-5 hidden xl:block xl:col-span-3 bg-blue-500"></div>
    </div>
  );
}
