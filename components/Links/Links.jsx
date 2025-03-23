import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Links({ link, title, onClick, big }) {
  const pathname = usePathname();
  let active = pathname.startsWith(link);

  return (
    <li
      className="h-8 cursor-pointer overflow-hidden group col-span-6 xl:col-span-1 text-right xl:text-center"
      onClick={onClick}
    >
      <p
        className={`hidden xl:block group-hover:-translate-y-7 transition-all duration-300 ${
          (active ||
            (link === '/writing' &&
              (pathname.startsWith('/episode') ||
                pathname.startsWith('/story') ||
                pathname.startsWith('/stories') ||
                pathname.startsWith('/poem') ||
                pathname.startsWith('/poems') ||
                pathname.startsWith('/book')))) &&
          link !== '/'
            ? 'text-footerBtn'
            : pathname === '/about'
            ? 'text-white'
            : 'text-black'
        } mt-2 font-common-lg font-bold`}
      >
        {title}
      </p>
      <p
        className={`xl:group-hover:-translate-y-9 transition-all duration-300 ${
          (active ||
            (link === '/writing' &&
              (pathname.startsWith('/episode') ||
                pathname.startsWith('/story') ||
                pathname.startsWith('/stories') ||
                pathname.startsWith('/poem') ||
                pathname.startsWith('/poems') ||
                pathname.startsWith('/book')))) &&
          link !== '/'
            ? 'text-footerBtn'
            : pathname === '/about'
            ? 'text-white'
            : 'text-black'
        } mt-2 font-common-lg font-bold`}
      >
        <Link href={`${link}`}>{title}</Link>
      </p>
    </li>
  );
}
