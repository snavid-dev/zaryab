import React from 'react';

export default function NewArticle() {
  return (
    <div className="mt-7">
      <div>
        <p className="rtl font-common-med text-3xl">چگونه انسان باشید.</p>
      </div>
      <div className="flex rtl justify-between items-center">
        <div className="rtl flex text-right items-center text-[8px]">
          <b className="font-smallTitle">نویسنده:</b>
          <p className="font-smallText">باسط یزدانی</p>
        </div>
        <div className="rtl flex text-right text-8px items-center">
          <b className="font-smallTitle">تاریخ:</b>
          <p className="font-smallText">1403/12/05</p>
        </div>
        <div className="flex text-8px">
          <p className="font-smallText mr-1">خبری</p>
          <p className="font-smallText">خبری</p>
        </div>
      </div>
    </div>
  );
}
