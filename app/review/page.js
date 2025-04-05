import ReviewsPage from '@/components/ReviewsPage/ReviewsPage';

export default async function ReviewsAndOpinionsPage({ searchParams }) {
  const type = searchParams?.type || '';

  // reviews

  const reviewsRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/author-reviews?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const reviewsData = await reviewsRes.json();

  // author
  const authorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorData = await authorRes.json();

  // filter data categories type

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

  // articlesType

  const reviewTypeRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/review_type',
    {
      next: { revalidate: 14400 },
    }
  );

  let reviewType = await reviewTypeRes.json();
  const nextMultipleOfSixArticle = Math.ceil(reviewType.length / 6) * 6;
  while (reviewType.length < nextMultipleOfSixArticle) {
    reviewType.push({ name: '', slug: '#' });
  }

  return (
    <ReviewsPage
      type={type}
      serverData={reviewsData}
      authorData={authorData}
      categories={categoriesType}
      types={reviewType}
    />
  );
}
