import React from 'react';
import BookMobile from '../BookMobile/BookMobile';
import MailMobile from '../MailMobile/MailMobile';

export default async function BookMailMobile({ bookData, mailData }) {
  return (
    <div className="main-container mt-50px">
      <div className="col-span-6 md:col-span-3 xl:col-span-6">
        <BookMobile data={bookData} />
      </div>
      <div className="col-span-6 md:col-span-3 xl:col-span-6">
        <MailMobile newLetter={mailData.data[0]} />
      </div>
    </div>
  );
}
