import MyArticlePage from '@/components/MyArticlePage/MyArticlePage';

export async function generateMetadata({ params }) {
  try {
    const article = await params.article;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/articles/${article}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: data?.title && data?.title,
      description: `مقاله ${data?.story_title && data?.story_title}`,
      openGraph: {
        title: data?.title && data?.title,
        description: `مقاله ${data?.title && data?.title}`,
        url: 'https://zaryb3.vercel.app',
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
        description: `مقاله ${data?.title && data?.title}`,
        images: [data?.big_image],
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
      title: 'خطا در بارگذاری مقاله',
      description: 'مقاله یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function ArticleSinglePage({ params }) {
  const param = await params.article;

  // review data

  const articlesRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/articles/${param}`,
    {
      next: { revalidate: 14400 },
    }
  );

  const articlesData = await articlesRes.json();

  // similar Reviews

  const similarArtilesRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/articles/similar/${param}?per_page=6`,
    {
      next: { revalidate: 14400 },
    }
  );

  const similarArticlesData = await similarArtilesRes.json();

  // story

  const poemRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/poems?per_page=4',
    {
      next: { revalidate: 14400 },
    }
  );

  const poemData = await poemRes.json();

  // author
  const authorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  console.log(articlesData, 'data');

  return (
    <MyArticlePage
      data={articlesData}
      similarArticlesData={similarArticlesData?.data}
      poemData={poemData}
      authorData={authorData}
    />
  );
}
