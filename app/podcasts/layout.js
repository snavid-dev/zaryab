import React from 'react';

export const metadata = {
  title: 'کتاب های صوتی',
  description: 'کتاب های صوتی آوای زریاب',
  openGraph: {
    title: 'کتاب های صوتی',
    description: 'کتاب های صوتی آوای زریاب',
    url: 'https://avayezaryab.cyborgtech.co/podcasts',
    siteName: 'وبسایت ادبی آوای زریاب',
    images: [
      {
        url: 'https://canin-cdn.cyborgtech.co/zaryab/podcastPage.PNG',
        width: 1129,
        height: 750,
        alt: 'کتاب های صوتی',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: 'کتاب های صوتی',
    description: 'کتاب های صوتی آوای زریاب',
    images: ['https://canin-cdn.cyborgtech.co/zaryab/podcastPage.PNG'],
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://avayezaryab.cyborgtech.co/',
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
  ],

  authors: [
    {
      name: 'Cyborg Tech Creative Agency',
      url: 'https://cyborgtech.co/',
    },
  ],

  manifest: '/site.webmanifest',
};

export default function AboutPageLayout({ children }) {
  return <div>{children}</div>;
}
