'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { truncateString } from '@/utils/GeneralFuncions/GeneralFunctions';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Winner({ data }) {
  //   animation

  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const imageRef = useRef(null);
  const authorRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(imageRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(subTitleRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subTitleRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(authorRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: authorRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    <section className="w-full flex justify-center mt-50px">
      {data?.author?.name && data?.story?.title && (
        <div className="main-container mt-50px rtl">
          <div
            className="col-span-6 xl:col-span-12 rtl font-common-lg text-24px md:28px xl:text-60px translate-y-200px opacity-0"
            ref={titleRef}
          >
            برنده مسابقه داستان نویسی آوای زریاب
          </div>
          {/* image */}
          <div
            className="col-span-6 md:col-span-3 xl:col-span-6 relative w-full h-350px md:h-370px xl:h-[580px] 2xl:h-750px translate-y-200px opacity-0"
            ref={imageRef}
          >
            {data?.featured_image || true ? (
              <Image
                src={data?.featured_image || '/assets/img/story.jpg'}
                alt="champions"
                fill
                className="absolute object-cover"
              />
            ) : (
              <div></div>
            )}
          </div>
          {/* data */}
          <div className="col-span-6 md:col-span-3 xl:col-span-6 rtl relative">
            {data?.story?.title && (
              <p
                className="font-pashto text-40px md:text-50px xl:text-60px 2xl:text-80px translate-y-200px opacity-0"
                ref={subTitleRef}
              >
                {data?.story?.title}
              </p>
            )}
            <div
              className="flex font-pashto text-footerBtn text-16px md:text-20px xl:text-20px 2xl:text-30px mt-3 translate-y-200px opacity-0"
              ref={authorRef}
            >
              <p className="ml-1">نویسنده:</p>
              {data?.author?.name && <p>{data?.author?.name}</p>}
            </div>
            <div
              className="mt-3 font-pashto text-14px md:text-18px xl:text-25px 2xl:text-30px translate-y-200px opacity-0"
              ref={textRef}
            >
              {data?.story?.excerpt &&
                truncateString(data?.story?.excerpt, 400)}
            </div>
            {/* buttons */}
            <div
              className="w-full flex justify-between mt-5 md:absolute bottom-0 translate-y-200px opacity-0"
              ref={buttonRef}
            >
              <div>
                {data?.story?.slug && (
                  <Link
                    className="font-common-heavy px-30px py-10px md:px-30px md:py-10px xl:px-50px xl:py-20px border-black border-2 bg-black text-white xl:text-30px"
                    href={`/episode/${data?.story?.slug}`}
                  >
                    خواندن داستان
                  </Link>
                )}
              </div>

              <div>
                {data?.author?.slug && (
                  <Link
                    className="font-common-heavy px-30px py-10px md:px-30px md:py-10px xl:px-50px xl:py-20px border-footerBtn border-2 bg-white text-footerBtn xl:text-30px"
                    href={`/authors/${data?.author?.slug}`}
                  >
                    درباره نویسنده
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
