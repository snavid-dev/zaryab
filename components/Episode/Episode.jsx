'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';

import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Episode({ data, isVisible }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    setTimeout(() => {
      setIsHovered(false);
    }, 500);
  };

  useGSAP(() => {
    if (isVisible && data) {
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);
  return (
    //     main container of the card
    <div
      className="col-span-6 lg:col-span-3 xl:col-span-4 p-5 md:p-10 lg:p-7 border-4 border-black flex flex-col items-end mt-5 tranlsate-y-200px opacity-0"
      ref={cardRef}
    >
      {/*  it has 6 rows  */}
      <div
        className="w-full h-260px md:h-570px lg:h-260px xl:h-270px 2xl:h-370px border-4 border-black relative hover:border-footerBtn transition-all duration-700"
        onMouseEnter={handleMouseEnter}
      >
        {data?.featured_image ? (
          <Image
            src={data?.featured_image}
            alt=""
            layout="fill"
            objectFit="cover"
            className={`absolute transition-all duration-700
                ${isHovered ? 'opacity-50' : 'opacity-100'}`}
          />
        ) : (
          <div className="h-full w-full flex justify-center items-center">
            story image not found
          </div>
        )}
      </div>
      <div className="w-full font-new-extra-bold text-36px md:text-76px lg:text-50px mt-3 rtl">
        {data?.title}
      </div>
      <div className="w-full flex justify-end mt-3">
        <div className="font-common-heavy text-25px">
          قسمت {data?.episode_title}
        </div>
      </div>
      <div className="w-full mt-3">
        <Link
          href={`/story/${data?.slug}`}
          className="w-full py-2 font-common-heavy text-20px md:text-43px lg:text-28px border-2 border-black flex justify-center items-center
                bg-black text-white hover:bg-white hover:text-black transition-all duration-700"
        >
          خواندن داستان
        </Link>
      </div>
    </div>
  );
}
