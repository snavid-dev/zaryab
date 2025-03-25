'use client';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function PodcastCard({ data, isVisible }) {
  const ref = useRef(null);

  useGSAP(() => {
    if (isVisible && data) {
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
  }, [isVisible, data]);

  return (
    // it has two rows
    <div
      className="col-span-6 md:col-span-3 xl:col-span-4 mt-7 md:mt-0 border-2 border-black p-5 translate-y-200px opacity-0"
      ref={ref}
    >
      {/*  it has two rows  */}
      {data?.slug && (
        <Link
          className="w-full"
          href={`/podcasts/${data?.slug}` || '/podcasts/mypodcast'}
        >
          <div className="w-full flex flex-col items-end">
            {/*  it has two rows  */}
            <div className="w-full h-300px md:h-320px xl:h-330px 2xl:h-450px relative overflow-hidden">
              {data?.image ? (
                <Image
                  src={data?.image}
                  alt={data?.name ? data?.name : 'not found'}
                  layout="fill"
                  objectFit="cover"
                  className="absolute
                    hover:scale-110 transition-all duration-300"
                />
              ) : (
                <div className="h-full w-full flex justify-center items-center"></div>
              )}
            </div>
            <div className="w-full">
              {data?.name && (
                <h3 className="font-common-heavy rtl text-30px md:text-36px mt-3 w-full rtl">
                  {data?.name}
                </h3>
              )}
            </div>
          </div>
          <div>
            {/*  it has tow rows  */}
            <div className="mt-3">
              <div className="rtl flex">
                <p className="font-common-heavy text-xl text-20px ml-1">
                  گوینده:
                </p>
                {data?.host && (
                  <p className="font-common-regular text-xl text-20px ">
                    {data?.host}
                  </p>
                )}
              </div>
              <div className="rtl flex">
                <p className="font-common-heavy text-xl text-20px ml-1">
                  نویسنده/شاعر:
                </p>
                {data?.guest && (
                  <p className="font-common-regular text-xl text-20px ">
                    {data?.guest}
                  </p>
                )}
              </div>
            </div>
            <div className="rtl flex mt-3">
              <div className="flex ml-4">
                <p className="font-common-heavy text-12px md:text-18px ml-1">
                  تاریخ:
                </p>
                {data?.date && (
                  <p className="font-common-regular text-12px md:text-18px">
                    {data?.date}
                  </p>
                )}
              </div>
              <div className="flex">
                <p className="font-common-heavy text-12px md:text-18px ml-1">
                  مدت زمان:
                </p>
                <p className="font-common-regular text-12px md:text-18px">
                  {data?.duration && (
                    <span className="font-common-heavy text-12px md:text-18px">
                      {data?.duration}
                    </span>
                  )}
                  دقیقه
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
