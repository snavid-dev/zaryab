import ArchiveAuthorsSection from '@/components/ArchiveAuthorSection/ArchiveAuthorsSection';
import ArchivedLettersSection from '@/components/ArchiveLettersSection/ArchiveLettersSection';
import Authors from '@/components/Authors/Authors';
import LettersSection from '@/components/LetterSection/LetterSection';
import SmallAd from '@/components/SmallAd/SmallAd';
import { use } from 'react';

export default async function LettersPage({ searchParams }) {
  const type = searchParams?.type || '';

  const lettersRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/letters/?type=non-archive&per_page=9',
    {
      next: { revalidate: 14400 },
    }
  );

  const lettersData = await lettersRes.json();

  // archived letter section

  const archiveLetterRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/letters/?type=archive',
    {
      next: { revalidate: 14400 },
    }
  );

  const archiveLetterData = await archiveLetterRes.json();

  // letter type

  const letterTypeRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/letter_type',
    {
      next: { revalidate: 14400 },
    }
  );

  let letterTypeData = await letterTypeRes.json();
  const nextMultipleOfSixLetter = Math.ceil(letterTypeData.length / 6) * 6;
  while (letterTypeData.length < nextMultipleOfSixLetter) {
    letterTypeData.push({ name: '', slug: '#' });
  }

  // archive authors

  const archiveAuthorsRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors-archive?per_page=6',
    {
      next: { revalidate: 14400 },
    }
  );

  const archiveAuthorsData = await archiveAuthorsRes.json();

  // author
  const authorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  return (
    // it has 5 sections
    <div className="flex flex-col items-center mt-130px xl:mt-50px mb-50px min-h-100vh">
      {/*  letters section  */}
      <div>
        <LettersSection
          serverData={lettersData}
          type={type}
        />
      </div>
      {/*  archive letters section */}
      {/* <div className="mt-28">
        <ArchivedLettersSection
          serverData={archiveLetterData}
          type={type}
          types={letterTypeData}
        />
      </div> */}

      {/*  archive of authors and poets  */}
      <div className="mt-28">
        <ArchiveAuthorsSection serverData={archiveAuthorsData} />
      </div>

      {/*  the authors section  */}
      <div className="main-container">
        <Authors data={authorData?.data} />
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
