import AuthorsPage from '@/components/AuthorsPage/AuthorsPage';

export default async function AuthorPage() {
  // authors data

  const authorsRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors?per_page=8',
    {
      next: { revalidate: 14400 },
    }
  );

  const authorsData = await authorsRes.json();

  // book
  const bookRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/books/featured',
    {
      next: { revalidate: 14400 },
    }
  );

  const bookData = await bookRes.json();

  // archive author
  const archiveAuthorRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/authors-archive?per_page=2',
    {
      next: { revalidate: 14400 },
    }
  );

  const archiveAuthorData = await archiveAuthorRes.json();

  return (
    <AuthorsPage
      serverData={authorsData}
      bookData={bookData}
      archiveAuthorData={archiveAuthorData}
    />
  );
}
