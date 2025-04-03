import Authors from '@/components/Authors/Authors';
import FullAd from '@/components/FullAd/FullAd';
import PoemSection from '@/components/PoemSection/PoemSection';
import SmallAd from '@/components/SmallAd/SmallAd';
import StorySection from '@/components/SorySection/StorySection';
import React, { use } from 'react';

export default async function LiteraryWritingsPage({ searchParams }) {
  const type = searchParams?.type || '';

  // story
  const storyDataFetch = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/stories?per_page=9',
    {
      next: { revalidate: 14400 },
    }
  );

  const storyData = await storyDataFetch.json();

  // poem
  const poemDataFetch = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/poems?per_page=9',
    {
      next: { revalidate: 14400 },
    }
  );

  const poemData = await poemDataFetch.json();

  // author
  const authorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  // story type

  const storiesRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/story_type',
    {
      next: { revalidate: 14400 },
    }
  );

  let storiesType = await storiesRes.json();

  const nextMultipleOfSix = Math.ceil(storiesType.length / 6) * 6;

  while (storiesType.length < nextMultipleOfSix) {
    storiesType.push({ name: '', slug: '#' });
  }

  // categories

  const categoriesRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/categories',
    {
      next: { revalidate: 14400 },
    }
  );

  let categoriesType = await categoriesRes.json();

  const nextMultipleOfSixCategories = Math.ceil(categoriesType.length / 6) * 6;

  while (categoriesType.length < nextMultipleOfSixCategories) {
    categoriesType.push({ name: '', slug: '#' });
  }

  // poem type

  const poemsRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/poem_type',
    { next: { revalidate: 14400 } }
  );

  const poemsType = await poemsRes.json();

  const nextMultipleOfSixCategoriesPoem = Math.ceil(poemsType.length / 6) * 6;

  while (poemsType.length < nextMultipleOfSixCategoriesPoem) {
    poemsType.push({ name: '', slug: '#' });
  }

  return (
    <div className="flex flex-col items-center pt-100px xl:pt-0 pb-50px">
      <StorySection
        type={type}
        serverData={storyData}
        types={storiesType}
        categories={categoriesType}
      />
      {/* full ad */}
      {/* <FullAd /> */}
      <PoemSection
        type={type}
        serverData={poemData}
        types={poemsType}
        categories={categoriesType}
      />

      <div>
        <Authors data={authorData?.data} />
      </div>

      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
