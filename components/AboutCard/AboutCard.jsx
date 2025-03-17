'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

export default function AboutCord({ title, text, data, isVisible }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // animation
  const cardRef = useRef(null);

  useGSAP(() => {
    if (data && isVisible) {
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
      className={`col-span-6 xl:col-span-12 overflow-y-hidden  border-b-4 border-t-4 border-white transition-all duration-700 translate-y-200px opacity-0
            ${
              dropdownOpen ? 'h-full' : 'h-12 md:h-14 lg:h-20'
            } transition-all duration-700`}
      ref={cardRef}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div
          className={`${
            dropdownOpen ? 'rotate-180' : 'rotate-0'
          } transition-all duration-700`}
        >
          <svg
            width="54"
            height="27"
            viewBox="0 0 23 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 1L11.5 12L1 1"
              stroke="#FFFCF7"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="font-common-heavy text-30px md:text-40px lg:text-46px text-white">
          {title}
        </div>
      </div>
      <div
        className="rtl py-7 text-white font-common-regular text-20px md:text-30px lg:text-46px"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  );
}
