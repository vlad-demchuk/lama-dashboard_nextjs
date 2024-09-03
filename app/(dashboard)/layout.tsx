import Link from 'next/link';
import Image from 'next/image';
import Menu from '@/components/sidebar/menu';
import Sidebar from '@/components/sidebar/sidebar';
import Header from '@/components/header/header';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa]">
        <Header />
        {children}
      </div>
    </div>
  );
}
