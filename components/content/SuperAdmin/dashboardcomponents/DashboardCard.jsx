
import Image from 'next/image';
import React from 'react';

const DashboardCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between gap-y-6">
      <div>
        <p className="text-base text-primary font-medium">{item?.title}</p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl text-secondary font-semibold mb-4">{item?.value}</h2>
        {item?.image && (
          <Image
            src={item.image}
            alt="Dashboard"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
