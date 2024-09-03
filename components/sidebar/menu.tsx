import { menuItems } from '@/data/menu-items';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  return (
    <ul className="mt-4 flex flex-col gap-2 text-sm">
      {menuItems.map(menuItem => (
        <li
          key={menuItem.title}
          className="flex flex-col gap-4 lg:gap-2"
        >
          <h3 className="hidden lg:block text-gray-400 mt-4">{menuItem.title}</h3>

          <ul className="flex flex-col gap-4 lg:gap-2">
            {menuItem.items.map(item => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex gap-2 justify-center items-center lg:justify-start text-gray-500"
                >
                  <Image
                    src={item.icon}
                    alt="Icon"
                    width={20}
                    height={20}
                  />

                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
