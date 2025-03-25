import StoryPage from '@/pages/StoryPage/StoryPage';

export async function generateMetadata({ params }) {
  try {
    const story = await params.story;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/episodes/${story}`
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: `${data?.title && data?.title} قسمت ${
        data?.episode_title && data?.episode_title
      }`,
      description: `داستان ${data?.title && data?.title} قسمت ${
        data?.episode_title && data?.episode_title
      }`,
      openGraph: {
        title: `${data?.title && data?.title} قسمت ${
          data?.episode_title && data?.episode_title
        }`,
        description: `داستان ${data?.title && data?.title} قسمت ${
          data?.episode_title && data?.episode_title
        }`,
        url: 'https://zaryb3.vercel.app',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.featured_image && data?.featured_image,
            width: 1129,
            height: 750,
            alt: data?.story_title && data?.title,
          },
        ],
        locale: 'fa_IR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@your_twitter_handle',
        title: `${data?.title && data?.title} قسمت ${
          data?.episode_title && data?.episode_title
        }`,
        description: `داستان ${data?.title && data?.title} قسمت ${
          data?.episode_title && data?.episode_title
        }`,
        images: [data?.featured_image && data?.featured_image],
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
      title: 'خطا در بارگذاری داستان',
      description: 'داستان یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function StorySinglePage({ params }) {
  const param = await params.story;
  return <StoryPage param={param} />;
}
