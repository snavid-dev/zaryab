'use client';
import axios from '@/utils/api';
import React, { useState } from 'react';

export default function NewsLetterForm() {
  const [inputDisable, setInputDisable] = useState(true);
  const [email, setEmail] = useState('');
  const [Error, setError] = useState(null);
  const [message, setMessage] = useState('');
  const [collorMessage, setColorMessage] = useState('');

  const handleSubmit = async () => {
    let response;
    try {
      response = await axios.post(`/v1/newsletter?email=${email}`);
      setEmail('');
      setInputDisable('true');
      setMessage(
        response.status === 200
          ? 'you successfully subscribe'
          : response.status === 409
          ? 'you already subscribe'
          : 'your email is not valid'
      );
      setColorMessage(response.status === 200 ? 'green' : 'red');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
    console.log(response.status);
  };
  return (
    <div className="w-full">
      {inputDisable ? (
        <div
          className="w-full"
          onClick={() => {
            setInputDisable(false);
          }}
        >
          <div
            className="w-full p-1 md:p-3 border-4 border-footerBtn
                         text-gray     bg-footer text-left outline-none cursor-pointer disabled"
          >
            yourmail@gmail.com
          </div>
        </div>
      ) : (
        <div className="w-full relative">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="w-full p-1 md:p-3 border-4 border-footerBtn
                              bg-white text-left outline-none text-footer ltr transition-all duration-700"
          />
          <button
            onClick={handleSubmit}
            className=" absolute h-[90%] pr-2 top-1 right-2 border-r-2 border-footerBtn rotate-180"
          >
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
      {message && (
        <div
          className={`mt-2 font-12px ${
            collorMessage === 'green' ? 'text-green-500' : 'text-red-600'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
