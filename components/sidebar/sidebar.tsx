import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/sidebar/menu';
import Logo from '@/components/sidebar/logo';

export default function Sidebar() {
  return (
    <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
      <Logo />

      <Menu />
    </aside>
  );
}
