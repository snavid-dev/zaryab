import MyEpisodePage from '@/components/MyEpisodePage/MyEpisodePage';

export async function generateMetadata({ params }) {
  try {
    const episode = await params.episode;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/stories/${episode}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: data?.story_title && data?.story_title,
      description: `داستان ${data?.story_title && data?.story_title}`,
      openGraph: {
        title: data?.story_title && data?.story_title,
        description: `داستان ${data?.story_title && data?.story_title}`,
        url: 'https://avayezaryab.cyborgtech.co/',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.story_image && data?.story_image,
            width: 1129,
            height: 750,
            alt: data?.story_title && data?.story_title,
          },
        ],
        locale: 'fa_IR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@your_twitter_handle',
        title: data?.story_title && data?.story_title,
        description: `داستان ${data?.story_title && data?.story_title}`,
        images: [data?.story_image && data?.story_image],
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
      title: 'خطا در بارگذاری داستان',
      description: 'داستان یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function EposidesPage1({ params }) {
  const param = await params.episode;
  // episode data
  const episodeRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/stories/${param}/?per_page=8`,
    {
      next: { revalidate: 14400 },
    }
  );
  const episodeData = await episodeRes.json();

  // filter data storyTypes
  const storiesRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/story_type',
    {
      next: { revalidate: 14400 },
    }
  );

  let storiesType = await storiesRes.json();

  const nextMultipleOfSix = Math.ceil(storiesType.length / 6) * 6;

  while (storiesType.length < nextMultipleOfSix) {
    storiesType.push({ name: '', slug: '#' });
  }

  // filter data categories

  const categoriesRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/categories',
    {
      next: { revalidate: 14400 },
    }
  );

  let categoriesType = await categoriesRes.json();

  const nextMultipleOfSixCategories = Math.ceil(categoriesType.length / 6) * 6;

  while (categoriesType.length < nextMultipleOfSixCategories) {
    categoriesType.push({ name: '', slug: '#' });
  }

  // author
  const authorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  return (
    <MyEpisodePage
      param={param}
      serverData={episodeData}
      types={storiesType}
      categories={categoriesType}
      authorData={authorData}
    />
  );
}
