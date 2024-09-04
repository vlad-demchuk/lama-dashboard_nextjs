import Image from 'next/image';

export default function UserCard({ type }: { type: string }) {
  return (
    <div className="flex-1 min-w-[130px] p-4 rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-400">2024/09/25</span>
        <Image
          src="/more.png"
          alt="More"
          width={20}
          height={20}
        />
      </div>
      <h3 className="2xl: font-semibold my-4">1,2345</h3>
      <h4 className="capitalize text-sm font-medium text-gray-500">{type}s</h4>
    </div>
  );
}
