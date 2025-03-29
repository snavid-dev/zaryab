'use client';
import React, { useEffect, useRef, useState } from 'react';
import StoryHarizontalCard from '../StoryHarizontalCard/StoryHarizontalCard';
import Mail from '../Mail/Mail';
import ArrowLink from '../ArrowLink/ArrowLink';
import axios from '@/utils/api';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StoryMail({ data, newMail, oldMailData, newArticle }) {
  // animation
  const mailRef = useRef(null);
  const linkRef = useRef(null);

  useGSAP(() => {
    if (data) {
      gsap.to(mailRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: mailRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(linkRef.current, {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: linkRef.current,
          start: 'top 90%',
          end: 'top 50%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, [data]);

  return (
    <div className="w-full flex justify-center">
      <div className="mt-50px main-container rtl">
        <div className="col-span-6 xl:col-span-9">
          {Array.isArray(data) &&
            data?.map((data, index) => (
              <StoryHarizontalCard
                key={index}
                data={data}
              />
            ))}
        </div>
        <div
          className="hidden xl:block xl:col-span-3 translate-y-200px opacity-0"
          ref={mailRef}
        >
          <Mail
            newLetter={newMail}
            oldMailData={oldMailData}
            newArticle={newArticle}
          />
        </div>
        <div className="col-span-6 xl:col-span-12">
          <div
            className="flex justify-start translate-y-200px opacity-0"
            ref={linkRef}
          >
            <ArrowLink
              title="همه آثار"
              path="/writing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
