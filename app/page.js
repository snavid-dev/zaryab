import FullAd from '@/components/FullAd/FullAd';
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
    </main>
  );
}
