import Authors from '@/components/Authors/Authors';
import Episode from '@/components/Episode/Episode';
import Filter from '@/components/Filter/Filter';
import FullAd from '@/components/FullAd/FullAd';
import Heading1 from '@/components/Heading1/Heading1';
import SmallAd from '@/components/SmallAd/SmallAd';
import { IoIosSearch } from 'react-icons/io';

export default function EposidesPage() {
  return (
    // main container of the page
    <div className="flex flex-col items-center mt-150px xl:mt-50px mb-50px">
      {/*  the filter of the page  */}
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
      {/*  title of the page  */}
      <div className="main-container mt-7 rtl">
        <div className="col-span-6 xl:col-span-6">
          <Heading1 title="داستان هری پاتر" />
        </div>

        {/*  the search bar of the eposides  */}
        <div className="col-span-6 xl:col-span-6 mt-5">
          <div className="w-full flex flex-row-reverse border-b-2 border-black">
            <input
              type="text"
              className="outline-none w-full rtl px-1 bg-white text-black"
            />
            <IoIosSearch className="text-xl text-black" />
          </div>
        </div>
      </div>

      {/*  list of the   episodes*/}
      <div className="mt-7 main-container">
        <Episode />
        <Episode />
        <Episode />
        {/* full ad */}
        <FullAd />
        <Episode />
        <Episode />
        <Episode />
        {/* full ad */}
        <FullAd />
        <Episode />
        <Episode />
        <Episode />
        {/* full ad */}
        <FullAd />
      </div>

      {/*  the authors section  */}

      <div className="mt-14 main-container">
        <Authors />
      </div>
      {/* small ad */}
      <SmallAd />
    </div>
  );
}
