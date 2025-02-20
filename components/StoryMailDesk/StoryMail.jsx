import React from 'react';
import StoryHarizontalCard from '../StoryHarizontalCard/StoryHarizontalCard';
import Mail from '../Mail/Mail';
import ArrowLink from '../ArrowLink/ArrowLink';

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
      <div className="hidden xl:block xl:col-span-3">
        <Mail />
      </div>
      <div className="col-span-6 xl:col-span-12">
        <div className="flex justify-start">
          <ArrowLink title="همه نوشته ها" />
        </div>
      </div>
    </div>
  );
}
