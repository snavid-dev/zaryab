import Authors from '@/components/Authors/Authors';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SmallAd from '@/components/SmallAd/SmallAd';
import StoryPoemCard from '@/components/StoryPoemCard/StoryPoemCard';

export default function StoryCollectionPage() {
  return (
    // the main container of the page
    <div className="flex flex-col items-center mt-150px xl:mt-50px mb-150px">
      {/*  filter of the page  */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12">
          <Filter
            items={[
              'داستانک',
              'داستان کوتاه',
              'داستان بلند',
              'رمان کوتاه',
              'قصه',
              'رمان',
              'نمایش نامه',
              'فیلم نامه',
            ]}
            title="انواع داستان ها"
            genre={[]}
          />
        </div>
      </div>

      {/* the title of the story collection */}
      <div className="main-container mt-7">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="مجموعه داستان هری پاتر" />
        </div>
      </div>

      <div className="main-container mt-7 pb-14">
        <StoryPoemCard />
        <StoryPoemCard />
        <StoryPoemCard />
        {/* full ad */}
        <FullAd />
        <StoryPoemCard />
        <StoryPoemCard />
        <StoryPoemCard />
        {/* full ad */}
        <FullAd />
        <StoryPoemCard />
        <StoryPoemCard />
        <StoryPoemCard />
        {/* full ad */}
        <FullAd />
      </div>

      {/* autors section */}
      <Authors />
      {/* small ad */}
      <SmallAd />
    </div>
  );
}
