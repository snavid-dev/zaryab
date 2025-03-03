import Link from 'next/link';
import React from 'react';

export default function OldMails({ data }) {
  return (
    <div className="w-full flex flex-col items-start mt-7">
      <h3 className="font-common-med text-3xl rtl">
        <Link href={`/letters/${data?.slug}`}>{data?.title}</Link>
      </h3>
      <p className="text-sm font-common-thin">{data?.release_date}</p>
    </div>
  );
}
