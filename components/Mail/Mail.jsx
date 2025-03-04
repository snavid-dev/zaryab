'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Heading2 from '../Heading2/Heading2';
import OldMails from '../OldMails/OldMails';
import NewArticle from '../NewArticle/NewArticle';
import axios from '@/utils/api';

export default function Mail() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/letters/?type=archive&per_page=4`
        );
        setData(response.data.data);
        setTotalPage(response.data.meta.pages);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  const [data2, setData2] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/v1/articles?per_page=4`);
        setData2(response.data.data);
        setTotalPage(response.data.meta.pages);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  const [newLetter, setNewLetter] = useState(null);
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
    <div className="w-full rtl">
      {/* it has three rows */}
      <div className="w-full flex flex-col items-start">
        <Heading2 title="نامه جدید" />
        <p className="mt-5 md:mt-0">{newLetter?.release_date}</p>
        <div className="relative w-full xl:h-400px 2xl:h-500px mt-5 md:mt-0">
          {newLetter?.featured_image ? (
            <Image
              src={newLetter?.featured_image}
              alt=""
              fill
              className="absolute object-cover"
            />
          ) : (
            <div className="h-full w-full flex justify-center items-center">
              image not found
            </div>
          )}
        </div>
        <Link
          href={`/letters/${newLetter?.slug}`}
          className="w-full h-10 flex justify-center items-center border border-black font-common-lg text-27px text-black bg-white lg:text-white lg:bg-black
          lg:hover:bg-white lg:hover:text-black transition-all duration-300"
        >
          خواندن نامه
        </Link>
      </div>
      <div className="w-full hidden md:flex flex-col items-start mt-7">
        <Heading2 title="نامه های قدیم" />
        {data?.map((data, index) => (
          <OldMails
            data={data}
            key={index}
          />
        ))}
      </div>
      <div className="w-full hidden md:flex flex-col items-start mt-7">
        <Heading2 title="مقاله های جدید" />
        {data2?.map((data, index) => (
          <NewArticle
            data={data}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
