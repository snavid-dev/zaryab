'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Link2 from '../Link2/Link2';
import axios from '@/utils/api';
import NewsLetterForm from '../NewsLetterForm/NewsLetterForm';

export default function Footer() {
  const [categories, setCategories] = useState(null);
  const [Error, setError] = useState(null);

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

    fetchData();
  }, []);

  // literary writings
  const [literary, setLiterary] = useState([]);

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

    fetchData();
  }, []);

  // articles

  const [articles, setArticles] = useState(null);

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

    fetchData();
  }, []);

  // reviews

  const [review, setReview] = useState(null);

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

    fetchData();
  }, []);

  // podcasts

  const [podcast, setPodcast] = useState(null);

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

    fetchData();
  }, []);

  // letters

  const [letter, setLetter] = useState(null);

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

    fetchData();
  }, []);

  // mail section
  const [newLetter, setNewLetter] = useState(null);
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
    fetchData();
  }, []);
  console.log(newLetter, 'new');

  return (
    <footer className="bg-footer">
      {/*main div of footer*/}
      <div className="bg-footerPic bg-no-repeat bg-bottom bg-auto flex flex-col items-center rtl py-50px">
        {/* text logo and others things */}
        <div className="main-container">
          <div className="col-span-6 xl:col-span-3 grid grid-cols-6 xl:grid-cols-3 gap">
            <div className="col-span-6 md:col-span-2 xl:col-span-3">
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
            <div className="col-span-6 md:col-span-3">
              <div className="relative w-full h-450px lg:h-430px mt-20px">
                {newLetter?.featured_image ? (
                  <Image
                    src={newLetter?.featured_image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center">
                    image not found
                  </div>
                )}
              </div>
              <Link
                href={`/magazines/${newLetter?.slug}`}
                className="w-full h-10 mt-3 flex justify-center items-center font-common-heavy text-white
                   bg-footerBtn hover:bg-footer transition-all border-2 border-footerBtn text-27px md:text-28px
                   "
              >
                خواندن نامه
              </Link>
            </div>
          </div>
          <div className="hidden xl:block xl:col-span-1"></div>
          <div className="col-span-6 xl:col-span-8 rtl text-white mt-50px xl:mt-100px">
            <div className="w-full font-common-heavy text-26px md:text-36px">
              ارسال نوشته ها
            </div>
            <div className="w-full rtl font-common-thin text-12 md:text-17 mt-7">
              <p className="rtl">
                نوشته های ادبی خود را جهت پخش با توجه به نکات ذیل به ایمیل
                farsiwritings@avayezaryab.com ارسال نمایید.
              </p>
              <p className="rtl">
                ۱. نوشته های تان باید در فورمت های docx. , .doc و txt. باشند.
              </p>
              <p className="rtl">
                ۲. ایمیل ارسالی باید با موضوع (درخواست نشر) شروع شود.
              </p>
              <p className="rtl">۴. نوشته باید با ذکر کتگوری (ها) باشد.</p>
            </div>
            <div className="w-full font-common-heavy text-26px md:text-36px rtl mt-50px">
              ارسال مقاله
            </div>
            <div className="w-full rtl font-common-thin text-12 md:text-17 mt-7">
              <p>
                نوشته های ادبی خود را جهت پخش با توجه به نکات ذیل به ایمیل
                farsiwritings@avayezaryab.com ارسال نمایید.
              </p>
              <p>
                ۱. نوشته های تان باید در فورمت های docx. , .doc و txt. باشند.
              </p>
              <p>۲. ایمیل ارسالی باید با موضوع (درخواست نشر) شروع شود.</p>
              <p>۴. نوشته باید با ذکر کتگوری (ها) باشد.</p>
            </div>
            <div className="font-common-heavy text-26px md:text-36px mt-50px">
              عضویت در خبرنامه مان
            </div>
            <NewsLetterForm />
            <div className="w-full">
              <p className="mt-3 rtl font-common-thin text-12 md:text-17">
                با وارد کردن ایمیل تان در این جا شما به دریافت ایمل خبری در مورد
                آوای زریاب و موضوعات دیگر رضایت میدهید.
              </p>
            </div>
          </div>
        </div>
        {/* links */}
        <div className="main-container mt-100px border-t-4 border-b-4 border-footerBorder py-10px rtl">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/"
              title="کلبه"
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
              link="/literarywritings"
              title="نوشته های ادبی"
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
              link="/literarywritings"
              title="داستان"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/literarywritings"
              title="شعر"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {literary?.map((data, index) => (
            <div
              className="col-span-1 xl:col-span-2"
              key={index}
            >
              <Link2
                link={`${data?.slug}`}
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

          {articles?.map((data, index) => (
            <div
              className="col-span-1 xl:col-span-2"
              key={index}
            >
              <Link2
                link={`${data?.slug}`}
                title={data?.name}
              />
            </div>
          ))}
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="/reviewsandopinions"
              title="نقد و نظر‌ها"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {review?.map((data, index) => (
            <div
              key={index}
              className={`col-span-1 xl:col-span-2 ${
                index + 1 === 3 ? ' col-span-2 xl:col-span-4' : ''
              }`}
            >
              <Link2
                link={`${data?.slug}`}
                title={data?.name}
              />
            </div>
          ))}
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className={`col-span-1 xl:col-span-2`}>
            <Link2
              link="/podcasts"
              title="نشست ها"
              head={true}
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          {podcast?.map((data, index) => (
            <div
              className="col-span-1 xl:col-span-2"
              key={index}
            >
              <Link2
                link={data?.slug}
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

          {letter?.map((data, index) => (
            <div
              className="col-span-1 xl:col-span-2"
              key={index}
            >
              <Link2
                link={`${data?.slug}`}
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

          {categories?.map((data, index) => (
            <div
              className="col-span-1 xl:col-span-2"
              key={index}
            >
              {data?.name && (
                <Link2
                  link={data.slug}
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
              Design and development of the website by Cyborg Tech
            </p>
          </div>
          <div className="col-span-3 xl:col-span-6">
            <p className="font-common-heavy text-7px md:text-14px xl:text-25px rtl">
              دیزاین و ساخت وبسایت توست سایبُرگ تِک
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
