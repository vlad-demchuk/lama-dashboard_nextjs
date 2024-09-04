import UserCard from '@/components/admin/user-card';
import CountChart from '@/components/admin/count-chart';

export default function AdminPage() {
  return (
    <main className="flex flex-col md:flex-row p-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CHARTS */}
        <div className="flex flex-wrap justify-between items-center gap-2">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        
        {/* MIDDLE CHART */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* COUNT CHART*/}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART*/}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>

        {/* BOTTOM CHART */}
      </div>
      
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 bg-orange-100">Right</div>
    </main>
  );
}
