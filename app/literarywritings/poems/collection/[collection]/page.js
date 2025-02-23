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
              'قصیده',
              'غزل',
              'قطعه',
              'رباعی',
              'دوبیتی',
              'مثنوی',
              'مسمط',
              'ترجیح بند',
              'ترکیب بند',
              'مستزاد',
              'چهار پاره',
              'بهر طویل',
              'نیمایی',
              'سفید',
              'موج نو',
            ]}
            genre={[]}
            title="انواع شعر"
          />
        </div>
      </div>

      {/* the title of the story collection */}
      <div className="main-container mt-7">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="مجموعه اشعار حافظ" />
        </div>
      </div>

      <div className="main-container mt-7 pb-14">
        <StoryPoemCard isStory={false} />
        <StoryPoemCard isStory={false} />
        <StoryPoemCard isStory={false} />
        {/* full ad */}
        <FullAd />
        <StoryPoemCard isStory={false} />
        <StoryPoemCard isStory={false} />
        <StoryPoemCard isStory={false} />
        {/* full ad */}
        <FullAd />
        <StoryPoemCard isStory={false} />
        <StoryPoemCard isStory={false} />
        <StoryPoemCard isStory={false} />
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
