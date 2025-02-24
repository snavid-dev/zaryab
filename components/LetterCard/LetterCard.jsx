'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function LetterCard() {
  return (
    // the letter cord main container
    <div className="flex flex-col col-span-6 md:col-span-3 xl:col-span-4 mt-7">
      {/*  it has 3 rows  */}
      <div className="relative w-full h-490px md:h-500px xl:h-530px 2xl:h-680px">
        <Image
          src="/assets/img/mail.png"
          alt="letter"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
      <div className="mt-5">
        <div className="flex rtl items-center">
          <p className="font-common-heavy text-30px md:text-25px lg:text-30px xl:text-20px ml-1">
            عنوان:
          </p>
          <p className="font-common-regular text-30px md:text-25px lg:text-30px xl:text-20px">
            به یاد نادیه انجمن
          </p>
        </div>
        <div className="flex rtl items-center">
          <p className="font-common-heavy text-30px md:text-25px lg:text-30px xl:text-20px ml-1">
            شماره:
          </p>
          <p className="font-common-regular text-30px md:text-25px lg:text-30px xl:text-20px">
            5
          </p>
        </div>
        <div className="flex rtl items-center">
          <p className="font-common-heavy text-30px md:text-25px lg:text-30px xl:text-20px ml-1">
            تاریخ نشر:
          </p>
          <p className="font-common-regular text-30px md:text-25px lg:text-30px xl:text-20px">
            1403/06/04
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-row-reverse justify-between items-center mt-5">
        <Link
          href="#"
          className="w-[47%] py-1 text-white flex justify-center items-center bg-footerBtn font-common-lg text-28px
                border-2 border-footerBtn hover:bg-white hover:text-footerBtn transition-all duration-700"
        >
          دانلود
        </Link>
        <Link
          href="#"
          className="w-[47%] py-1 text-white flex justify-center items-center bg-black font-common-lg text-28px
                border-2 border-black hover:bg-white hover:text-black transition-all duration-700"
        >
          خواندن
        </Link>
      </div>
    </div>
  );
}
