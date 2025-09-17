
import React from 'react';
import Image from 'next/image';
import { MdArrowForwardIos } from 'react-icons/md';
 import flag from '../../../../assets/images/flag.png';
import goal from '../../../../assets/images/goal.png';
import graybox from '../../../../assets/images/graybox.png';

const ProductPerformance = () => {
  const performanceData = [
    { location: 'Kasipur', name: 'Md Moshur Rahman', percent: 70 },
    { location: 'Barishal', name: 'Md. Aminul Islam', percent: 65 },
    { location: 'Kasipur', name: 'Md Moshur Rahman', percent: 70 },
    { location: 'Barishal', name: 'Husnain Raza', percent: 65 },
  ];

  return (
    <div className="col-span-2">
      <div className="w-full flex justify-between items-center mb-4">
        <div className="flex text-xl text-primary items-center gap-3">
          <Image src={graybox} alt="Gray Box" className="w-10" width={40} height={40} />
          <p>Focus Product Performance</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <select className="border rounded px-2 py-1 text-sm">
              <option>Below 70%</option>
            </select>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Weekly</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 col-span-2">
        {performanceData.map((item, i) => (
          <div key={i} className="flex items-center justify-between border-b py-3 gap-6">
            <div className="flex w-44 flex-col">
              <div className="font-semibold text-gray-800">{item.location}</div>
              <div className="text-sm text-gray-500">{item.name}</div>
            </div>

            <div className="flex-1 flex justify-center mx-4 py-1.5 border-l-[2px] border-primary">
              <div className="w-full bg-gray-200 h-6">
                <div
                  className="h-full bg-[#ff0004] flex items-center justify-center"
                  style={{ width: `${item.percent}%` }}
                >
                  <div className="text-sm text-center text-white font-semibold">
                    {item.percent}%
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-44 items-center justify-start gap-2">
              <Image src={flag} alt="Flag" width={24} height={24} />
              <div className="flex flex-col">
                <div className="text-sm text-primary font-semibold">৳25,000</div>
                <div className="text-sm text-gray-500">Achieved Target</div>
              </div>
            </div>

            <div className="flex w-44 items-center justify-start gap-2">
              <Image src={goal} alt="Goal" width={24} height={24} />
              <div className="flex flex-col">
                <div className="text-sm text-secondary font-semibold">৳325,000</div>
                <div className="text-sm text-gray-500">Target Amount</div>
              </div>
            </div>

            <MdArrowForwardIos className="text-primary text-xl cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPerformance;
