'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Link2 from '../Link2/Link2';

export default function Footer() {
  const [inputDisable, setInputDisable] = useState(true);
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
                <Image
                  src="/assets/img/mail.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </div>
              <Link
                href="#"
                className="w-full h-10 mt-3 flex justify-center items-center font-common-heavy text-white
                   bg-footerBtn hover:bg-footer transition-alborder-2 border-footerBtn text-27px md:text-28px
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
            <div className="w-full">
              {inputDisable ? (
                <div
                  className="w-full"
                  onClick={() => {
                    setInputDisable(false);
                  }}
                >
                  <input
                    type="text"
                    placeholder="yourmail@gmail.com"
                    className="w-full p-1 md:p-3 border-4 border-footerBtn
                              bg-footer text-left outline-none cursor-pointer disabled"
                  />
                </div>
              ) : (
                <div className="w-full relative">
                  <input
                    type="text"
                    className="w-full p-1 md:p-3 border-4 border-footerBtn
                              bg-white text-left outline-none text-footer ltr transition-all duration-700"
                  />
                  <button className=" absolute h-[90%] pr-2 top-1 right-2 border-r-2 border-footerBtn rotate-180">
                    <svg
                      width="45"
                      height="13"
                      viewBox="0 0 45 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.74372 0.631282C6.40201 0.289573 5.84799 0.289573 5.50628 0.631282L0.256281 5.88128C-0.0854271 6.22299 -0.0854271 6.77701 0.256281 7.11872L5.50628 12.3687C5.84799 12.7104 6.40201 12.7104 6.74372 12.3687C7.08543 12.027 7.08543 11.473 6.74372 11.1313L2.9874 7.37497H44.125C44.6082 7.37497 45 6.98322 45 6.49997C45 6.01672 44.6082 5.62497 44.125 5.62497H2.98747L6.74372 1.86872C7.08543 1.52701 7.08543 0.97299 6.74372 0.631282Z"
                        fill="#2F3030"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
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
              link="#"
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
              link="#"
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
              link="#"
              title="داستان"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="شعر"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="داستانک"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="قصه"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="قصیده"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="دوبیتی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="ترکیب‌ بند"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="نیمایی"
            />
          </div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="داستان کوتاه"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="رمان"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="غزل"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="مثنوی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="مستزاد"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="سپید"
            />
          </div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="داستان بلند"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="نمایش‌نامه"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="قطع"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="مسمط"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="چهار پاره"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="موج نو"
            />
          </div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="رمان کوتاه"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="فیلم‌نامه"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="رباعی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="ترجیح‌بند"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="بهر طویل"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="مقاله‌ها"
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
              link="#"
              title="علمی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="تحقیقی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="خبری"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="نقد و نظر‌ها"
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
              link="#"
              title="کتاب ها"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="مقاله ها"
            />
          </div>
          <div className="col-span-2 xl:col-span-4">
            <Link2
              link="#"
              title="نوشته های نویسنده گان مان"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="نشست ها"
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
              link="#"
              title="ادبی "
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="خودمانی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="آموزشی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
        </div>
        <div className="main-container mt-10px border-t-4 border-b-4 border-footerBorder py-10px">
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="نامه‌ها"
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
              link="#"
              title="جدید"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="پر‌‌‌‌‌‌ بازدید ترین ها"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="آرشیو"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
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

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="هنر"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="بیوگرافی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="تجارت"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="کودکان"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="دینی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="کامیک"
            />
          </div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="رهنمای آشپزی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="رویایی (فانتزی)"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="تخیلی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="رمان تصویری"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="تاریخی تخیلی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="تاریخی"
            />
          </div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="ترسناک"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="خاطرات"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="موسیقی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="رمز آلود"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="غیر تخیلی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="شاعرانه"
            />
          </div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="روان شناسی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="عاشقانه"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="علمی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="علمی تخیلی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="فلسفی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="خود سازی"
            />
          </div>

          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="ورزشی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="هیجان انگیز"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="سفرنامه"
            />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <Link2
              link="#"
              title="وطن دوستی"
            />
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-1 xl:col-span-2"></div>
        </div>
      </div>
      {/* copyrighting policy */}
      <div className="bg-footerBorder hidden xl:flex flex-col items-center">
        <div className="main-container py-7">
          <div className="col-span-6">
            <p className="font-common-heavy text-25px 2xl:text-30px ltr">
              Design and development of the website by Cyborg Tech
            </p>
          </div>
          <div className="col-span-6">
            <p className="font-common-heavy text-25px 2xl:text-30px rtl">
              دیزاین و ساخت وبسایت توست سایبُرگ تِک
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
