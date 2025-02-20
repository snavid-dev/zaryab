import Link from 'next/link';

export default function Link2({ link, title , head }) {
  return (
    <div className="text-8px md:text-14px xl:text-20px 2xl:text-24px cursor-pointer overflow-hidden">
      <p className={`text-white ${head ? 'font-bold' : ''}`}>
        <Link href={`${link}`}>{title}</Link>
      </p>
    </div>
  );
}
