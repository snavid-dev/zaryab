import MyPodcastPage from '@/components/MyPodcastPage/MyPodcastPage';

export async function generateMetadata({ params }) {
  try {
    const podcast = await params.podcast;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/podcasts/${podcast}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: data?.name && data?.name,
      description: `کتاب صوتی ${data?.name && data?.name}`,
      openGraph: {
        title: data?.name && data?.name,
        description: `کتاب صوتی ${data?.name && data?.name}`,
        url: 'https://zaryb3.vercel.app',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.image && data?.image,
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
        description: `کتاب صوتی ${data?.name && data?.name}`,
        images: [data?.image && data?.image],
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
          url: 'https://cyborgtech.co/',
        },
      ],
    };
  } catch (error) {
    console.error('Metadata fetch error:', error);
    return {
      title: 'خطا در بارگذاری کتاب صوتی',
      description: 'کتاب صوتی یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function PodcastSinglePage({ params }) {
  const param = await params.podcast;

  // podcasts data

  const podcastRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/podcasts/${param}`,
    {
      next: { revalidate: 14400 },
    }
  );

  const podcastData = await podcastRes.json();

  // podcast similar

  const similarPodcastRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/podcasts/similar/${param}?per_page=9`,
    {
      next: { revalidate: 14400 },
    }
  );

  const similarPodcastData = await similarPodcastRes.json();
  return (
    <MyPodcastPage
      podcast={podcastData}
      data={similarPodcastData?.data}
    />
  );
}
