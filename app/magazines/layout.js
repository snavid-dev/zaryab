import React from 'react';

export const metadata = {
  title: 'مجله ها',
  description: 'مجله های آوای زریاب',
  openGraph: {
    title: 'مجله ها',
    description: 'مجله های آوای زریاب',
    url: 'https://avayezaryab.cyborgtech.co/magazine',
    siteName: 'وبسایت ادبی آوای زریاب',
    images: [
      {
        url: 'https://canin-cdn.cyborgtech.co/zaryab/magazinePage.PNG',
        width: 1129,
        height: 750,
        alt: 'مجله ها',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: 'مجله ها',
    description: 'مجله های آوای زریاب',
    images: ['https://canin-cdn.cyborgtech.co/zaryab/magazinePage.PNG'],
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

export default function magazinePageLayout({ children }) {
  return <div>{children}</div>;
}
