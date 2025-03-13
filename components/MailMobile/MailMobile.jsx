'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading2 from '../Heading2/Heading2';
import axios from '@/utils/api';

export default function MailMobile() {
  const [newLetter, setNewLetter] = useState(null);
  const [Error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/letters/?type=non-archive&per_page=1`
        );
        setNewLetter(response.data.data[0]);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-end">
      {/* it has three rows */}
      <div className="w-full flex flex-col items-end">
        <Heading2 title="نامه جدید" />
        <p className="text-3xl mt-7">{newLetter?.release_date}</p>
        <div className="relative w-full h-490px md:h-500px mt-7">
          {newLetter?.featured_image ? (
            <Image
              src={newLetter?.featured_image}
              alt="new magazine"
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          ) : (
            <div className="h-full w-full flex justify-center items-center"></div>
          )}
        </div>
        <Link
          href={`/letters/${newLetter?.slug}`}
          className="w-full h-10 flex justify-center items-center mt-7 border border-black font-common-lg text-28px
          bg-white text-black transition-all duration-300"
        >
          خواندن نامه
        </Link>
      </div>
    </div>
  );
}
