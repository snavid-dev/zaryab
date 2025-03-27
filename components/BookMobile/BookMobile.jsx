'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Heading2 from '../Heading2/Heading2';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BookMobile() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/books/featured');
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          fetchData();
          setHasFetched(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasFetched]);

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
    if (isVisible && data) {
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
  }, [isVisible, data]);

  return (
    <div
      className="w-full"
      ref={ref}
    >
      {isVisible && (
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
      )}
    </div>
  );
}
