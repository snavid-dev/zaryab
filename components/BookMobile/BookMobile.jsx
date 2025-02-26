'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Heading2 from '../Heading2/Heading2';
import axios from '@/utils/api';

export default function BookMobile() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);

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

  console.log(data);

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
    <div className="flex flex-col w-full items-end">
      <div>
        <Heading2 title="کتاب هفته" />
      </div>
      <div className="w-full flex flex-col ">
        <h3 className="font-common-heading w-full text-28px text-right mt-3">
          <p>{data?.title}</p>
        </h3>

        <div className="w-full items-end mt-4 md:mt-7">
          <div className="relative w-full h-470px md:h-490px">
            {data?.featured_image ? (
              <Image
                src={data?.featured_image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            ) : (
              <div className="h-full w-full flex justify-center items-center">
                the image of the book is not found
              </div>
            )}
          </div>
          <div className="flex justify-between mt-7 md:mt-9">
            <Link
              href={`/literarywritings/book/${data?.slug}`}
              className="w-[45%] h-10 bg-black flex justify-center font-common-lg text-28px items-center text-white"
            >
              خلاصه
            </Link>
            <Link
              onClick={handleDownload}
              href="#"
              className="w-[45%] h-10 border-footerBtn border-2 flex justify-center items-center
                       font-common-lg text-28px text-footerBtn"
            >
              دانلود
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
