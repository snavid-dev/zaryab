import MyMagazinePage from '@/components/MyMagazinePage/MyMagazinePage';

export async function generateMetadata({ params }) {
  try {
    const magazine = await params.magazine;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/letters/${magazine}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: data?.title && data?.title,
      description: `مجله ${data?.title && data?.title}`,
      openGraph: {
        title: data?.title && data?.title,
        description: `مجله ${data?.title && data?.title}`,
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
        description: `مجله ${data?.title && data?.title}`,
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
      title: 'خطا در بارگذاری مجله',
      description: 'مجله یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function LetterSinglePage({ params }) {
  const param = await params.magazine;

  // magazine data

  const magazineRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/letters/${param}`,
    {
      next: { revalidate: 14400 },
    }
  );

  const magazineData = await magazineRes.json();

  //desktop podcast
  const podcastMobileRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/podcasts?per_page=4',
    {
      next: { revalidate: 14400 },
    }
  );

  const podcastMobileData = await podcastMobileRes.json();

  console.log(magazineData, 'data');

  return (
    <MyMagazinePage
      data={magazineData}
      podcastMobileData={podcastMobileData}
    />
  );
}
