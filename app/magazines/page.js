import ArchiveAuthorsSection from '@/components/ArchiveAuthorSection/ArchiveAuthorsSection';
import ArchivedLettersSection from '@/components/ArchiveLettersSection/ArchiveLettersSection';
import Authors from '@/components/Authors/Authors';
import LettersSection from '@/components/LetterSection/LetterSection';
import SmallAd from '@/components/SmallAd/SmallAd';
import { use } from 'react';

export default function LettersPage({ searchParams }) {
  const params = use(searchParams);
  return (
    // it has 5 sections
    <div className="flex flex-col items-center mt-130px xl:mt-50px mb-50px">
      {/*  letters section  */}
      <div>
        <LettersSection params={params} />
      </div>
      {/*  archive letters section */}
      {/* <div className="mt-28">
        <ArchivedLettersSection />
      </div> */}

      {/*  archive of authors and poets  */}
      <div className="mt-28">
        <ArchiveAuthorsSection />
      </div>

      {/*  the authors section  */}
      <div className="main-container">
        <Authors />
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
