import React from 'react';

export const metadata = {
  title: 'درباره ما',
  description: 'در باره تیم آوای زریاب',
  openGraph: {
    title: 'در باره ما',
    description: 'در باره تیم آوای زریاب',
    url: 'https://avayezaryab.cyborgtech.co/about',
    siteName: 'وبسایت ادبی آوای زریاب',
    images: [
      {
        url: 'https://canin-cdn.cyborgtech.co/zaryab/aboutPage.PNG',
        width: 1129,
        height: 750,
        alt: 'در باره ما',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: 'درباره ما',
    description: 'در باره تیم آوای زریاب',
    images: ['https://canin-cdn.cyborgtech.co/zaryab/aboutPage.PNG'],
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
    'مقاله های ادبی',
    'نقد و نظر آثار ادبی',
  ],

  authors: [
    {
      name: 'Cyborg Tech Creative Agency',
      url: 'https://cyborgtech.co',
    },
  ],

  manifest: '/site.webmanifest',
};

export default function AboutPageLayout({ children }) {
  return <div>{children}</div>;
}
