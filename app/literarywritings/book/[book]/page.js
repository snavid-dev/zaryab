'use client';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import Authors from '@/components/Authors/Authors';
import Genre from '@/components/Genre/Genre';
import Heading1 from '@/components/Heading1/Heading1';
import SimilarStories from '@/components/SimilarStories/SimilarStories';
import StoryPoemCard from '@/components/StoryPoemCard/StoryPoemCard';
import Image from 'next/image';

import Link from 'next/link';

import { useRef } from 'react';

export default function BookSinglePage() {
  return (
    // the main container of the page
    <div className="flex flex-col items-center mt-150px xl:mt-50px">
      {/*  the title section of the article  */}
      <div className="main-container rtl">
        {/*  the story section */}
        <div className="col-span-6 xl:col-span-9 xl:pl-5">
          {/*  the picture of the article  */}
          <div className="w-full px-6 md:px-16 py-4 md:py-10 border-2 border-black mt-14">
            <div className="w-full h-150px md:h-310px xl:h-370px 2xl:h-500px relative">
              <Image
                src="/assets/img/bookPic.png"
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
          </div>
          {/*  the title section of the story  */}
          <div className="mt-14 flex flex-col items-end">
            <div className="w-full flex flex-row">
              <div className="inline  relative p-[1px] box-border">
                <p
                  className={`font-new-black inline text-26px md:text-52px lg:text-60px `}
                >
                  خلاصه هری پاتر و سنگ فلاسفر
                </p>
                <div className="w-full bg-[#FDF0DF] h-[50%] absolute bottom-0 -z-10"></div>
              </div>
            </div>
            <div className="w-full flex flex-row-reverse justify-end rtl font-common-heavy text-10px md:text-16px lg:text-25px mt-7">
              از مجموعه هری پاتر
            </div>
            <div className="w-full grid grid-cols-9 gap items-center mt-14">
              {/* time */}
              <div className="col-span-2 grid grid-cols-2 gap justify-between pl-3 items-end">
                <div className="col-span-1 rtl flex items-center text-right">
                  <b className="font-common-bold text-6px md:text-7px lg:text-12px">
                    زمان:
                  </b>
                  <p className="font-common-thin mt-1 md:mt-2 text-6px md:text-7px lg:text-12px">
                    12
                  </p>
                  <p className="font-common-thin mt-1 md:mt-2 text-6px md:text-7px lg:text-12px">
                    دقیقه
                  </p>
                </div>
                <div className="col-span-1 rtl flex text-right items-center">
                  <b className="font-common-bold text-6px md:text-7px lg:text-12px">
                    تاریخ:
                  </b>
                  <p className="font-common-thin mt-1 md:mt-2 text-6px md:text-7px lg:text-12px">
                    1403/12/05
                  </p>
                </div>
              </div>
              {/* genre */}
              <div className="col-span-7 grid grid-cols-6 gap items-center mt-2">
                <div className="col-span-1">
                  <Genre title="ترسناک" />
                </div>
                <div className="col-span-1">
                  <Genre title="ترسناک" />
                </div>
                <div className="col-span-1">
                  <Genre title="ترسناک" />
                </div>
                <div className="col-span-1">
                  <Genre title="ترسناک" />
                </div>
                <div className="col-span-1">
                  <Genre title="ترسناک" />
                </div>
                <div className="col-span-1">
                  <Genre title="ترسناک" />
                </div>
              </div>
            </div>
          </div>
          {/*  the story text  */}
          <div className="font-common-lg text-10px md:text-12px lg:text-18px rtl mt-7">
            خردسال بودیم که زن‌های خانواده بی‌بی را شستند و مردها تابوتش را روی
            شانه‌ها بردند و به گور سپردند بی‌بی را این‌طور به یاد می‌آورم زنی با
            صورت پر از چروک چشم‌های میشی و درشت بینی کشیده و با خال سیاهی زیر لب
            پایین همین و بس هر بار که به او فکر می‌کنم سیمای او با همین جزئیات
            در نظرم مجسم می‌شود بعد سیمای او صندوقچه کوچک او دم نظرم می‌آید و یک
            قفل سبزرنگ که همیشه از این صندوقچه آویزان بود کلید اتاقش و کلید آن
            قفل زنگ‌زده با تاری که سال‌ها می‌شد رنگش را باخته بود مدام از گردنش
            آویزان بود صندوقچه او به راز سرمهری تبدیل شده بود هیچ‌کسی نمی‌دانست
            داخل آن بی‌بی چه دارد تا چشم کسی به کلیدهای گردن بی‌بی می‌افتاد
            می‌گفت بی‌بی گنج قایم داری این‌طور می‌گفتند و می‌خندیدند و بی‌بی
            پاسخ همیشگی‌اش را می‌داد نه رد می‌کرد و نه تائید کار از محکم‌کاری
            عیب نمی‌کند روز مبادایی دارم ما نمی‌دانستیم این روز مبادا چیست و
            کدام روز است تا این که در یک نیمه‌شب زمستان سرد و خشک بی‌بی مرد
            بی‌بی مرد پدر همین‌طور ساده و خالی از احساسات خبر مرگ او را به ما
            رساند آن روزها ما در کمر کوه زندگی می‌کردیم و شهر پایین کوه بود
            کودک‌ها به ندرت به شهر می‌رفتند و اکثراً هیچ تصوری از شهر نداشتند
            پدر می‌گفت وقتی از کوه پایین شوی و به شهر بروی خانه ما از همه جا
            معلوم و با انگشت اشاره می‌توانی به هرکسی آدرس بدهی سال‌ها بعد وقتی
            از آن خانه کوچ کردیم و شهری شدیم من دوست داشتم آن خانه را به همه
            نشان بدهم و بگویم نگاه کن وقتی من خردسال بودم در آن خانه زندگی
            می‌کردم صبح بی‌بی را از کوه پایین بردند و ما دیگر او را ندیدیم شب
            زن‌ها و مردهای زیادی از کوه و شهر به خانه ما آمدند در خانه ما تا سه
            روز به روی هیچ‌کسی بسته نشد این همه آدم برای چه به خانه ما می‌آیند
            برای بی‌بی بی‌بی که مرد برای غمشریکی و تسلیت مادر بیشتر از این چیزی
            نمی‌گفت و پدر انگار با آمدن مردم تازه فهمیده بود دوست‌داشتنی‌ترین
            موجود دنیا را از دست داده گاهی اشک می‌ریخت و حال و هوای گپ‌زدن نداشت
            من اما همه گرد مادر می‌گشتم تا باز چیزی بپرسم او پیاله‌ها را صافی
            می‌زد که پرسیدم بی‌بی را کجا بردند گورستان عجیب بود حیرت‌زده پرسیدم
            چرا این مردم پیش او گورستان نمی‌روند دست مادر با صافی و پیاله در هوا
            ماند گاهی به من نگاه کرد و گاهی به انبوه ظرفی که در انتظار صافی‌زدن
            بودند چندبار من‌من کرد و بالاخره گفت برو بازی کن تو هنوز یک خاشه
            هستی کلان که شدی می‌فهمی وقتی می‌گفت برو بازی کن می‌دانستم که کجا را
            می‌گوید هیچ‌وقتی اجازه نداشتیم به کوچه برویم به ما گفته بودند کوچه
            جای لچک‌هاست هرچند معنی لچک را نمی‌فهمیدیم اما گمان ما این بود که به
            آدم‌های بد را لچک می‌گویند بخاطر همین لچک‌ها بود که پدرم همیشه
            می‌گفت در حویلی قفل باشد در بزرگ حویلی ما در طول یک شبانه‌روز دو بار
            باز می‌شد یک‌بار وقتی پدر به خانه می‌آمد و یک‌بار هم وقتی که پدر از
            خانه می‌رفت روز سوم بود و باز هم در حویلی قفل نشد و پدر سرگردان
            می‌گشت و خستگی را می‌شد در سیمایش خواند که از او پرسیدم این همه آدم
            برای چه به خانه ما می‌آیند برای ختم بی‌بی ختم چند شب پیش ختم نشد ختم
            قرآن برای شادی روح بی‌بی روز چهارم که شد دیگر کسی به خانه ما نیامد
            صبح شده بود و همه به جنب و جوش افتاده بودند اما من دل برخاستن نداشتم
            و می‌خواستم ساعت دیگری هم خواب شوم که صدای مادر در گوشم پیچید
            لباس‌هایش را خیرات می‌کنیم صدای پدر آمد که با بی‌حوصلگی گفت صندوقچه
            را هم باز کن کنجکاوی نگذاشت که در زیر جایم بیشتر بمانم فوری برخاستم
            و نشستم دلم می‌خواست زودتر صندوقچه بی‌بی را باز کنند و من ببینم که
            او در آن صندوقچه پر رمز و راز چه دارد
          </div>
        </div>
        {/* the author section */}
        <div className="col-span-6 xl:col-span-3 md:mt-14 flex flex-row xl:flex-col items-start">
          {/*  it has 7 rows  */}
          <div className="w-1/2 xl:w-full border-2 border-black p-3 md:p-7 lg:p-10">
            <div className="w-full h-150px md:h-320px lg:h-290px xl:h-200px 2xl:h-280px relative">
              <Image
                src="/assets/img/authorPic.png"
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
          </div>
          <div className="flex flex-col items-start mr-4 xl:mr-0 lg:mb-10 xl:mb-0">
            <div className="font-new-black text-25px md:text-50px rtl text-black">
              ج.ک.رولنگ
            </div>
            <div className="flex rtl md:mt-7 text-black">
              <div className="font-common-heavy text-10px md:text-18px">
                موقعیت:
              </div>
              <div className="font-common-regular text-10px md:text-18px">
                هرات، اففانستان
              </div>
            </div>
            <div className="flex rtl mt-3 lg:mt-5 xl:mt-3 text-black">
              <div className="font-common-heavy text-10px md:text-18px">
                وظیفه:
              </div>
              <div className="font-common-regular text-10px md:text-18px">
                انجینیر ساختمان
              </div>
            </div>
            <div className="flex rtl mt-3 lg:mt-5 xl:mt-3 text-black">
              <div className="font-common-heavy text-10px md:text-18px">
                تعداد نوشته ها:
              </div>
              <div className="font-common-regular text-10px md:text-18px">
                3000
              </div>
            </div>
            <div className="flex rtl mt-3 lg:mt-5 xl:mt-3 text-black">
              <div className="font-common-heavy text-10px md:text-18px">
                سن:
              </div>
              <div className="font-common-regular text-10px md:text-18px">
                19
              </div>
            </div>
            <div className="flex mt-1 lg:mt-5 xl:mt-3">
              <Link href="#">
                <Image
                  src="/assets/svg/facebook.svg"
                  alt="facebook logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/svg/instagram.svg"
                  alt="instagram logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/svg/telegram.svg"
                  alt="telegram logo"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/assets/svg/youtube.svg"
                  alt="youtube logo"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*  the similar articles  */}
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12">
          <SimilarStories />
        </div>
      </div>
      {/* the poems section of the page */}
      <div>
        <div className="main-container mt-14 rtl">
          <div className="col-span-6 md:col-span-3 xl:col-span-6">
            <Heading1 title="اشعار" />
          </div>
          <div className="col-span-6 md:col-span-3 xl:col-span-6 flex md:justify-end">
            <ArrowLink title="همه اشعار" />
          </div>
        </div>
        <div className="main-container mt-7">
          <StoryPoemCard isStory={true} />
          <StoryPoemCard isStory={true} />
          <StoryPoemCard isStory={true} />
        </div>
      </div>
      {/*  the author section  */}
      <div className="mt-14 mb-14">
        <Authors />
      </div>
    </div>
  );
}
