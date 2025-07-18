import MyReviewPage from '@/components/MyReviewPage/MyReviewPage';

export async function generateMetadata({ params }) {
  try {
    const review = await params.review;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/author-reviews/${review}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: data?.title && data?.title,
      description: data?.title && data?.title,
      openGraph: {
        title: data?.title && data?.title,
        description: data?.title && data?.title,
        url: 'https://avayezaryab.cyborgtech.co/',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.big_image && data?.big_image,
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
        description: data?.title && data?.title,
        images: [data?.big_image && data?.big_image],
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
      title: 'خطا در بارگذاری نقد و نظر',
      description: 'نقد و نظر یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function ReviewsAndOpinionsSinglePage({ params }) {
  const param = await params.review;

  // review data

  const reviewRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/author-reviews/${param}`,
    {
      next: { revalidate: 14400 },
    }
  );

  const reviewData = await reviewRes.json();

  // similar Reviews

  const similarReviewsRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/author-reviews/similar/${param}?per_page=6`,
    {
      next: { revalidate: 14400 },
    }
  );

  const similarReviewsData = await similarReviewsRes.json();

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
    <MyReviewPage
      data={reviewData}
      similarReviewsData={similarReviewsData?.data}
      storyData={storyData}
      authorData={authorData}
    />
  );
}
