import Image from 'next/image';
import React from 'react';

export default function Advertise() {
  return (
    <section className="mt-50px xl:mt-50px mb-100px">
      <div className="main-container">
        <div className="col-span-6 xl:col-span-12 text-center font-pashto text-60px">
          فراخوان
        </div>
      </div>
      <div className="main-container rtl mt-50px">
        {/* image */}
        <div className="hidden xl:block col-span-3"></div>
        <div className="col-span-6 xl:col-span-6 h-[230px] md:h-[500px] xl:h-[390px] 2xl:h-[500px] relative">
          <Image
            src="/assets/img/advertise.jpg"
            alt="advertise image"
            fill
            className="object-cover absolute"
          />
        </div>
        <div className="hidden xl:block col-span-3"></div>
        <div className="col-span-6 xl:col-span-6 rtl font-pashto">
          <div className="text-20px md:text-30px">
            فراخوان ارسال اثر برای شماره سوم مجله ادبی آوای_زریاب
          </div>
          <br />
          <div className="text-10px md:text-16px">
            مجله ادبی آوای زریاب، سومین شماره خود را ویژه سیامک هروی، نویسنده
            برجسته کشور، منتشر می‌کند.
          </div>
          <div className="text-10px md:text-16px">
            از تمامی نویسندگان، شاعران، مترجمان و علاقه‌مندان دعوت می‌شود آثار
            ادبی خود (داستان کوتاه، شعر، طنز، ترجمه و …) را برای چاپ و نشر در
            این شماره به مجله ارسال کنند.
          </div>
          <br />
          <div className="text-16px md:text-20px">
            اولویت پذیرش با آثاری است که دارای ویژگی‌های زیر باشند:
          </div>
          <div className="text-10px md:text-16px">
            <p>
              {' '}
              • آثار کاملاً تازه که پیش‌تر در هیچ نشریه یا رسانه‌ای منتشر نشده
              باشند.
            </p>
            <p>• آثار تایپ‌شده در فرمت (Word).</p>
            <p>• آثار ویرایش‌شده از نظر نگارش و دستور زبان.</p>
            <p>• آثار ارسالی از سوی دانش‌آموزان مکاتب و دانشجویان.</p>
            <p>
              • ترجمه‌ی اشعار و داستان‌های کوتاه از نویسندگان و شاعران خارجی.
            </p>
            <p>
              • آثار اصلی یا ترجمه‌شده از زبان‌های رایج کشور (پشتو، اُزبیکی،
              ترکمنی و…) به فارسی-دری.
            </p>
          </div>
          <br />
          <div className="text-16px md:text-20px">نشانی ارسال آثار:</div>
          <div className="text-10px md:text-16px">
            {' '}
            zaryabshortstory@gmail.com
          </div>
          <br />
          <div className="text-16px md:text-20px">یادداشت مهم:</div>
          <div className="text-10px md:text-16px">
            مجله ادبی آوای زریاب حق چاپ و نشر تمام آثار ارسالی را برای خود محفوظ
            می‌داند. آخرین مهلت ارسال آثار: ۳۱ ثور ۱۴۰۴ هجری شمسی می باشد.
            <br /> آثاری که پس از این تاریخ ارسال شوند، در این شماره بررسی
            نخواهند شد؛ اما می‌توانید برای شماره‌های آینده منتظر فراخوان‌های
            بعدی ما باشید!
          </div>
        </div>
        <div className="col-span-6 xl:col-span-6 rtl font-pashto mt-50px xl:mt-0">
          <div className="text-20px md:text-30px">
            د «آوای زریاب» ادبي مجلې درېیمې ګڼې ته د لیکنو د لېږلو بلنه
          </div>
          <br />
          <div className="text-10px md:text-16px">
            د «آوای زریاب» ادبي مجله خپله درېیمه ګڼه د هېواد نوموتي لیکوال،
            سیامک هروي، ته ځانګړې کوي.
          </div>
          <div className="text-10px md:text-16px">
            له ټولو لیکوالانو، شاعرانو، ژباړونکو او د ادب له مینه‌والو څخه په
            درنښت غوښتنه کېږي، چې خپلې ادبي هڅې (لنډې کیسې، شعرونه، طنزي لیکنې،
            ژباړې او نور...) په دغه ګڼه کې د چاپ او خپرېدو لپاره مجلې ته
            راولېږي.
          </div>
          <br />
          <div className="text-16px md:text-20px">
            د لیکنو د منلو لپاره لومړیتوب هغو لیکنو ته ورکول کېږي، چې دا لاندې
            ځانګړتیاوې ولري؛
          </div>
          <div className="text-10px md:text-16px">
            <p>
              • بشپړې نوې لیکنې، چې تر دې مخکې په هېڅ مجله یا رسنۍ کې نه وي
              خپاره شوي.
            </p>
            <p>• هغه لیکنې، چې په (Word) کې ټايپ شوي وي.</p>
            <p>• هغه لیکنې، چې د لیکنې او ګرامر له پلوه سم اصلاح شوي وي.</p>
            <p>
              • د ښوونځیو د زده‌کوونکو او د پوهنتونونو د محصلینو له لوري لېږل
              شوې لیکنې.
            </p>
            <p>• د بهرنیو شاعرانو او لیکوالانو د شعرونو او لنډو کیسو ژباړې.</p>
            <p>
              • اصلي لیکنې، یا د هېواد له نورو ژبو (پښتو، اوزبېکي، ترکمني او
              نورو...) نه فارسي - دري ته راژباړل شوې لیکنې.
            </p>
          </div>
          <br />
          <div className="text-16px md:text-20px">د لیکنو د لېږلو پته:</div>
          <div className="text-10px md:text-16px">
            {' '}
            zaryabshortstory@gmail.com
          </div>
          <br />
          <div className="text-16px md:text-20px">مهمه یادونه:</div>
          <div className="text-10px md:text-16px">
            د «آوای زریاب» ادبي مجله د ټولو رالېږل شوو لیکنو د چاپ او خپرېدو حق
            ځان ته ځانګړی ګڼي. <br /> د لیکنو د لېږلو وروستۍ نېټه: د ۱۴۰۴ هـ ش
            کال د ثور ۳۱مه نېټه ده. هغه لیکنې چې له دې نېټې وروسته راولېږل شي،
            په دې ګڼه کې ځای نه‌شو ورکولی؛ خو کولی شئ، چې د راتلونکو ګڼو لپاره
            زموږ د نویو بلنو منتظر پاتې شئ!
          </div>
        </div>
      </div>
    </section>
  );
}
