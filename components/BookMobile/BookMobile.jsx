'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Heading2 from '../Heading2/Heading2';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BookMobile({ data }) {
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

  const cardRef = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    <div className="w-full">
      <div
        className="flex flex-col w-full items-end translate-y-200px opacity-0"
        ref={cardRef}
      >
        <div>
          <Heading2 title="کتاب هفته" />
        </div>
        <div className="w-full flex flex-col ">
          <h3 className="font-pashto w-full text-28px text-right mt-3">
            {data?.title && <p>{data?.title}</p>}
          </h3>

          <div className="w-full items-end mt-4 md:mt-7">
            <div className="relative w-full h-470px md:h-490px">
              {data?.featured_image ? (
                <Image
                  src={data?.featured_image}
                  alt={data?.title ? data?.title : 'not found'}
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              ) : (
                <div className="h-full w-full flex justify-center items-center"></div>
              )}
            </div>
            <div className="flex justify-between mt-7 md:mt-9">
              {data?.slug && (
                <Link
                  href={`/book/${data?.slug}`}
                  className="w-[45%] h-10 border-footerBtn border-2 flex justify-center items-center
                       font-common-lg text-28px text-footerBtn"
                >
                  خلاصه
                </Link>
              )}
              <Link
                onClick={handleDownload}
                href="#"
                className="w-[45%] h-10 bg-black flex justify-center font-common-lg text-28px items-center text-white"
              >
                دانلود
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
