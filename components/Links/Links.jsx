import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Links({ link, title }) {
  const pathname = usePathname();
  const active = pathname.startsWith(link);
  return (
    <li className="h-8 cursor-pointer overflow-hidden group col-span-6 xl:col-span-1 text-right xl:text-center">
      <p
        className={`hidden xl:block group-hover:-translate-y-7 transition-all duration-300 ${
          active && link !== '/'
            ? 'text-footerBtn'
            : pathname === '/about'
            ? 'text-white'
            : 'text-black'
        }`}
      >
        {title}
      </p>
      <p
        className={`xl:group-hover:-translate-y-9 transition-all duration-300 ${
          active && link !== '/'
            ? 'text-footerBtn'
            : pathname === '/about'
            ? 'text-white'
            : 'text-black'
        }`}
      >
        <Link href={`${link}`}>{title}</Link>
      </p>
    </li>
  );
}
