'use client'
import Image from 'next/image';
import target from '../../../../../assets/SaleResimages/target.png';
import outlet from '../../../../../assets/SaleResimages/outlet.png';
import sticky from '../../../../../assets/SaleResimages/sticky.png';
import accept from '../../../../../assets/SaleResimages/accept.png';

const cardData = [
  {
    title: "Today's Target",
    value: "৳1,500",
    icon: target,
  },
  {
    title: "Highest Sales Of Route",
    value: "৳52,000",
    icon: accept,
  },
  {
    title: "Total Shops Covered (Last Week)",
    value: "30/60",
    icon: outlet,
  },
  {
    title: "Average Memo Value (Last Week)",
    value: "৳2,500",
    icon: sticky,
  },
];

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between gap-y-6"
        >
          <div>
            <p className="text-base text-primary font-medium">{item.title}</p>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl text-secondary font-semibold mb-4">
              {item.value}
            </h2>
            {item.icon && (
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="w-16 h-16"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
