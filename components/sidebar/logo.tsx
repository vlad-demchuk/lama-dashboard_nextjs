import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/public"
      className="flex justify-center items-center lg:justify-start gap-2"
    >
      <Image
        width={40}
        height={40}
        src="/logo.png"
        alt="Logo"
      />
      <span className="hidden lg:block">Dashboard</span>
    </Link>
  );
}
