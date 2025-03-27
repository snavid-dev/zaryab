'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Link2 from '../Link2/Link2';
import axios from '@/utils/api';
import NewsLetterForm from '../NewsLetterForm/NewsLetterForm';

export default function Footer() {
  const [categories, setCategories] = useState(null);
  const [Error, setError] = useState(null);

  // category fetch
  const [categoryIsVisible, setCategoryIsVisible] = useState(false);
  const [categoryHasFetched, setCategoryHasFetched] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/categories');
        let data = response.data;

        // محاسبه نزدیک‌ترین مضرب 6 بزرگتر از طول آرایه
        const nextMultipleOfSix = Math.ceil(data.length / 6) * 6;

        // اضافه کردن استرینگ خالی تا رسیدن به مضرب 6
        while (data.length < nextMultipleOfSix) {
          data.push({ name: '', slug: '#' });
        }

        setCategories(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !categoryHasFetched) {
          fetchData();
          setCategoryIsVisible(true);
          setCategoryHasFetched(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [categoryHasFetched]);

  // writings
  const [literary, setLiterary] = useState([]);
  const [writingsIsVisible, setWritingsIsVisible] = useState(false);
  const [writingsHasFetched, setWritingsHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storyRes, poemRes] = await Promise.all([
          axios.get('/v1/story_type'),
          axios.get('/v1/poem_type'),
        ]);

        const stories = storyRes.data; // لیست داستان‌ها
        const poems = poemRes.data; // لیست شعرها

        const totalLength = Math.ceil((stories.length + poems.length) / 6) * 6;
        let result = new Array(totalLength).fill(null);

        let storyIndex = 0;
        let poemIndex = 0;

        for (let i = 0; i < totalLength; i++) {
          if ((i % 6 === 0 || i % 6 === 1) && storyIndex < stories.length) {
            result[i] = stories[storyIndex++];
          } else if (poemIndex < poems.length) {
            result[i] = poems[poemIndex++];
          }
        }

        setLiterary(result);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !writingsHasFetched) {
          fetchData();
          setWritingsIsVisible(true);
          setWritingsHasFetched(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [writingsHasFetched]);

  // articles

  const [articles, setArticles] = useState(null);
  const [isArticleVisible, setIsArtivleVisible] = useState(false);
  const [articleHasFetched, setArticleHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/article_type');
        let data = response.data;

        // محاسبه نزدیک‌ترین مضرب 6 بزرگتر از طول آرایه
        const nextMultipleOfSix = Math.ceil(data.length / 6) * 6;

        // اضافه کردن استرینگ خالی تا رسیدن به مضرب 6
        while (data.length < nextMultipleOfSix) {
          data.push({ name: '', slug: '#' });
        }

        setArticles(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !articleHasFetched) {
          fetchData();
          setIsArtivleVisible(true);
          setArticleHasFetched(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [articleHasFetched]);

  // reviews

  const [review, setReview] = useState(null);
  const [isReviewVisible, setIsReviewVisible] = useState(false);
  const [reviewHasFetched, setReviewHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/review_type');
        let data = response.data;

        // محاسبه نزدیک‌ترین مضرب 6 بزرگتر از طول آرایه
        const nextMultipleOfSix = Math.ceil(data.length / 6) * 6;

        // اضافه کردن استرینگ خالی تا رسیدن به مضرب 6
        while (data.length < nextMultipleOfSix) {
          data.push({ name: '', slug: '#' });
        }

        setReview(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !reviewHasFetched) {
          fetchData();
          setIsReviewVisible(true);
          setReviewHasFetched(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [setReviewHasFetched]);

  // podcasts

  const [podcast, setPodcast] = useState(null);
  const [isPodcastVisible, setIsPodcastVisible] = useState(false);
  const [podcastHasFetched, setPodcastHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/podcast_type');
        let data = response.data;

        // محاسبه نزدیک‌ترین مضرب 6 بزرگتر از طول آرایه
        const nextMultipleOfSix = Math.ceil(data.length / 6) * 6;

        // اضافه کردن استرینگ خالی تا رسیدن به مضرب 6
        while (data.length < nextMultipleOfSix) {
          data.push({ name: '', slug: '#' });
        }

        setPodcast(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !podcastHasFetched) {
          fetchData();
          setIsPodcastVisible(true);
          setPodcastHasFetched(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [podcastHasFetched]);

  // letters

  const [letter, setLetter] = useState(null);
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const [letterHasFetched, setLetterHasFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/v1/letter_type');
        let data = response.data;

        // محاسبه نزدیک‌ترین مضرب 6 بزرگتر از طول آرایه
        const nextMultipleOfSix = Math.ceil(data.length / 6) * 6;

        // اضافه کردن استرینگ خالی تا رسیدن به مضرب 6
        while (data.length < nextMultipleOfSix) {
          data.push({ name: '', slug: '#' });
        }

        setLetter(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !letterHasFetched) {
          fetchData();
          setIsLetterVisible(true);
          setLetterHasFetched(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [letterHasFetched]);

  // mail section
  const [newLetter, setNewLetter] = useState(null);
  const [isNewLetterVisible, setIsNewLetterVisible] = useState(false);
  const [newLetterHasFetched, setNewLetterHasFetched] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/v1/letters/?type=non-archive&per_page=1`
        );
        setNewLetter(response.data.data[0]);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !newLetterHasFetched) {
          fetchData();
          setIsNewLetterVisible(true);
          setNewLetterHasFetched(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [newLetterHasFetched]);

  return (
    <footer
      className="bg-footer"
      ref={footerRef}
    >
      {/*main div of footer*/}
      <div className="bg-footerPic bg-no-repeat bg-bottom bg-auto flex flex-col items-center rtl py-50px">
        {/* text logo and others things */}
        <div className="main-container">
          <div className="col-span-6 xl:col-span-3 grid grid-cols-6 xl:grid-cols-3 gap">
            <div className="col-span-6 md:col-span-2 xl:col-span-3 xl:mt-100px">
              <div className="w-full h-[180px] relative md:hidden xl:block">
                <Image
                  src="/assets/svg/footerLogo.svg"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="absolute"
                />
              </div>
              <div className="hidden md:block xl:hidden w-full h-[300px] relative">
                <Image
                  src="/assets/svg/tablet-logo.svg"
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="absolute"
                />
              </div>
            </div>
            <div className="hidden md:block md:col-span-1 xl:hidden"></div>
            {newLetter && (
              <div className="col-span-6 md:col-span-3 xl:col-span-3">
                <div className="relative w-full h-490px md:h-510px xl:h-390px 2xl:h-510px mt-20px xl:mt-0">
                  {newLetter?.featured_image ? (
                    <Image
                      src={newLetter?.featured_image}
                      alt="new magazine"
                      layout="fill"
                      objectFit="cover"
                      className="absolute"
                    />
                  ) : (
                    <div className="w-full h-full flex justify-center items-center"></div>
                  )}
                </div>
                <Link
                  href={`/magazines/${newLetter?.slug}`}
                  className="w-full h-10 mt-3 flex justify-center items-center font-common-heavy text-white
                   bg-footerBtn hover:bg-footer transition-all border-2 border-footerBtn text-27px md:text-28px
                   "
                >
                  خواندن مجله
                </Link>
              </div>
            )}
          </div>
          <div className="hidden xl:block xl:col-span-1"></div>
          <div className="col-span-6 xl:col-span-8 rtl text-white mt-50px xl:mt-100px">
            <div className="w-full font-common-heavy text-20px md:text-36px">
              قوانین ارسال آثار ادبی در آوای زریاب
            </div>
            <ul className="w-full rtl font-common-thin text-10 md:text-17 mt-7">
              <li>
                ۱. اثر فرستاده شده نباید در مغایر با ارزش‌های افغانستان باشد.
              </li>
              <li>
                ۲. اثر باید از نظر زبانی و دستوری روان و بدون غلط‌های املایی
                باشد.
              </li>
              <li>۳. اثر باید دارای ساختار مشخص باشد.</li>
              <li>۴. صاحب اثر باید قالب اثر را در ابتدای اثر مشخص کند.</li>
              <li>۵. اثر باید، باید به‌صورت یکپارچه و منظم ارسال شود.</li>
              <li>
                ۶. آثار ادبی به تمامی زبان‌های رایج در افغانستان (دری، پشتو،
                ازبیکی و ...) پذیرفته می‌شود.
              </li>
              <li>
                ۷. نویسنده / شاعر باید مالک اثر باشد و ارسال اثر به معنی تأیید
                این موضوع است.
              </li>
              <li>
                ۸. تیم آوای زریاب می‌تواند آثار را برای اصلاحات نگارشی و زبانی
                ویرایش کند.
              </li>
              <li>
                ۹. پس از انتشار، آثار در آرشیو سایت باقی می‌ماند و حذف آن فقط با
                دلایل معقول امکان‌پذیر است.
              </li>
              <li>۱۰. آثار باید در قالب فایل متنی (Word ) ارسال شوند.</li>
              <li>
                ۱۱. صاحب اثر باید نام کامل، سن، محل زندگی، عکس ، آدرس ایمیل و در
                صورت تمایل یک بیوگرافی کوتاه از خود ارائه دهد.
              </li>
              <li></li>
            </ul>
            <div className="w-full font-common-heavy text-20px md:text-36px rtl mt-50px">
              قوانین ارسال مقاله و نقد و نظر در آوای زریاب
            </div>
            <ul className="w-full rtl font-common-thin text-10 md:text-17 mt-7">
              <li className="rtl">
                ۱. مقاله‌ها باید در حوزه ادبیات باشند (نقد ادبی، معرفی کتاب و
                نویسندگان و موضوعات مرتبط).
              </li>
              <li className="rtl">
                ۲. محتوای مقاله نباید مغایر با ارزش‌های افغانستان باشد.
              </li>
              <li className="rtl">
                ۳. مقالات باید به‌صورت روان و بدون غلط‌های املایی و نگارشی
                باشند.
              </li>
              <li className="rtl">
                ۴. مقاله باید حداقل 500 و حداکثر 2000 کلمه باشد. ( آوای زریاب از
                نشر مقاله‌های طولانی خودداری می‌کند).
              </li>
              <li className="rtl">
                ۵. مقاله به تمامی زبان‌های رایج در افغانستان (فارسی، پشتو،
                ازبیکی و ...) پذیرفته می‌شود.
              </li>
              <li className="rtl">
                ۶. نویسنده با ارسال مقاله تأیید می‌کند که مالک اثر بوده یا اجازه
                انتشار آن را دارد.
              </li>
              <li className="rtl">
                ۷. پس از تأیید و انتشار، مقاله در آرشیو آوای زریاب باقی می‌ماند
                و حذف آن تنها با ارائه دلایل معقول امکان‌پذیر است.
              </li>
              <li className="rtl">
                ۸. تیم تحریریه آوای زریاب حق ویرایش جزئی مقاله‌ها (برای اصلاح
                نگارشی و بهبود خوانایی) را دارد.
              </li>
              <li className="rtl">
                ۹. در صورت نیاز به تغییرات اساسی، مقاله برای اصلاح به نویسنده
                بازگردانده می‌شود.
              </li>
              <li className="rtl">
                ۱۰. مقاله‌ها باید در قالب فایل متنی (Word ) ارسال شوند.
              </li>
              <li className="rtl">
                ۱۱. نویسنده باید نام کامل، سن، محل زندگی، عکس ، آدرس ایمیل و در
                صورت تمایل یک بیوگرافی کوتاه از خود ارائه دهد.
              </li>
            </ul>
            <div className="w-full font-common-heavy text-20px md:text-36px mt-30px">
              برای فرستادن آثار خویش ایمیل کنید:
            </div>
            <ul className="w-full rtl font-common-thin text-10 md:text-17 mt-7">
              <li>zaryabshortstory@gmail.com</li>
            </ul>
            <div className="font-common-heavy text-26px md:text-36px mt-50px">
              عضویت در خبرنامه مان
            </div>
            <NewsLetterForm />
            <div className="w-full">
              <p className="mt-3 rtl font-common-thin text-12 md:text-17">
                با وارد کردن ایمیل تان در این جا شما به دریافت ایمیل خبری در
                مورد آوای زریاب و موضوعات دیگر رضایت میدهید.
              </p>
            </div>
          </div>
        </div>
        {/* links */}
        <div className="main-container mt-100px border-t-4 border-b-4 border-footerBorder py-10px rtl">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/"
              title="خانه"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/writing"
              title="آثار ادبی"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/writing"
              title="داستان"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/writing"
              title="شعر"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {Array.isArray(literary) &&
            writingsIsVisible &&
            literary?.map((data, index) => (
              <div
                className="col-span-1 xl:col-span-2"
                key={index}
              >
                <Link2
                  link={`/writing/?type=${data?.slug}`}
                  title={data?.name}
                />
              </div>
            ))}
        </div>

        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/articles"
              title="مقاله‌ها"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {Array.isArray(articles) &&
            isArticleVisible &&
            articles?.map((data, index) => (
              <div
                className="col-span-1 xl:col-span-2"
                key={index}
              >
                <Link2
                  link={`/articles/?article_type=${data?.slug}`}
                  title={data?.name}
                />
              </div>
            ))}
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/review"
              title="نقد و نظر‌ها"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {Array.isArray(review) &&
            isReviewVisible &&
            review?.map((data, index) => (
              <div
                key={index}
                className={`col-span-1 xl:col-span-2 ${
                  index + 1 === 3 ? ' col-span-2 xl:col-span-4' : ''
                }`}
              >
                <Link2
                  link={`/review/?review_type=${data?.slug}`}
                  title={data?.name}
                />
              </div>
            ))}
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className={`col-span-1 xl:col-span-2`}>
            <Link2
              link="/podcasts"
              title="کتاب صوتی"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {Array.isArray(podcast) &&
            isPodcastVisible &&
            podcast?.map((data, index) => (
              <div
                className="col-span-1 xl:col-span-2"
                key={index}
              >
                <Link2
                  link={`/podcasts/?podcast_type=${data?.slug}`}
                  title={data?.name}
                />
              </div>
            ))}
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/magazines"
              title="مجله ها"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {Array.isArray(letter) &&
            isLetterVisible &&
            letter?.map((data, index) => (
              <div
                className="col-span-1 xl:col-span-2"
                key={index}
              >
                <Link2
                  link={`/magazines/?magazine_type=${data?.slug}`}
                  title={data?.name}
                />
              </div>
            ))}
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="کتگوری ها"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {Array.isArray(categories) &&
            categoryIsVisible &&
            categories?.map((data, index) => (
              <div
                className="col-span-1 xl:col-span-2"
                key={index}
              >
                {data?.name && (
                  <Link2
                    link={`/search/?category=${data.slug}`}
                    title={data.name}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
      {/* copyrighting policy */}
      <div className="bg-footerBorder flex flex-col items-center">
        <div className="main-container py-2 md:py-4 xl:py-7">
          <div className="col-span-3 xl:col-span-6">
            <p className="font-common-heavy text-7px md:text-14px xl:text-25px ltr">
              Design and development of the website by{' '}
              <Link href="https://cyborgtech.co">Cyborg Tech</Link>
            </p>
          </div>
          <div className="col-span-3 xl:col-span-6">
            <p className="font-common-heavy text-7px md:text-14px xl:text-25px rtl">
              دیزاین و ساخت وبسایت توست{' '}
              <Link href="https://cyborgtech.co">سایبُرگ تِک</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
