import React from 'react';

export default function Heading2({ title }) {
  return (
    <div className="inline  relative">
      <p className="font-common-heading2 inline m-0 p-0">{title}</p>
      <div className="w-full bg-[#FDF0DF] absolute h-[30%] bottom-[20%] -z-10"></div>
    </div>
  );
}
