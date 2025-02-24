import Filter from '@/components/Filter/Filter';
import Heading1 from '@/components/Heading1/Heading1';
import SearchResult from '@/components/SearchResult/SearchResult';
import React from 'react';

export default function SearchPage() {
  return (
    <div className="flex flex-col items-center mt-150px xl:mt-50px mb-50px">
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
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title="نتایج جستجو" />
        </div>
      </div>
      <SearchResult
        title="داستان ها"
        count={6}
      />
      <SearchResult
        title="اشعار"
        count={6}
      />
      <SearchResult
        title="مقاله ها"
        count={6}
      />
      <SearchResult
        title="نقد و نظر ها"
        count={6}
      />
      <SearchResult
        title="نشست ها"
        count={6}
      />
      <SearchResult
        title="نامه ها"
        count={0}
      />
    </div>
  );
}
