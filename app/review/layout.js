import React from 'react';

export const metadata = {
  title: 'نقد و نظر ها',
  description: 'نقد و نظر کتاب ها ، اشعار و غیره آثار ادبی',
  openGraph: {
    title: 'نقد و نظر ها',
    description: 'نقد و نظر کتاب ها ، اشعار و غیره آثار ادبی',
    url: 'https://zaryb3.vercel.app',
    siteName: 'وبسایت ادبی آوای زریاب',
    images: [
      {
        url: 'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        width: 1129,
        height: 750,
        alt: 'نقد و نظر ها',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: 'نقد و نظر ها',
    description: 'نقد و نظر کتاب ها ، اشعار و غیره آثار ادبی',
    images: [
      'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://zaryb3.vercel.app',
  },

  keywords: [
    'ادبیات',
    'شعر',
    'داستان',
    'رمان',
    'نثر',
    'نقد ادبی',
    'سبک نوشتاری',
    'متن ادبی',
    'شعر معاصر',
    'ادبیات کلاسیک',
    'نویسندگی خلاق',
    'تحلیل داستان',
    'روایت‌پردازی',
    'سبک‌های ادبی',
    'کتاب‌خوانی',
    'معرفی کتاب',
    'بهترین کتاب‌های ادبی',
    'آموزش نویسندگی',
    'الهام برای نویسندگی',
    'جملات زیبا',
    'نقل‌قول‌های ادبی',
    'متن‌های عاشقانه',
    'متن‌های انگیزشی',
    'نقد و نظر آثار ادبی',
  ],

  authors: [
    {
      name: 'Cyborg Tech Creative Agency',
      url: 'https://cyborgtech.co/',
    },
  ],

  manifest: '/site.webmanifest',
};

export default function ReviewPageLayout({ children }) {
  return <div>{children}</div>;
}
