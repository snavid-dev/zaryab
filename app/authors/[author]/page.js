import MyAuthorPage from '@/components/MyAuthorPage/MyAuthorPage';

export async function generateMetadata({ params }) {
  try {
    const author = await params.author;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/authors/${author}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: data?.name && data?.name,
      description: `${
        data?.name && data?.name
      } یکی از شاعران و نویسنده های آوای زریاب`,
      openGraph: {
        title: data?.name && data?.name,
        description: `${
          data?.name && data?.name
        } یکی از شاعران و نویسنده های آوای زریاب`,
        url: 'https://zaryb3.vercel.app',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.featured_image && data?.featured_image,
            width: 1129,
            height: 750,
            alt: data?.name && data?.name,
          },
        ],
        locale: 'fa_IR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@your_twitter_handle',
        title: data?.name && data?.name,
        description: `${
          data?.name && data?.name
        } یکی از شاعران و نویسنده های آوای زریاب`,
        images: [data?.featured_image && data.featured_image],
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
          url: 'https://cyborgtech.co',
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

  // author data
  const authorRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/authors/${param}`,
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  // similar author data

  const similarAuthorRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/authors/similar/${param}/?per_page=8`,
    {
      next: { revalidate: 14400 },
    }
  );

  const similarAuthorData = await similarAuthorRes.json();

  return (
    <MyAuthorPage
      data={authorData}
      similarData={similarAuthorData?.data}
    />
  );
}
