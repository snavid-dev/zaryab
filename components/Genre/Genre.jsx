import React from 'react';

export default function Genre({ title }) {
  return (
    <div className="flex group flex-row-reverse rtl">
      <div className="font-common-thin text-10px md:text-12px font-bold text-right mt-2px md:mt-0">
        {title && title}
      </div>
      <div className="w-20px h-20px relative">
        <svg
          width="17"
          height="17"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 right-0 bottom-0 group-hover:rotate-90 transition-all duration-1000"
        >
          <path
            d="M7.01677 20.4054C4.65826 19.576 2.67307 17.9323 1.41828 15.77C0.16349 13.6076 -0.278558 11.0684 0.171647 8.6092C0.621853 6.14999 1.93477 3.93211 3.87424 2.35449C5.81371 0.776879 8.25245 -0.0569375 10.7518 0.00301995C13.2512 0.0629774 15.6471 1.01277 17.5087 2.68157C19.3703 4.35037 20.5754 6.62865 20.9071 9.10662C21.2389 11.5846 20.6756 14.0996 19.3186 16.1994C17.9615 18.2991 15.8998 19.8457 13.5043 20.561L12.1523 16.0336C13.4699 15.6401 14.6038 14.7895 15.3502 13.6347C16.0966 12.4798 16.4064 11.0965 16.2239 9.73364C16.0415 8.37076 15.3787 7.1177 14.3548 6.19987C13.3309 5.28203 12.0131 4.75964 10.6385 4.72666C9.26385 4.69368 7.92254 5.15228 6.85583 6.01997C5.78912 6.88766 5.06702 8.10749 4.81941 9.46006C4.57179 10.8126 4.81492 12.2092 5.50505 13.3985C6.19519 14.5878 7.28704 15.4918 8.58422 15.948L7.01677 20.4054Z"
            fill="#FCA30A"
          />
        </svg>
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-0 bg-[#FCA30A] w-17px h-17px rounded-full group-hover:opacity-100 transition-all duration-500 delay-500"></div>
      </div>
    </div>
  );
}
