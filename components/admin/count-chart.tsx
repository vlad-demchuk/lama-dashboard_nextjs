'use client';

import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import Image from 'next/image';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 45,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 55,
    fill: '#C3EBFA',
  },
];

export default function CountChart() {
  return (
    <div className="flex flex-col h-full w-full bg-white rounded-xl p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Students</h3>
        <Image
          src="/moreDark.png"
          alt="More"
          width={20}
          height={20}
        />
      </div>

      <div className="w-full h-[75%] relative">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt="Male and Female"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="size-5 bg-lamaSky rounded-full" />
          <p className="text-sm font-bold">1,234</p>
          <p className="text-xs text-gray-500">Boys (55%)</p>
        </div>

        <div className="flex flex-col gap-1">
          <div className="size-5 bg-lamaYellow rounded-full" />
          <p className="text-sm font-bold">1,134</p>
          <p className="text-xs text-gray-500">Girls (45%)</p></div>
      </div>
    </div>
  );
}
