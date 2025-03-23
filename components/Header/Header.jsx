'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import Links from '../Links/Links';
import {
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Header() {
  const [menu, setMenu] = useState(true);
  const pathname = usePathname();

  return (
    <header
      className={`w-full flex justify-center overflow-y-hidden xl:h-150px pt-20px md:pt-10px xl:pt-20px ${
        menu ? 'h-100px' : 'h-500px'
      } ${
        pathname === '/about' ? 'bg-black' : 'bg-white'
      }  transition-all duration-700 absolute top-0 z-50 xl:relative`}
    >
      <div
        className={`main-container border-b-2 pb-10px xl:pb-0 ${
          pathname === '/about' ? 'border-white' : 'border-black'
        }`}
      >
        {/* mobile menu icon */}
        <div className="col-span-1 xl:hidden mt-2 md:mt-4">
          <div
            className="w-12 h-8 flex flex-col justify-between items-end cursor-pointer xl:hidden mt-1 lg:mt-1"
            onClick={() => setMenu(!menu)}
          >
            <div
              className={`w-10 h-1 ${
                menu ? '' : 'translate-y-3 -rotate-45'
              } transition-all duration-700 delay-700 
          ${pathname === '/about' ? 'bg-white' : 'bg-black'}`}
            ></div>
            <div
              className={`h-1 ${
                menu ? 'w-10' : 'w-0'
              } transition-all duration-700 
          ${pathname === '/about' ? 'bg-white' : 'bg-black'}`}
            ></div>
            <div
              className={`w-10 h-1 ${
                menu ? '' : '-translate-y-4 rotate-45'
              } transition-all duration-700 delay-700
          ${pathname === '/about' ? 'bg-white' : 'bg-black'}`}
            ></div>
          </div>
        </div>
        {/* search user links container */}
        <div className="col-span-10 mt-20px hidden xl:block">
          {/* user and search */}
          <div className="w-full grid grid-cols-10 gap-30px">
            <div className="col-span-1 ml-40px">
              {/* <Link
                href={'#'}
                className="cursor-pointer"
              >
                <Image
                  src={`${
                    pathname === '/about'
                      ? '/assets/svg/user-icon-white.svg'
                      : '/assets/svg/user-icon.svg'
                  }`}
                  alt="user icon"
                  width={25}
                  height={25}
                />
              </Link> */}
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-6">
              <Link href="/search">
                <div
                  className={`flex border-b-2 w-90% mx-auto ${
                    pathname === '/about' ? 'border-white' : 'border-black'
                  }`}
                >
                  <div className="w-full h-5"></div>
                  <IoIosSearch
                    className={`text-xl ${
                      pathname === '/about' ? 'text-white' : 'text-black'
                    }`}
                  />
                </div>
              </Link>
            </div>
          </div>
          {/* links */}
          <div className="w-full mt-20px">
            <nav className="w-full">
              <ul className="grid grid-cols-8 font-common-med rtl gap-10px">
                <Links
                  title="خانه"
                  link={'/'}
                />
                <Links
                  title="آثار ادبی"
                  link={'/writing'}
                />
                <Links
                  title="مقاله ها"
                  link={'/articles'}
                />
                <Links
                  title="نقد و نظر ها"
                  link={'/review'}
                />
                <Links
                  title="کتاب صوتی"
                  link={'/podcasts'}
                />
                <Links
                  title="مجله ها"
                  link={'/magazines'}
                />
                <Links
                  title="درباره ما"
                  link={'/about'}
                />
                {/* social media links */}
                <div className="col-span-1 grid grid-cols-5 mt-2">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61553957567902&mibextid=LQQJ4d&rdid=MGyfNFI3DjL04kdP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DvMH6kW9F%2F%3Fmibextid%3DLQQJ4d#"
                    className="col-span-1"
                  >
                    <FaFacebook
                      className={`text-20px ${
                        pathname === '/about' ? 'text-white' : 'text-black'
                      }`}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/avaye_zaryab?igsh=a2tnamZxNTdrdWlz&utm_source=qr"
                    className="col-span-1"
                  >
                    <FaInstagram
                      className={`text-20px ${
                        pathname === '/about' ? 'text-white' : 'text-black'
                      }`}
                    />
                  </Link>
                  <Link
                    href="https://t.me/avaye_zaryab_admin"
                    className="col-span-1"
                  >
                    <FaTelegram
                      className={`text-20px ${
                        pathname === '/about' ? 'text-white' : 'text-black'
                      }`}
                    />
                  </Link>
                  <Link
                    href="https://wa.me/+905357849662"
                    className="col-span-1"
                  >
                    <FaWhatsapp
                      className={`text-20px ${
                        pathname === '/about' ? 'text-white' : 'text-black'
                      }`}
                    />
                  </Link>
                  <Link
                    href="https://x.com/avayezaryab?s=21"
                    className="col-span-1"
                  >
                    <FaXTwitter
                      className={`text-20px ${
                        pathname === '/about' ? 'text-white' : 'text-black'
                      }`}
                    />
                  </Link>
                </div>
              </ul>
            </nav>
          </div>
        </div>
        {/* mobile nothing between logo and menu icon */}
        <div className="col-span-4 xl:hidden"></div>
        {/* logo container */}
        <div className="col-span-1 xl:col-span-2">
          <div className="w-full xl:w-60% h-60px md:h-80px xl:h-100px relative">
            <Link href="/">
              <Image
                src={`${
                  pathname === '/about'
                    ? '/assets/svg/whiteLogo.svg'
                    : '/assets/svg/logo.svg'
                }`}
                alt="logo"
                layout="fill"
                objectFit="contain"
                className="absolute"
              />
            </Link>
          </div>
        </div>
        {/* mobile links */}
        <div className="col-span-6 relative xl:hidden">
          <nav className="w-full">
            <ul className="w-full font-common-med rtl">
              <Links
                title="خانه"
                link={'/'}
                onClick={() => setMenu(!menu)}
              />
              <Links
                title="آثار ادبی"
                link={'/writing'}
                onClick={() => setMenu(!menu)}
              />
              <Links
                title="مقاله ها"
                link={'/articles'}
                onClick={() => setMenu(!menu)}
              />
              <Links
                title="نقد و نظر ها"
                link={'/review'}
                onClick={() => setMenu(!menu)}
              />
              <Links
                title="کتاب صوتی"
                link={'/podcasts'}
                onClick={() => setMenu(!menu)}
              />
              <Links
                title="مجله ها"
                link={'/magazines'}
                onClick={() => setMenu(!menu)}
              />
              <Links
                title="درباره ما"
                link={'/about'}
                onClick={() => setMenu(!menu)}
              />
              {/* social media links */}
              <div className="col-span-6 w-40% grid grid-cols-5 text-center mt-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61553957567902&mibextid=LQQJ4d&rdid=MGyfNFI3DjL04kdP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DvMH6kW9F%2F%3Fmibextid%3DLQQJ4d#"
                  className="col-span-1"
                >
                  <FaFacebook
                    className={`text-20px ${
                      pathname === '/about' ? 'text-white' : 'text-black'
                    }`}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/avaye_zaryab?igsh=a2tnamZxNTdrdWlz&utm_source=qr"
                  className="col-span-1"
                >
                  <FaInstagram
                    className={`text-20px ${
                      pathname === '/about' ? 'text-white' : 'text-black'
                    }`}
                  />
                </Link>
                <Link
                  href="https://t.me/avaye_zaryab_admin"
                  className="col-span-1"
                >
                  <FaTelegram
                    className={`text-20px ${
                      pathname === '/about' ? 'text-white' : 'text-black'
                    }`}
                  />
                </Link>
                <Link
                  href="https://wa.me/+905357849662"
                  className="col-span-1"
                >
                  <FaWhatsapp
                    className={`text-20px ${
                      pathname === '/about' ? 'text-white' : 'text-black'
                    }`}
                  />
                </Link>
                <Link
                  href="https://x.com/avayezaryab?s=21"
                  className="col-span-1"
                >
                  <FaXTwitter
                    className={`text-20px ${
                      pathname === '/about' ? 'text-white' : 'text-black'
                    }`}
                  />
                </Link>
              </div>
              <div className="col-span-6 mt-20px">
                <Link
                  href="/search"
                  onClick={() => setMenu(!menu)}
                >
                  <div
                    className={`flex border-b-2  w-full rtl ${
                      pathname === '/about' ? 'border-white' : 'border-black'
                    }`}
                  >
                    <IoIosSearch
                      className={`text-30px ${
                        pathname === '/about' ? 'text-white' : 'text-black'
                      }`}
                    />
                    <div
                      type="text"
                      className={`outline-none w-full rtl px-1  ${
                        pathname === '/about'
                          ? 'bg-black text-white'
                          : 'bg-white text-black'
                      }`}
                    />
                  </div>
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
