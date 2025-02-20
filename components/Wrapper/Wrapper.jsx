'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Wrapper({ children }) {
  const pathname = usePathname();
  return (
    <div
      className={`w-full absolute ${
        pathname === '/about' ? 'bg-black' : 'bg-white'
      }`}
    >
      {children}
    </div>
  );
}
