import Image from 'next/image';
import React from 'react';

export default function StoryHarizontalCard() {
  return (
    <div className="grid grid-cols-6 xl:grid-cols-9 gap border-b-4 py-20px border-black">
      <div className="relative col-span-2 h-95px md:h-200px xl:h-155px 2xl:h-200px">
        <Image
          src="/assets/img/story-card.png"
          alt="story image"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
      <div className="col-span-4 xl:col-span-7 gap relative">
        <div className="col-span-4 text-27px md:text-59px font-new-extra-black">
          صندوقچه ‌‌بی‌بی
        </div>
        <div className="col-span-4 text-6px md:12px font-smallText">
          یادم می‌آید که روز ختم ما کنارش می‌نشستیم و انتظار می‌کشیدم تا قرائت
          خود را تمام کند و نخود و کشمش دَم‌کرده برای ما بدهد. سوالی که همیشه در
          ذهن داشتم این بود که چرا این نخود و کشمش‌ها از خلاصی نیستند. او چنان
          در تقسیم مهارت داشت که حتی یک نخود و یک کشمش از کسی زیاد و کم نبود.
        </div>
        <div className="col-span-4 grid grid-cols-3 gap absolute bottom-0">
          <div className="col-span-1">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-8px xl:text-14px">
                نویسنده:
              </p>
              <p className="font-common-thin text-8px xl:text-14px">
                باسط یزدانی
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-8px xl:text-14px">
                تاریخ:
              </p>
              <p className="font-common-thin text-8px xl:text-14px">
                1403/12/05
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="rtl flex text-right">
              <p className="font-common-thin ml-1 text-8px xl:text-14px">
                زمان:
              </p>
              <p className="font-common-thin text-8px xl:text-14px">12 </p>
              <p className="font-common-thin text-8px xl:text-14px">دقیقه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
