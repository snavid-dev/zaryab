import React from 'react';
import Heading1 from '../Heading1/Heading1';
import Genre from '../Genre/Genre';
import Image from 'next/image';

export default function StoryOfDay() {
  return (
    <section className="flex justify-center w-full mt-50px">
      <div className="main-container">
        {/* subtitle */}
        <div className="col-span-6 xl:col-span-12">
          <div className="flex flex-row-reverse">
            <Heading1 title="داستان روز" />
          </div>
        </div>
        {/* title and description section */}
        <div className="col-span-6 xl:col-span-12 main-container rtl mt-50px">
          {/* title of the story */}
          <div className="col-span-6 xl:col-span-4">
            <h1 className="flex flex-row xl:flex-col text-50px md:text-94px font-new-black leading-67%">
              <p>صندوقچه</p>
              <p>بی بی</p>
            </h1>
          </div>
          <div className="hidden xl:col-span-1"></div>
          <div className="col-span-6 xl:col-span-7 mt-20px xl:mt-0">
            <p className="font-common rtl text-12px md:text-18px">
              یادم می‌آید که روز ختم ما کنارش می‌نشستیم و انتظار می‌کشیدم تا
              قرائت خود را تمام کند و نخود و کشمش دَم‌کرده برای ما بدهد. سوالی
              که همیشه در ذهن داشتم این بود که چرا این نخود و کشمش‌ها از خلاصی
              نیستند. او چنان در تقسیم مهارت داشت که حتی یک نخود و یک کشمش از
              کسی زیاد و کم نبود.
            </p>
          </div>
          <div className="col-span-6 xl:col-span-12 main-container">
            <div className="hidden xl:block xl:col-span-5"></div>
            <div className="col-span-6  xl:col-span-5 grid grid-cols-3 gap rtl">
              <div className="col-span-1 hidden xl:block"></div>
              <div className="col-span-1 hidden xl:block"></div>
              <div className="col-span-1 hidden xl:block"></div>
              <div className="col-span-1 xl:mt-6">
                <div className="rtl flex justify-center text-right">
                  <p className="font-common-bold ml-1 text-12px xl:text-14px">
                    نویسنده:
                  </p>
                  <p className="font-common-thin text-12px xl:text-14px">
                    باسط یزدانی
                  </p>
                </div>
              </div>
              <div className="col-span-1 xl:mt-6">
                <div className="rtl flex justify-center text-right">
                  <p className="font-common-bold ml-1 text-12px xl:text-14px">
                    تاریخ:
                  </p>
                  <p className="font-common-thin text-12px xl:text-14px">
                    1403/12/05
                  </p>
                </div>
              </div>
              <div className="col-span-1 xl:mt-6">
                <div className="rtl flex justify-center text-right">
                  <p className="font-common-bold ml-1 text-12px xl:text-14px">
                    زمان:
                  </p>
                  <p className="font-common-thin text-12px xl:text-14px">12 </p>
                  <p className="font-common-thin text-12px xl:text-14px">
                    دقیقه
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-6 xl:col-span-2 grid grid-cols-4 xl:grid-cols-2 gap">
              <div className="col-span-1 flex justify-center">
                <Genre title="علمی تخیلی" />
              </div>
              <div className="col-span-1 flex justify-center">
                <Genre title="داستان کوتاه" />
              </div>
              <div className="col-span-1 flex justify-center">
                <Genre title="علمی تخیلی" />
              </div>
              <div className="col-span-1 flex justify-center">
                <Genre title="داستان کوتاه" />
              </div>
            </div>
          </div>
          <div className="col-span-6 xl:col-span-12 mt-10px md:mt-0">
            <div
              id="photo"
              className="w-full h-170px md:h-370px xl:h-580px 2xl:h-750px relative"
            >
              <Image
                src="/assets/img/mainPic.png"
                alt="story of the day image"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
