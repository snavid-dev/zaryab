import Authors from '@/components/Authors/Authors';
import AuthorWeek from '@/components/AuthorWeek/AuthorWeek';
import BookDesk from '@/components/BookDesk/BookDesk';
import BookMailMobile from '@/components/BookMailMobile/BookMailMobile';
import FullAd from '@/components/FullAd/FullAd';
import HarizontalLine from '@/components/HarizontalLine/HarizontalLine';
import Podcasts from '@/components/Podcasts/Podcasts';
import SmallAd from '@/components/SmallAd/SmallAd';
import StoryMail from '@/components/StoryMailDesk/StoryMail';
import StoryOfDay from '@/components/StoryOfDay/StoryOfDay';

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center mt-70px xl:mt-0">
      {/* story of the day */}
      <StoryOfDay />
      {/* ad */}
      <FullAd />
      {/* letters and  mailes for desktop*/}
      <StoryMail />
      {/* ad */}
      <SmallAd />
      {/* desktop book section and moblie tablet*/}
      <div className="w-full hidden xl:flex flex-col items-center">
        <BookDesk />
      </div>
      <div className="w-full flex flex-col items-center xl:hidden">
        <BookMailMobile />
      </div>
      {/* ad */}
      <FullAd />
      {/* author of the week */}
      <AuthorWeek />
      {/* ad */}
      <SmallAd />
      {/* authors */}
      <Authors />
      {/* harizontal line */}
      <HarizontalLine />
      {/* podcasts */}
      <Podcasts />
      {/* ad */}
      <SmallAd />
    </main>
  );
}
