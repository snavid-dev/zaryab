'use client';

import Image from 'next/image';
import { use, useEffect, useRef, useState } from 'react';

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

export default function LetterSinglePage({ params }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

  const param = use(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/v1/letters/${param.magazine}`);
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);
  console.log(data, 'data');

  const handleForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.images.length);
  };

  const handleBackward = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % data?.images.length
    );
  };

  return (
    // main container of the page
    <div className="flex flex-col items-center">
      {/*  the number  */}
      <div className="main-container mt-14">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title={data?.number} />
        </div>
      </div>
      {/*  title of the letter  */}
      <div className="main-container mt-7">
        <div className="col-span-6 xl:col-span-12 rtl">
          <Heading1 title={data?.title} />
        </div>
      </div>
      {/* border */}
      <div className="main-container h-1 bg-black mt-7"></div>
      {/*  the letter pictures  */}

      <div className="main-container">
        {data?.images.map((letter, index) => (
          <div
            className="col-span-6 md:col-span-3 xl:col-span-3 flex flex-col items-center mt-7 cursor-pointer"
            onClick={() => setModal(true)}
            key={index}
          >
            <div className="w-full flex justify-center items-center p-3 border-4 border-black">
              <div className="w-full h-380px md:h-390px xl:h-290px 2xl:h-390px m-3 relative">
                <Image
                  src={letter?.image}
                  alt="letter page"
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </div>
            </div>
            <div className="text-30px border-4 border-black px-6 py-2 mt-3">
              {letter?.number}
            </div>
          </div>
        ))}
      </div>
      {/* full ad */}
      {/* <FullAd /> */}

      <div className="main-container h-1 bg-black mt-14"></div>

      {/*  the letter archive  */}
      <div className="mt-14">
        <ArchivedLettersSection />
      </div>

      <div className="main-container h-1 bg-black mt-14"></div>
      {/*  podcast section  */}

      <div className="mt-14 mb-14">
        <Podcasts />
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
            {data?.images.map((image, index) => (
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
  );
}
