import Header from '@/components/Header/Header';
import './globals.css';
import Wrapper from '@/components/Wrapper/Wrapper';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'آوای زریاب',
  description: 'وبسایت ادبی آوای زریاب',
  openGraph: {
    title: 'آوای زریاب',
    description: 'وبسایت ادبی آوای زریاب',
    url: 'https://zaryb3.vercel.app',
    siteName: 'وبسایت ادبی آوای زریاب',
    images: [
      {
        url: 'https://images.pexels.com/photos/1831744/pexels-photo-1831744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        width: 1129,
        height: 750,
        alt: 'آوای زریاب',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter_handle',
    title: 'آوای زریاب',
    description: 'وبسایت ادبی آوای زریاب',
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
    'مقاله های ادبی',
    'نقد و نظر آثار ادبی',
  ],

  authors: [
    {
      name: 'Cyborg Tech Creative Agency',
      url: 'https://portfolio-poorya.vercel.app/',
    },
  ],

  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <Header />
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
