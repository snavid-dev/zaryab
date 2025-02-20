import React from 'react';

export default function Heading1({ title }) {
  return (
    <div className="inline  relative p-1px box-border">
      <p className={`font-common-lg inline text-26px md:28px xl:text-60px`}>
        {title}
      </p>
      <div className="w-full bg-heading1 h-50% absolute bottom-0 -z-10"></div>
    </div>
  );
}
