'use client';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurAuthorCard({ data }) {
  const ref = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(ref.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
          end: 'top 30%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);
  return (
    <div
      ref={ref}
      className="col-span-6 xl:col-span-6  p-4 border-4 border-black translate-y-200px opacity-0 ltr"
    >
      {data?.slug && (
        <Link
          href={`/authors/${data?.slug}`}
          className="w-full h-full flex flex-row-reverse md:justify-between"
        >
          {/*  it has two columns  */}
          <div className="relative w-1/3 lg:w-1/4 xl:w-1/3 h-100px md:h-240px lg:h-170px xl:h-170px 2xl:h-220px overflow-hidden">
            {data?.image ? (
              <Image
                src={data?.image || '/assets/img/authorPic.png'}
                alt={data?.name ? data?.name : 'not found'}
                layout="fill"
                objectFit="cover"
                className="absolute hover:scale-110 transition-all duration-300"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center"></div>
            )}
          </div>
          <div className="flex flex-col items-end justify-center w-2/3 lg:w-3/4 xl:w-2/3 pr-4">
            <div>
              {data?.name && (
                <h3 className="font-pashto text-25px md:text-50px xl:text-30px">
                  {data?.name}
                </h3>
              )}
            </div>
            <div className="flex flex-row-reverse justify-between w-full mt-2">
              <p className="font-pashto text-6px md:text-16px xl:text-12px 2xl:18px">
                <b className="font-common-med text-6px  md:text-16px xl:text-12px 2xl:18px ml-1">
                  وظیفه:
                </b>
                {data?.job && data?.job}
              </p>
              <p className="font-pashto text-6px  md:text-16px xl:text-12px 2xl:18px">
                <b className="font-common-med text-6px  md:text-16px xl:text-12px 2xl:18px ml-1">
                  شهر:
                </b>
                {data?.location && data?.location}
              </p>
              <p className="font-pashto text-6px  md:text-16px xl:text-12px 2xl:18px">
                <b className="font-common-med text-6px  md:text-16px xl:text-12px 2xl:18px ml-1">
                  تعداد آثار:
                </b>
                {data?.total_letters && data?.total_letters}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
