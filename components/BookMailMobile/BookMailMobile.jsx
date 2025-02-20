import React from 'react';
import BookMobile from '../BookMobile/BookMobile';
import MailMobile from '../MailMobile/MailMobile';

export default function BookMailMobile() {
  return (
    <div className="main-container mt-50px">
      <div className="col-span-6 md:col-span-3 xl:col-span-6">
        <BookMobile />
      </div>
      <div className="col-span-6 md:col-span-3 xl:col-span-6">
        <MailMobile />
      </div>
    </div>
  );
}
