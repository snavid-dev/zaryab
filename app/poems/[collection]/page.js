import MyPoemCollection from '@/components/MyPoemCollection/MyPoemCollection';

export async function generateMetadata({ params }) {
  try {
    const collection = await params.collection;
    const response = await fetch(
      `https://zariab.cyborgtech.co/wp-json/v1/poems/collection/${collection}`,
      {
        next: { revalidate: 14400 },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch metadata');
    const data = await response.json();

    return {
      title: `مجموعه  ${data?.collection_name && data?.collection_name}`,
      description: `مجموعه شعر ${
        data?.collection_name && data?.collection_name
      }`,
      openGraph: {
        title: `مجموعه  ${data?.collection_name && data?.collection_name}`,
        description: `مجموعه شعر ${
          data?.collection_name && data?.collection_name
        }`,
        url: 'https://avayezaryab.cyborgtech.co/',
        siteName: 'وبسایت ادبی آوای زریاب',
        images: [
          {
            url: data?.data[0]?.featured_image && data?.data[0]?.featured_image,
            width: 1129,
            height: 750,
            alt: data?.collection_name && data?.collection_name,
          },
        ],
        locale: 'fa_IR',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        site: '@your_twitter_handle',
        title: `مجموعه  ${data?.collection_name && data?.collection_name}`,
        description: `مجموعه شعر ${
          data?.collection_name && data?.collection_name
        }`,
        images: [
          data?.data[0]?.featured_image && data?.data[0]?.featured_image,
        ],
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
      title: 'خطا در بارگذاری مجموعه شعر',
      description: 'مجموعه شعر یافت نشد یا مشکلی در سرور وجود دارد.',
    };
  }
}

export default async function PoemCollectionPage1({ params }) {
  const param = await params.collection;

  // poemCollection

  const collectionRes = await fetch(
    `https://zariab.cyborgtech.co/wp-json/v1/poems/collection/${param}`,
    {
      next: { revalidate: 14400 },
    }
  );

  const collectionData = await collectionRes.json();

  // author
  const authorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  // poem type

  const poemsRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/poem_type',
    { next: { revalidate: 14400 } }
  );

  const poemsType = await poemsRes.json();

  const nextMultipleOfSixCategoriesPoem = Math.ceil(poemsType.length / 6) * 6;

  while (poemsType.length < nextMultipleOfSixCategoriesPoem) {
    poemsType.push({ name: '', slug: '#' });
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

  return (
    <MyPoemCollection
      param={param}
      serverData={collectionData}
      authorData={authorData?.data}
      types={poemsType}
      categories={categoriesType}
    />
  );
}
