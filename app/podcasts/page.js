import PodcastsPage from '@/components/PodcastsPage/PodcastsPage';

export default async function PodcastsPage1({ searchParams }) {
  const type = searchParams?.type || '';

  // podcasts data
  const podcastsRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/podcasts?per_page=15',
    {
      next: { revalidate: 14400 },
    }
  );

  const podcastsData = await podcastsRes.json();

  console.log(podcastsData, 'data');

  return (
    <PodcastsPage
      type={type}
      serverData={podcastsData}
    />
  );
}
