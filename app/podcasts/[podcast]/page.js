'use client';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';

import axios from '@/utils/api';
import { use } from 'react';
import Heading1 from '@/components/Heading1/Heading1';
import ArrowLink from '@/components/ArrowLink/ArrowLink';
import PodcastCard from '@/components/PodcastCard/PodcastCard';
import FullAd from '@/components/FullAd/FullAd';
import SmallAd from '@/components/SmallAd/SmallAd';

export default function PodcastSinglePage({ params }) {
  // fetch data all authors
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const param = use(params);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/podcasts/similar/${param.podcast}?per_page=9`
        );
        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);

  // fetch one podcasts
  const [podcast, setPodcast] = useState(null);
  const [podcastError, setPodcastError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/v1/podcasts/${param.podcast}`);
        setPodcast(response.data);
      } catch (err) {
        setPodcastError(err.response?.data?.message || err.message);
      }
    };
    fetchData();
  }, []);
  console.log(podcast);

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [click, setClick] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
    setCurrentTime(current);
    setDuration(duration);
  };

  // Convert seconds to minutes:seconds format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Skip forward 15 seconds
  const skipForward = () => {
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 15,
      duration
    );
  };

  // Skip backward 15 seconds
  const skipBackward = () => {
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 15,
      0
    );
  };

  const play = () => {
    setIsPlaying(true);
    if (currentTime === duration) {
      audioRef.current.play();
      setCurrentTime(0);
      console.log('tick');
    }
  };

  const pause = () => {
    setIsPlaying(false);
  };

  return (
    // the main container of the page
    <div className="flex flex-col items-center mt-130px xl:mt-50px mb-50px">
      {/*  podcast section  */}
      <div className="main-container">
        {/*  it has 5 rows  */}
        {/*  the image of the podcast  */}
        <div className="hidden md:block md:col-span-1 xl:col-span-3"></div>
        <div className="col-span-6 md:col-span-4 xl:col-span-6  border-4 border-black p-14">
          <div className="relative w-full h-230px md:h-370px xl:h-460px 2xl:h-630px">
            {podcast?.image ? (
              <Image
                src={podcast?.image}
                alt=""
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            ) : (
              <div>failed to display image!!!</div>
            )}
          </div>
          <div className="col-span-3"></div>
        </div>
        <div className="hidden md:block md:col-span-1 xl:col-span-3"></div>
        {/* the title of the podcast */}
        <div className="col-span-6 xl:col-span-12 flex justify-center rtl mt-5 font-common-heavy text-20px md:text-25px lg:text-30px">
          {podcast?.name}
        </div>
        {/* the host and guest section */}
        <div className="hidden md:block md:col-span-1 xl:col-span-3"></div>
        <div className="col-span-6 md:col-span-4 xl:col-span-6 flex justify-center items-center mt-5 rtl">
          <div className="flex justify-start items-center rtl w-1/2">
            <div className="font-common-lg text-12px md:text-16px xl:text-20px ml-1">
              گوینده:
            </div>
            <div className="font-common-regular text-12px md:text-16px xl:text-20px">
              {podcast?.host}
            </div>
          </div>
          <div className="flex justify-start items-center rtl w-1/2">
            <div className="font-common-lg text-12px md:text-16px xl:text-20px ml-1">
              نویسنده/شاعر:
            </div>
            <div className="font-common-regular text-12px md:text-16px xl:text-20px">
              {podcast?.guest}
            </div>
          </div>
        </div>
        <div className="hidden md:block md:col-span-1 xl:col-span-3"></div>
        {/* player */}
        <div className="hidden md:block md:col-span-1 xl:col-span-3"></div>
        <div className="w-full xl:mt-14 col-span-6 md:col-span-4 xl:col-span-6 flex flex-col items-center">
          <audio
            ref={audioRef}
            src={podcast?.mp3_file}
            onTimeUpdate={handleTimeUpdate}
          />
          {/* Progress Bar */}
          <div className="relative w-full">
            <div className="relative w-full h-2 mt-4 bg-gray">
              <div
                className="absolute top-0 left-0 h-2 bg-footerBtn"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div
              className="absolute w-5 h-5 rotate-45 bg-black top-[10px]"
              style={{ left: `${progress}%` }}
            ></div>
            {/* the time section */}
            <div className="flex justify-between items-center mt-7 font-common-lg text-16px">
              <div>{formatTime(currentTime)}</div>
              <div>{formatTime(duration)}</div>
            </div>
          </div>
          {/* play button */}
          <div className="w-full flex items-center justify-between mt-4">
            <div
              onClick={skipBackward}
              className="cursor-pointer"
            >
              {/* back button */}
              <svg
                width="40"
                height="45"
                viewBox="0 0 40 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4.125C24.7621 4.125 29.3679 5.82417 32.989 8.91688C36.6101 12.0096 39.0088 16.2929 39.7538 20.9963C40.4987 25.6997 39.541 30.5146 37.0528 34.575C34.5646 38.6353 30.7093 41.6746 26.1803 43.1461C21.6513 44.6177 16.7459 44.425 12.3463 42.6026C7.94675 40.7802 4.3418 37.4478 2.17987 33.2048C0.0179368 28.9618 -0.55908 24.0866 0.552603 19.4561C1.66429 14.8256 4.39171 10.7437 8.2443 7.94466L10.0077 10.3717C6.73295 12.7509 4.41464 16.2205 3.46971 20.1564C2.52478 24.0923 3.01525 28.2363 4.85289 31.8428C6.69053 35.4494 9.75474 38.2819 13.4944 39.831C17.234 41.38 21.4036 41.5438 25.2533 40.293C29.1029 39.0421 32.3799 36.4588 34.4949 33.0075C36.6098 29.5562 37.4239 25.4635 36.7907 21.4656C36.1575 17.4677 34.1186 13.8269 31.0406 11.1981C27.9627 8.56929 24.0478 7.125 20 7.125L20 4.125Z"
                  fill="#2F3030"
                />
                <path
                  d="M15.2109 29.0859C15.2109 29.7969 15.5938 30.2188 16.25 30.2188C16.9141 30.2188 17.2969 29.8047 17.2969 29.0859V20.7031C17.2969 19.9141 16.7891 19.3906 16.0312 19.3906C15.5938 19.3906 15.1484 19.5469 14.5859 19.9297L13.1875 20.9062C12.7891 21.1719 12.5859 21.4609 12.5859 21.7891C12.5859 22.2188 12.9062 22.5391 13.3359 22.5391C13.5625 22.5391 13.7578 22.4688 14.0938 22.25L15.1641 21.4922H15.2109V29.0859ZM19.5547 27.9609C19.5547 29.1562 21.0547 30.3516 23.1719 30.3516C25.5938 30.3516 27.2266 28.8281 27.2266 26.5547C27.2266 24.4922 25.8281 23.0859 23.7969 23.0859C22.8828 23.0859 22.0156 23.4297 21.6484 23.9297H21.5391L21.7578 21.1719H25.7969C26.4297 21.1719 26.7891 20.8672 26.7891 20.3203C26.7891 19.7734 26.4219 19.4531 25.7969 19.4531H21.375C20.5156 19.4531 20.0703 19.8125 20.0156 20.5547L19.7266 24.5703C19.6797 25.2891 20.1172 25.75 20.7578 25.75C21.0469 25.75 21.2734 25.6562 21.7344 25.2656C22.1953 24.9062 22.7266 24.7109 23.25 24.7109C24.375 24.7109 25.1797 25.4922 25.1797 26.6328C25.1797 27.8125 24.3438 28.6328 23.1641 28.6328C22.3672 28.6328 21.7422 28.2656 21.25 27.5312C20.9922 27.1641 20.7422 27.0234 20.4141 27.0234C19.8906 27.0234 19.5547 27.4375 19.5547 27.9609Z"
                  fill="#2F3030"
                />
                <path
                  d="M21.3115 0.430312L13.6106 5.2434C13.3286 5.41965 13.3286 5.83035 13.6106 6.0066L21.3115 10.8197C21.6112 11.007 22 10.7915 22 10.4381V0.811911C22 0.458465 21.6112 0.242986 21.3115 0.430312Z"
                  fill="#2F3030"
                />
              </svg>
            </div>
            <button
              onClick={togglePlayPause}
              className={`bg-black text-white text-[46px] px-4 py-4 flex justify-center items-center rounded-full 
                             `}
            >
              {isPlaying && currentTime < duration ? (
                <FaPause onClick={pause} />
              ) : (
                <svg
                  width="39"
                  height="46"
                  viewBox="0 0 39 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                  onClick={play}
                >
                  <path
                    d="M34.7892 22.9999L3.16176 41.9764V4.02346L34.7892 22.9999Z"
                    fill="#FFFCF7"
                    stroke="#FFFCF7"
                    strokeWidth="6.08824"
                  />
                </svg>
              )}
            </button>
            <div
              onClick={skipForward}
              className="cursor-pointer"
            >
              {/*  forward button  */}
              <svg
                width="40"
                height="45"
                viewBox="0 0 40 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4.125C15.2379 4.125 10.6321 5.82417 7.01104 8.91688C3.38994 12.0096 0.991184 16.2929 0.246231 20.9963C-0.498718 25.6997 0.459026 30.5146 2.9472 34.575C5.43537 38.6353 9.29067 41.6746 13.8197 43.1461C18.3487 44.6177 23.2541 44.425 27.6537 42.6026C32.0532 40.7802 35.6582 37.4478 37.8201 33.2048C39.9821 28.9618 40.5591 24.0866 39.4474 19.4561C38.3357 14.8256 35.6083 10.7437 31.7557 7.94466L29.9923 10.3717C33.267 12.7509 35.5854 16.2205 36.5303 20.1564C37.4752 24.0923 36.9848 28.2363 35.1471 31.8428C33.3095 35.4494 30.2453 38.2819 26.5056 39.831C22.766 41.38 18.5964 41.5438 14.7467 40.293C10.8971 39.0421 7.62006 36.4588 5.50512 33.0075C3.39017 29.5562 2.57609 25.4635 3.2093 21.4656C3.84251 17.4677 5.88145 13.8269 8.95938 11.1981C12.0373 8.56929 15.9522 7.125 20 7.125V4.125Z"
                  fill="#2F3030"
                />
                <path
                  d="M24.7891 29.0859C24.7891 29.7969 24.4062 30.2188 23.75 30.2188C23.0859 30.2188 22.7031 29.8047 22.7031 29.0859V20.7031C22.7031 19.9141 23.2109 19.3906 23.9688 19.3906C24.4062 19.3906 24.8516 19.5469 25.4141 19.9297L26.8125 20.9062C27.2109 21.1719 27.4141 21.4609 27.4141 21.7891C27.4141 22.2188 27.0938 22.5391 26.6641 22.5391C26.4375 22.5391 26.2422 22.4688 25.9062 22.25L24.8359 21.4922H24.7891V29.0859ZM20.4453 27.9609C20.4453 29.1562 18.9453 30.3516 16.8281 30.3516C14.4062 30.3516 12.7734 28.8281 12.7734 26.5547C12.7734 24.4922 14.1719 23.0859 16.2031 23.0859C17.1172 23.0859 17.9844 23.4297 18.3516 23.9297H18.4609L18.2422 21.1719H14.2031C13.5703 21.1719 13.2109 20.8672 13.2109 20.3203C13.2109 19.7734 13.5781 19.4531 14.2031 19.4531H18.625C19.4844 19.4531 19.9297 19.8125 19.9844 20.5547L20.2734 24.5703C20.3203 25.2891 19.8828 25.75 19.2422 25.75C18.9531 25.75 18.7266 25.6562 18.2656 25.2656C17.8047 24.9062 17.2734 24.7109 16.75 24.7109C15.625 24.7109 14.8203 25.4922 14.8203 26.6328C14.8203 27.8125 15.6562 28.6328 16.8359 28.6328C17.6328 28.6328 18.2578 28.2656 18.75 27.5312C19.0078 27.1641 19.2578 27.0234 19.5859 27.0234C20.1094 27.0234 20.4453 27.4375 20.4453 27.9609Z"
                  fill="#2F3030"
                />
                <path
                  d="M18.6885 0.430312L26.3894 5.2434C26.6714 5.41965 26.6714 5.83035 26.3894 6.0066L18.6885 10.8197C18.3888 11.007 18 10.7915 18 10.4381V0.811911C18 0.458465 18.3888 0.242986 18.6885 0.430312Z"
                  fill="#2F3030"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:col-span-1 xl:col-span-3"></div>
      </div>
      {/* full ad */}
      {/* <FullAd /> */}
      {/*  podcast text  */}
      <div className="main-container mt-14">
        <div className="col-span-6 xl:col-span-12 rtl mb-7">
          <Heading1 title="نوشتار کتاب صوتی" />
        </div>
        <div className="col-span-6 xl:col-span-12">
          <div
            dangerouslySetInnerHTML={{
              __html: podcast?.content || '<div>Hello</div>',
            }}
            className="w-full border-t-4 border-b-4 border-black whitespace-pre-wrap rtl font-common-lg
                    text-16px md:text-25px xl:text-30px py-5"
          ></div>
        </div>
        {/* small ad */}
        {/* <SmallAd /> */}
        <div className="mt-14 col-span-6 xl:col-span-12">
          {/*  it has two rows  */}
          <div className="flex flex-row-reverse justify-between">
            <Heading1 title="کتاب های صوتی" />
            <ArrowLink
              title="همه کتاب های صوتی"
              path="/podcasts"
            />
          </div>
          <div className="main-container mt-7">
            {data?.map((data, index) => (
              <PodcastCard
                data={data}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
