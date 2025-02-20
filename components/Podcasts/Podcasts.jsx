'use client';
import { useEffect, useRef, useState } from 'react';
import Heading1 from '../Heading1/Heading1';
import ArrowLink from '../ArrowLink/ArrowLink';
import PodcastCard from '../PodcastCard/PodcastCard';

export default function Podcasts() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get('/v1/podcasts?per_page=3');
  //         setData(response.data.podcasts);
  //       } catch (err) {
  //         setError(err.response?.data?.message || err.message);
  //       }
  //     };
  //     fetchData();
  //   }, []);
  const ref = useRef(null);
  return (
    <div className="main-container mt-50px">
      {/*  it has two rows  */}
      <div className="col-span-6 xl:col-span-12 flex flex-row-reverse justify-between">
        <Heading1 title="نشست ها" />
        <ArrowLink title="همه نشست ها" />
      </div>
      <div className="main-container">
        {/* {data?.map((data, index) => (
          <Podcast
            data={data}
            key={index}
          />
        ))} */}
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
      </div>
    </div>
  );
}
