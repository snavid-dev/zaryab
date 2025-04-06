'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { LuChevronRight } from 'react-icons/lu';
import { LuChevronLeft } from 'react-icons/lu';
import { IoCloseOutline } from 'react-icons/io5';
import Heading1 from '@/components/Heading1/Heading1';
import ArchivedLettersSection from '@/components/ArchiveLettersSection/ArchiveLettersSection';
import Podcasts from '@/components/Podcasts/Podcasts';
import LetterSliderPagesCard from '@/components/LetterSliderPagesCard/LetterSliderPagesCard';
import SmallAd from '@/components/SmallAd/SmallAd';
import FullAd from '@/components/FullAd/FullAd';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MagazinePageCard from '@/components/MagazinePageCard/MagazinePageCard';

gsap.registerPlugin(ScrollTrigger);

export default function MyMagazinePage({ data, podcastMobileData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);

  const handleForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.images.length);
  };

  const handleBackward = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + data?.images.length) % data?.images.length
    );
  };

  function modalHandle(index) {
    setModal(true);
    setCurrentIndex(index);
  }

  // animation
  const numberRef = useRef(null);
  const titleRef = useRef(null);
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(numberRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: numberRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

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

      gsap.to(firstLineRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: firstLineRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(secondLineRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: secondLineRef.current,
          start: 'top 90%',
          end: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    // main container of the page
    <div className="w-full min-h-100vh">
      <div className="flex flex-col items-center">
        {/*  the number  */}
        <div className="main-container mt-28 xl:mt-14">
          <div
            className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
            ref={numberRef}
          >
            {data?.number && <Heading1 title={data?.number} />}
          </div>
        </div>
        {/*  title of the letter  */}
        <div className="main-container mt-7">
          <div
            className="col-span-6 xl:col-span-12 rtl translate-y-200px opacity-0"
            ref={titleRef}
          >
            {data?.title && (
              <Heading1
                title={data?.title}
                pashto={true}
              />
            )}
          </div>
        </div>
        {/* border */}
        <div
          className="main-container h-1 bg-black mt-7 translate-y-200px opacity-0"
          ref={firstLineRef}
        ></div>
        {/*  the letter pictures  */}

        <div className="main-container">
          {Array.isArray(data?.images) &&
            data?.images?.map((letter, index) => (
              <div
                className="col-span-6 md:col-span-3 xl:col-span-3"
                key={index}
                onClick={() => modalHandle(index)}
              >
                <MagazinePageCard letter={letter} />
              </div>
            ))}
        </div>
        {/* full ad */}
        {/* <FullAd /> */}

        <div
          className="main-container h-1 bg-black mt-14 translate-y-200px opacity-0"
          ref={secondLineRef}
        ></div>

        {/*  the letter archive  */}
        {/* <div className="mt-14">
            <ArchivedLettersSection />
          </div>
    
          <div className="main-container h-1 bg-black mt-14"></div> */}
        {/*  podcast section  */}

        <div className="mt-14 mb-14">
          <Podcasts data={podcastMobileData?.data} />
        </div>
        {/* small ad */}
        {/* <SmallAd /> */}

        {/*  the image slider section  */}
        <div
          className={`fixed top-0 bottom-0 left-0 right-0 bg-modal flex flex-row z-50 ${
            modal ? 'block' : 'hidden'
          }`}
        >
          <div className="relative w-full h-full py-5 overflow-hidden flex items-center justify-center">
            {/* Images */}
            <div className="w-full h-full relative">
              {Array.isArray(data?.images) &&
                data?.images?.map((image, index) => (
                  <LetterSliderPagesCard
                    image={image?.image}
                    index={index}
                    currentIndex={currentIndex}
                    key={index}
                  />
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handleBackward}
              className="absolute text-60px left-4 bottom-0 md:top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <LuChevronLeft />
            </button>
            <button
              onClick={handleForward}
              className="absolute text-60px right-4 bottom-0 md:top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              <LuChevronRight />
            </button>
          </div>
          <div
            className="fixed top-2 text-30px text-white right-2 cursor-pointer"
            onClick={() => setModal(false)}
          >
            <IoCloseOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
