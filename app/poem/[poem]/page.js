import MyPoemPage from '@/components/MyPoemPage/MyPoemPage';

export async function generateMetadata({ params }) {
  try {
    const poem = await params.poem;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/poems/${poem}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: data?.title && data?.title,
      description: `شعر ${data?.title && data?.title}`,
      openGraph: {
        title: data?.title && data?.title,
        description: `شعر ${data?.title && data?.title}`,
        url: 'https://avayezaryab.cyborgtech.co/',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.featured_image && data?.featured_image,
            width: 1129,
            height: 750,
            alt: data?.title && data?.title,
          },
        ],
        locale: 'fa_IR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@your_twitter_handle',
        title: data?.title && data?.title,
        description: `شعر ${data?.title && data?.title}`,
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
      title: 'خطا در بارگذاری شعر',
      description: 'شعر یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function PoemsSinglePage({ params }) {
  const param = await params.poem;

  // poems data

  const poemsRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/poems/${param}`,
    {
      next: { revalidate: 14400 },
    }
  );

  const poemsData = await poemsRes.json();

  // similar pomes

  const similarPoemsRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/poems/similar/${param}?per_page=5`,
    {
      next: { revalidate: 14400 },
    }
  );

  const similarPomesData = await similarPoemsRes.json();

  // story

  const storyRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/stories?per_page=4',
    {
      next: { revalidate: 14400 },
    }
  );

  const storyData = await storyRes.json();

  // author
  const authorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  return (
    <MyPoemPage
      data={poemsData}
      similarPomesData={similarPomesData?.data}
      storyData={storyData?.data}
      authorData={authorData?.data}
    />
  );
}
