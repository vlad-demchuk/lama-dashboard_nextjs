import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-end md:justify-between items-center p-4">
      {/* SEARCH BAR*/}
      <div className="hidden md:flex items-center gap-2 px-2 text-xs rounded-full ring-[1.5px] ring-gray-300">
        <Image
          src="/search.png"
          alt="Search"
          width={14}
          height={14}
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-4">
        <div className="icon">
          <Image
            src="/message.png"
            alt="Messages"
            width={20}
            height={20}
          />
        </div>

        <div className="icon relative">
          <Image
            src="/announcement.png"
            alt="Messages"
            width={20}
            height={20}
          />
          <div className="absolute -top-2.5 -right-3 flex justify-center items-center size-5 text-xs bg-purple-500 rounded-full">3</div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">User Name</span>
          <span className="text-[10px] text-gray-500 text-right">Role</span>
        </div>

        <Image
          src="/avatar.png"
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>

    </header>
  );
}
