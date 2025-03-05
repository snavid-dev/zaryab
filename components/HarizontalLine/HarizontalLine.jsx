'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HarizontalLine() {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      width: '100%',
      ease: 'power2.out',
      duration: 2,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 50%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div className="main-container mt-20 mb-20">
      <div className="col-span-6 xl:col-span-12">
        <hr
          className="border-black w-0 border-1"
          ref={ref}
        />
      </div>
    </div>
  );
}
