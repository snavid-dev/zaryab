import Image from 'next/image';
import Link from 'next/link';
import Heading2 from '../Heading2/Heading2';
import OldMails from '../OldMails/OldMails';
import NewArticle from '../NewArticle/NewArticle';

export default function Mail({ newLetter, oldMailData, newArticle }) {
  return (
    <section className="w-full">
      <div className="w-full rtl">
        {/* it has three rows */}
        <div className="w-full flex flex-col items-start">
          <Heading2 title="مجله جدید" />
          {newLetter?.release_date && (
            <p className="mt-5 md:mt-0">{newLetter?.release_date}</p>
          )}
          <div className="relative w-full xl:h-400px 2xl:h-500px mt-5 md:mt-0">
            {newLetter?.featured_image ? (
              <Image
                src={newLetter?.featured_image}
                alt="new magazine"
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="h-full w-full flex justify-center items-center"></div>
            )}
          </div>
          {newLetter?.slug && (
            <Link
              href={`/magazines/${newLetter?.slug}`}
              className="w-full h-10 flex justify-center items-center border border-black font-common-lg text-27px text-black bg-white lg:text-white lg:bg-black
          lg:hover:bg-white lg:hover:text-black transition-all duration-300 mt-5"
            >
              خواندن نامه
            </Link>
          )}
        </div>
        <div className="w-full hidden md:flex flex-col items-start mt-7">
          <Heading2 title="مجله های قدیم" />
          {Array.isArray(oldMailData) &&
            oldMailData?.map((data, index) => (
              <OldMails
                data={data}
                key={index}
              />
            ))}
        </div>
        <div className="w-full hidden md:flex flex-col items-start mt-7">
          <Heading2 title="مقاله های جدید" />
          {Array.isArray(newArticle) &&
            newArticle?.map((data, index) => (
              <NewArticle
                data={data}
                key={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
