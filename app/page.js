import Authors from '@/components/Authors/Authors';
import AuthorWeek from '@/components/AuthorWeek/AuthorWeek';
import BookDesk from '@/components/BookDesk/BookDesk';
import BookMailMobile from '@/components/BookMailMobile/BookMailMobile';
import ChampionPopUp from '@/components/ChampionPopUp/ChampionPopUp';
import FullAd from '@/components/FullAd/FullAd';
import HarizontalLine from '@/components/HarizontalLine/HarizontalLine';
import Podcasts from '@/components/Podcasts/Podcasts';
import SmallAd from '@/components/SmallAd/SmallAd';
import StoryMail from '@/components/StoryMailDesk/StoryMail';
import StoryOfDay from '@/components/StoryOfDay/StoryOfDay';
import Winner from '@/components/Winner/Winner';

export default async function Home() {
  // featured story
  const storyDataFetch = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/featured-story',
    {
      next: { revalidate: 14400 },
    }
  );

  const storyData = await storyDataFetch.json();

  // stories
  const storiesRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/stories?per_page=5',
    {
      next: { revalidate: 14400 },
    }
  );

  const storiesData = await storiesRes.json();

  // mail
  const mailRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/letters/?type=non-archive&per_page=1`',
    {
      next: { revalidate: 14400 },
    }
  );

  const mailData = await mailRes.json();

  // old mail
  const oldMailRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/letters/?type=archive&per_page=4',
    {
      next: { revalidate: 14400 },
    }
  );

  const oldMailData = await oldMailRes.json();

  // newArticle
  const newArticleRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/articles?per_page=4',
    {
      next: { revalidate: 14400 },
    }
  );

  const newArticleData = await newArticleRes.json();

  // book
  const bookRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/books/featured',
    {
      next: { revalidate: 14400 },
    }
  );

  const bookData = await bookRes.json();

  // archive author
  const archiveAuthorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors-archive?per_page=2',
    {
      next: { revalidate: 14400 },
    }
  );

  const archiveAuthorData = await archiveAuthorRes.json();

  // winner
  const winnerRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/story-champion/latest',
    {
      next: { revalidate: 14400 },
    }
  );

  const winnerData = await winnerRes.json();

  // author
  const authorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  //desktop podcast
  const podcastDeskRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/podcasts?per_page=3',
    {
      next: { revalidate: 14400 },
    }
  );

  const podcastDeskData = await podcastDeskRes.json();

  //desktop podcast
  const podcastMobileRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/podcasts?per_page=4',
    {
      next: { revalidate: 14400 },
    }
  );

  const podcastMobileData = await podcastMobileRes.json();

  console.log(podcastDeskData.data, 'data');

  return (
    <main className="w-full flex flex-col items-center mt-100px xl:mt-0 pb-50px min-h-100vh">
      {/* story of the day */}

      <StoryOfDay data={storyData} />

      {/* ad */}
      {/* <FullAd /> */}
      {/* letters and  mailes for desktop*/}

      <StoryMail
        data={storiesData?.data}
        newMail={mailData?.data[0]}
        oldMailData={oldMailData}
        newArticle={newArticleData.data}
      />

      {/* ad */}
      {/* <SmallAd /> */}
      {/* desktop book section and moblie tablet*/}

      <div className="w-full hidden xl:flex flex-col items-center">
        <BookDesk data={bookData} />
      </div>

      <div className="w-full flex flex-col items-center xl:hidden">
        <BookMailMobile
          bookData={bookData}
          mailData={mailData}
        />
      </div>

      {/* ad */}
      {/* <FullAd /> */}
      {/* author of the week */}

      <AuthorWeek data={archiveAuthorData.data} />

      {/* ad */}
      {/* <SmallAd /> */}
      {/* authors */}

      {/* winner section */}

      <Winner data={winnerData} />

      <div>
        <Authors data={authorData.data} />
      </div>

      {/* harizontal line */}
      <HarizontalLine />
      {/* podcasts */}

      <div className="w-full hidden xl:flex justify-center">
        <Podcasts data={podcastDeskData.data} />
      </div>
      <div className="w-full flex xl:hidden justify-center">
        <Podcasts data={podcastMobileData.data} />
      </div>

      {/* ad */}
      {/* <SmallAd /> */}
      <ChampionPopUp />
    </main>
  );
}
