'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import Heading1 from '../Heading1/Heading1';
import axios from '@/utils/api';

// gsap.registerPlugin(ScrollTrigger);

export default function BookDesk() {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  // data states
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/books/featured');
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  const handleDownload = () => {
    const fileUrl = data?.pdf;

    // Create a temporary <a> element to simulate a download
    const link = document.createElement('a');
    link.href = fileUrl;

    link.download = fileUrl.split('/')[fileUrl.split('/').length - 1]; // Specify the file name for download
    document.body.appendChild(link); // Append link to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up by removing the link
  };

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
            {data?.featured_image ? (
              <Image
                src={data?.featured_image}
                alt=""
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                image of the book not found
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:block md:col-span-1 xl:hidden"></div>
        <div className="col-span-6">
          <div className="flex flex-col w-full items-start">
            <h3
              ref={subtitleRef}
              className="font-common-lg text-30px xl:text-65px 2xl:text-92px flex flex-col items-end justify-between lg:mt-5"
            >
              {data?.title}
            </h3>
            <div
              ref={textRef}
              dangerouslySetInnerHTML={{
                __html: data?.excerpt,
              }}
              className="rtl mt-7 font-common-regular text-14px xl:text-20px 2xl:text-28px"
            ></div>
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
          onClick={handleDownload}
          className="w-full h-[50px] lg:h-[100px] bg-black flex justify-center items-center mt-7
                font-common-heavy text-28px lg:text-59px text-white hover:text-black hover:bg-white transition-all duration-500 border-4 border-black"
        >
          دانلود کتاب
        </Link>

        <Link
          href={`/literarywritings/book/${data?.slug}`}
          className="w-full h-[50px] lg:h-[100px] bg-footerBtn flex justify-center items-center mt-7
                font-common-heavy text-28px lg:text-59px text-white hover:text-footerBtn hover:bg-white transition-all duration-500 border-4 border-footerBtn"
        >
          خلاصه کتاب
        </Link>
      </div>
    </div>
  );
}
