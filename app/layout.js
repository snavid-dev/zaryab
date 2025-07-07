import Head from 'next/head'; // Import the Head component
import Header from '@/components/Header/Header';
import './globals.css';
import Wrapper from '@/components/Wrapper/Wrapper';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'آوای زریاب',
  description: 'وبسایت ادبی آوای زریاب',
  icons: {
    icon: '/assets/svg/favicon.svg',
  },
  openGraph: {
    title: 'آوای زریاب',
    description: 'وبسایت ادبی آوای زریاب',
    url: 'https://avayezaryab.cyborgtech.co/',
    siteName: 'وبسایت ادبی آوای زریاب',
    images: [
      {
        url: 'https://canin-cdn.cyborgtech.co/zaryab/homePage.PNG',
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
    images: ['https://canin-cdn.cyborgtech.co/zaryab/homePage.PNG'],
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
      url: 'https://cyborgtech.co/',
    },
  ],
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa"> {/* Changed lang to "fa" for Persian 😉 */}
      <Head>
        <meta name="google-site-verification" content="RoPaVdppgngDu9Qru6kdoKWDqDBGpcUb47b7yP6aqIc" />
      </Head>
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