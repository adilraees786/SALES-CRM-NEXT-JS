import React from 'react';
import Image from 'next/image';
import DashboardCard from './DashboardCard';
import TotalSummaryChart from '../dashboardcomponents/TotalSummaryChart';
import RegionalZonalTracking from '../dashboardcomponents/RegionalZonalTracking';
import ProductPerformance from '../dashboardcomponents/ProductPerformance';
import UserActivityLogs from '../dashboardcomponents/UserActivityLogs';
import salesrepresentative from '../../../../assets/images/salesrepresentative.png';
import businessman from '../../../../assets/images/businessman.png';
import box from '../../../../assets/images/box.png';
import stickyNotes from '../../../../assets/images/stickyNotes.png';
import totalSummary from '../../../../assets/images/totalSummary.png';
import zonaltracking from '../../../../assets/images/zonaltracking.png';

const DashboardComponent = () => {
  const cardsData = [
    {
      title: 'Total Sales Rep',
      value: 20,
      image: salesrepresentative,
    },
    {
      title: 'Total Zonal Incharge',
      value: 17,
      image: businessman,
    },
    {
      title: 'Total Products',
      value: 125,
      image: box,
    },
    {
      title: 'Total Sale Memos',
      value: 17,
      image: stickyNotes,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4  sm:px-6 mt-6 w-full">
      {/* Main content */}
      <div className="lg:col-span-9 w-full">
        {/* Top cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cardsData.map((item, index) => (
            <DashboardCard key={index} item={item} />
          ))}
        </div>

        {/* Charts and tracking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col gap-y-5">
            <div className="flex text-xl text-primary items-center gap-3">
              <Image src={totalSummary} alt="Total Summary" className="w-10" />
              <p>Total Sales Summary Memos</p>
            </div>
            <TotalSummaryChart />
          </div>

          <div className="flex flex-col gap-y-5">
            <div className="flex text-xl text-primary items-center gap-3">
              <Image src={zonaltracking} alt="Zonal Tracking" className="w-10" width={40} height={40} />
              <p>Regional/Zonal Tracking</p>
            </div>
            <RegionalZonalTracking />
          </div>
        </div>

        {/* Product performance */}
        <div className="mt-8">
          <ProductPerformance />
        </div>
      </div>

      {/* Activity log sidebar */}
      <div className="lg:col-span-3 w-full">
        <UserActivityLogs />
      </div>
    </div>
  );
};

export default DashboardComponent;
