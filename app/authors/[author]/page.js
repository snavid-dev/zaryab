import AuthorPage from '@/pages/AuthorPage/AuthorPage';

export async function generateMetadata({ params }) {
  try {
    const author = await params.author;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/authors/${author}`
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();
    console.log(data, 'data');

    return {
      title: data?.name,
      description: `یکی از شاعران و نویسنده های آوای زریاب  ${data?.name}`,
      openGraph: {
        title: data?.name,
        description: `یکی از شاعران و نویسنده های آوای زریاب  ${data?.name}`,
        url: 'https://zaryb3.vercel.app',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.featured_image,
            width: 1129,
            height: 750,
            alt: data?.name,
          },
        ],
        locale: 'fa_IR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@your_twitter_handle',
        title: data?.name,
        description: `یکی از شاعران و نویسنده های آوای زریاب  ${data?.name}`,
        images: [data?.featured_image],
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
    };
  } catch (error) {
    console.error('Metadata fetch error:', error);
    return {
      title: 'خطا در بارگذاری نویسنده',
      description: 'نویسنده یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function AuthorPage1({ params }) {
  const param = await params.author;
  return <AuthorPage param={param} />;
}
