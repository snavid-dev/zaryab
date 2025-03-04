import ArchiveAuthorsSection from '@/components/ArchiveAuthorSection/ArchiveAuthorsSection';
import ArchivedLettersSection from '@/components/ArchiveLettersSection/ArchiveLettersSection';
import Authors from '@/components/Authors/Authors';
import LettersSection from '@/components/LetterSection/LetterSection';
import SmallAd from '@/components/SmallAd/SmallAd';

export default function LettersPage() {
  return (
    // it has 5 sections
    <div className="flex flex-col items-center mt-150px xl:mt-50px">
      {/*  letters section  */}
      <div className="mt-7">
        <LettersSection />
      </div>
      {/*  archive letters section */}
      <div className="mt-28">
        <ArchivedLettersSection />
      </div>

      {/*  archive of authors and poets  */}
      <div className="mt-28">
        <ArchiveAuthorsSection />
      </div>

      {/*  the authors section  */}
      <div className="main-container mt-28 mb-14">
        <Authors />
      </div>
      {/* small ad */}
      {/* <SmallAd /> */}
    </div>
  );
}
