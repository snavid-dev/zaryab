'use client';
import { useRef } from 'react';

export default function HarizontalLine() {
  const ref = useRef(null);

  return (
    <div className="main-container mt-20 mb-20">
      <div className="col-span-6 xl:col-span-12">
        <hr className="border-black w-full border-1" />
      </div>
    </div>
  );
}
