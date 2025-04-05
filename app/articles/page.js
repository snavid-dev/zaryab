import ArticlesPage from '@/components/ArticlesPage/ArticlesPage';

export default async function ArticlesPage1({ searchParams }) {
  const type = searchParams?.type || '';

  // articles

  const articlesRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/articles?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const articlesData = await articlesRes.json();

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

  const articleTypeRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/article_type',
    {
      next: { revalidate: 14400 },
    }
  );

  let articleType = await articleTypeRes.json();
  const nextMultipleOfSixArticle = Math.ceil(articleType.length / 6) * 6;
  while (articleType.length < nextMultipleOfSixArticle) {
    articleType.push({ name: '', slug: '#' });
  }

  console.log(articlesData, 'data');

  return (
    <ArticlesPage
      type={type}
      serverData={articlesData}
      authorData={authorData}
      categories={categoriesType}
      types={articleType}
    />
  );
}
