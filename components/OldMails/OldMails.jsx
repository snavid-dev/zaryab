import Link from 'next/link';
import React from 'react';

export default function OldMails({ data }) {
  return (
    <div className="w-full flex flex-col items-start mt-7">
      {data?.slug && data?.title && (
        <h3 className="font-pashto text-3xl rtl">
          <Link href={`/magazines/${data?.slug}`}>{data?.title}</Link>
        </h3>
      )}
      {data?.release_date && (
        <p className="text-sm font-pashto">{data?.release_date}</p>
      )}
    </div>
  );
}
