'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Heading1 from '../Heading1/Heading1';

gsap.registerPlugin(ScrollTrigger);

export default function BookDesk({ data }) {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const handleDownload = () => {
    if (data?.pdf) {
      const fileUrl = data?.pdf;

      // Create a temporary <a> element to simulate a download
      const link = document.createElement('a');
      link.href = fileUrl;

      link.download = fileUrl.split('/')[fileUrl.split('/').length - 1]; // Specify the file name for download
      document.body.appendChild(link); // Append link to the body
      link.click(); // Trigger the download
      document.body.removeChild(link); // Clean up by removing the link
    }
  };

  // animation

  useGSAP(() => {
    if (data) {
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(imageRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        delay: 0.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        delay: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(textRef.current, {
        y: 0,
        opacity: 1,
        delay: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 90%',
          end: 'top 50%',
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
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    <section className="w-full flex justify-center">
      <div className="main-container mt-50px">
        <div
          className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
          ref={titleRef}
        >
          <Heading1 title="کتاب هفته" />
        </div>
        <div className="main-container rtl">
          {/*  it has two columns  */}
          <div className="hidden md:block md:col-span-1 xl:hidden"></div>
          <div
            ref={imageRef}
            className="col-span-6 md:col-span-4 xl:col-span-6 translate-y-200px opacity-0"
          >
            <div className="relative w-full h-500px md:h-670px xl:h-780px 2xl:h-1020px flex flex-col">
              {data?.featured_image ? (
                <Image
                  src={data?.featured_image}
                  alt={data?.title ? data?.title : 'not found'}
                  fill
                  className="absolute object-cover"
                />
              ) : (
                <div className="w-full h-full flex justify-center items-center"></div>
              )}
            </div>
          </div>
          <div className="hidden md:block md:col-span-1 xl:hidden"></div>
          <div className="col-span-6">
            <div className="flex flex-col w-full items-start">
              {data?.title && (
                <h3
                  ref={subtitleRef}
                  className="font-pashto text-30px xl:text-65px 2xl:text-92px flex flex-col items-end justify-between lg:mt-5 translate-y-200px opacity-0"
                >
                  {data?.title}
                </h3>
              )}
              {data?.excerpt && (
                <div
                  ref={textRef}
                  dangerouslySetInnerHTML={{
                    __html: data?.excerpt,
                  }}
                  className="rtl mt-7 font-pashto text-14px xl:text-20px 2xl:text-28px translate-y-200px opacity-0"
                ></div>
              )}
            </div>
          </div>
        </div>
        {/*  buttons   */}
        <div
          ref={buttonRef}
          className="col-span-6 xl:col-span-12 gap-4 grid grid-cols-2 translate-y-200px opacity-0"
        >
          <Link
            href="#"
            onClick={handleDownload}
            className="w-full h-[50px] lg:h-[100px] bg-black flex justify-center items-center mt-7
                font-common-heavy text-28px lg:text-59px text-white hover:text-black hover:bg-white transition-all duration-500 border-4 border-black"
          >
            دانلود کتاب
          </Link>

          {data?.slug && (
            <Link
              href={`/book/${data?.slug}`}
              className="w-full h-[50px] lg:h-[100px] bg-footerBtn flex justify-center items-center mt-7
                font-common-heavy text-28px lg:text-59px text-white hover:text-footerBtn hover:bg-white transition-all duration-500 border-4 border-footerBtn"
            >
              خلاصه کتاب
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
