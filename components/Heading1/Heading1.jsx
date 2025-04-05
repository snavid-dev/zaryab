import React from 'react';

export default function Heading1({ title, pashto }) {
  return (
    <div className="inline relative p-1px box-border">
      <p
        className={`inline text-26px md:28px xl:text-60px ${
          pashto ? 'font-pashto' : 'font-common-lg'
        }`}
      >
        {title}
      </p>
      {/* <div className="w-full bg-heading1 h-50% absolute bottom-0 -z-10"></div> */}
    </div>
  );
}
