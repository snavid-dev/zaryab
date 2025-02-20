'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Heading2 from '../Heading2/Heading2';

export default function BookMobile() {
  const ref = useRef(null);

  return (
    <div className="flex flex-col w-full items-end">
      <div>
        <Heading2 title="کتاب هفته" />
      </div>
      <div className="w-full flex flex-col ">
        <h3 className="font-common-heading w-full text-28px text-right mt-3">
          <p>هریپاتر و سنگ فلاسفر</p>
        </h3>

        <div className="w-full items-end mt-4 md:mt-7">
          <div className="relative w-full h-470px md:h-490px">
            <Image
              src="/assets/img/book.png"
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          </div>
          <div className="flex justify-between mt-7 md:mt-9">
            <Link
              href="/literarywritings/book/bookid"
              className="w-[45%] h-10 bg-black flex justify-center font-common-lg text-28px items-center text-white"
            >
              خلاصه
            </Link>
            <Link
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
