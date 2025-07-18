import MyArchiveAuthorPage from '@/components/MyArchiveAuthorPage/MyArchiveAuthorPage';

export async function generateMetadata({ params }) {
  try {
    const archive = await params.archive;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/authors-archive/${archive}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: data?.title && data?.title,
      description: `معرفی نامه ${data?.title && data?.title}`,
      openGraph: {
        title: data?.title,
        description: `معرفی نامه ${data?.title && data?.title}`,
        url: 'https://avayezaryab.cyborgtech.co/',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.featured_image && data?.featured_image,
            width: 1129,
            height: 750,
            alt: data?.title,
          },
        ],
        locale: 'fa_IR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@your_twitter_handle',
        title: data?.title && data?.title,
        description: `معرفی نامه ${data?.title && data?.title}`,
        images: [data?.featured_image && data?.featured_image],
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
    };
  } catch (error) {
    console.error('Metadata fetch error:', error);
    return {
      title: 'خطا در بارگذاری نویسنده',
      description: 'نویسنده یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function AuthorPage({ params }) {
  const param = await params.archive;

  // archive author

  const archiveAuthorRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/authors-archive/${param}`,
    {
      next: { revalidate: 14400 },
    }
  );

  const archiveAuthorData = await archiveAuthorRes.json();

  return <MyArchiveAuthorPage data={archiveAuthorData} />;
}
