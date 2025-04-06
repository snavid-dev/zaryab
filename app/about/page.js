import AboutPage from '@/components/AboutPage/AboutPage';

export default async function AboutPage1() {
  const aboutRes = await fetch(
    'https://zariab.cyborgtech.co/wp-json/v1/about-us',
    {
      next: { revalidate: 14400 },
    }
  );

  const aboutData = await aboutRes.json();

  return <AboutPage data={aboutData?.questions} />;
}
