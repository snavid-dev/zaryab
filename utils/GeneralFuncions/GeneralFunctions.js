export function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0, num) + '...';
}

export async function filterTypeData(type) {
  if (type === 'story') {
    const storiesRes = await fetch(
      'https://zariab.cyborgtech.co/wp-json/v1/story_type',
      {
        next: { revalidate: 14400 },
      }
    );

    const storiesData = await storiesRes.json();

    return storiesData?.data;
  } else if (type === 'poem') {
    const poemsRes = await fetch(
      'https://zariab.cyborgtech.co/wp-json/v1/poem_type',
      { next: { revalidate: 14400 } }
    );

    const poemsData = await poemsRes.json();

    return poemsData;
  } else if (type === 'article') {
    const articleRes = await fetch(
      'https://zariab.cyborgtech.co/wp-json/v1/article_type',
      {
        next: { revalidate: 14400 },
      }
    );

    let articleData = await articleRes.json();

    return articleData;
  } else {
    return '';
  }
}
