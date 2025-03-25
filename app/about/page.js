'use client';
import AboutCord from '@/components/AboutCard/AboutCard';
import axios from '@/utils/api';
import { useEffect, useRef, useState } from 'react';

export default function AboutPage() {
  const [data, setData] = useState(null);
  const [Error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/about-us');
        setData(response.data.questions);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasFetched) {
          fetchData();
          setHasFetched(true);
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasFetched]);

  return (
    <div
      className="flex flex-col items-center bg-aboutPagePic bg-no-repeat bg-bottom min-h-1500px mt-130px xl:mt-50px"
      ref={ref}
    >
      {isVisible && (
        <div className="main-container">
          {Array.isArray(data) &&
            data?.map((data, index) => (
              <AboutCord
                key={index}
                title={data?.question ? data?.question : ''}
                text={data?.answer ? data?.answer : ''}
                data={data}
                isVisible={isVisible}
              />
            ))}
        </div>
      )}
    </div>
  );
}
