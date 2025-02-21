'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import Heading1 from '../Heading1/Heading1';

// gsap.registerPlugin(ScrollTrigger);

export default function BookDesk() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  //   useGSAP(() => {
  //     gsap.to(titleRef.current, {
  //       y: 0,
  //       opacity: 1,
  //       ease: 'power2.out',
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: titleRef.current,
  //         strat: '-100%',
  //         end: '-70%',
  //         toggleActions: 'play none none none',
  //       },
  //     });

  //     gsap.to(imageRef.current, {
  //       y: 0,
  //       opacity: 1,
  //       delay: 0.5,
  //       ease: 'power2.out',
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: imageRef.current,
  //         strat: '-100%',
  //         end: '-70%',
  //         toggleActions: 'play none none none',
  //       },
  //     });

  //     gsap.to(subtitleRef.current, {
  //       y: 0,
  //       opacity: 1,
  //       ease: 'power2.out',
  //       delay: 1,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: subtitleRef.current,
  //         strat: '-100%',
  //         end: '-70%',
  //         toggleActions: 'play none none none',
  //       },
  //     });

  //     gsap.to(textRef.current, {
  //       y: 0,
  //       opacity: 1,
  //       ease: 'power2.out',
  //       duration: 1,
  //       delay: 1.5,
  //       scrollTrigger: {
  //         trigger: textRef.current,
  //         strat: '-100%',
  //         end: '-70%',
  //         toggleActions: 'play none none none',
  //       },
  //     });

  //     gsap.to(buttonRef.current, {
  //       y: 0,
  //       opacity: 1,
  //       ease: 'power2.out',
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: buttonRef.current,
  //         strat: '-100%',
  //         end: '-70%',
  //         toggleActions: 'play none none none',
  //       },
  //     });
  //   }, []);

  return (
    <div className="main-container mt-50px">
      <div
        className="col-span-6 xl:col-span-12 rtl"
        ref={titleRef}
      >
        <Heading1 title="کتاب هفته" />
      </div>
      <div className="main-container rtl">
        {/*  it has two columns  */}
        <div className="hidden md:block md:col-span-1 xl:hidden"></div>
        <div
          ref={imageRef}
          className="col-span-6 md:col-span-4 xl:col-span-6"
        >
          <div className="relative w-full h-500px md:h-670px xl:h-780px 2xl:h-1020px flex flex-col">
            <Image
              src="/assets/img/book.png"
              alt=""
              fill
              className="absolute object-cover"
            />
          </div>
        </div>
        <div className="hidden md:block md:col-span-1 xl:hidden"></div>
        <div className="col-span-6">
          <div className="flex flex-col w-full items-start">
            <h3
              ref={subtitleRef}
              className="font-common-lg text-30px xl:text-65px 2xl:text-92px flex flex-col items-end justify-between lg:mt-5"
            >
              هریپاتر و سنگ فلاسفر
            </h3>
            <div
              ref={textRef}
              className="rtl mt-7 font-common-regular text-14px xl:text-20px 2xl:text-28px"
            >
              <p className="">
                اگر به دنبال کتابی هستید که شما را به دنیایی پر از جادو، دوستی،
                و ماجراجویی ببرد، هری پاتر و سنگ جادو اثر جی. کی. رولینگ انتخابی
                بی‌نظیر است. این کتاب نه تنها برای کودکان و نوجوانان، بلکه برای
                بزرگسالانی که در پی لمس دوباره تخیلات کودکی هستند نیز جذاب خواهد
                بود. داستان با پسری به نام هری آغاز می‌شود که در سن یازده سالگی
                متوجه می‌شود که در حقیقت یک جادوگر است. او وارد مدرسه‌ای به نام
                هاگوارتز می‌شود؛ جایی که با دوستان جدیدش، هرمیون و رون، همراه
                می‌شود و ماجراهای شگفت‌انگیزی را تجربه می‌کند.
              </p>
              <p className="mt-3">
                رولینگ با قلمی بسیار توانمند، دنیایی را خلق کرده است که هر
                صفحه‌اش خواننده را به خود جذب می‌کند. دنیای جادوگران با تمامی
                جزئیات، از چوبدستی‌های جادویی گرفته تا مسابقات کوییدیچ، همه و
                همه با چنان دقتی توصیف شده‌اند که گویی شما خودتان در این دنیا
                زندگی می‌کنید. شخصیت‌های کتاب نیز عمیق و چندلایه هستند؛ از
                دلیرانه‌های هری گرفته تا درایت هرمیون و شوخ‌طبعی رون.
              </p>
              <p className="mt-3">
                این کتاب صرفاً یک داستان ماجراجویی نیست؛ بلکه درس‌هایی از دوستی،
                شجاعت، و رویارویی با ترس‌ها را نیز در دل خود جای داده است. هری
                پاتر و سنگ جادو سفری است به قلب دنیایی که به هرکس یادآوری می‌کند
                که حتی در تاریک‌ترین لحظات، جادو همیشه وجود دارد—اگر بدانیم کجا
                به دنبالش بگردیم.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  buttons   */}
      <div
        ref={buttonRef}
        className="col-span-6 xl:col-span-12 gap-4 grid grid-cols-2"
      >
        <Link
          href="#"
          className="w-full h-[50px] lg:h-[100px] bg-black flex justify-center items-center mt-7
                font-common-heavy text-28px lg:text-59px text-white hover:text-black hover:bg-white transition-all duration-500 border-4 border-black"
        >
          دانلود کتاب
        </Link>
        <Link
          href="/literarywritings/book/bookid"
          className="w-full h-[50px] lg:h-[100px] bg-footerBtn flex justify-center items-center mt-7
                font-common-heavy text-28px lg:text-59px text-white hover:text-footerBtn hover:bg-white transition-all duration-500 border-4 border-footerBtn"
        >
          خلاصه کتاب
        </Link>
      </div>
    </div>
  );
}
