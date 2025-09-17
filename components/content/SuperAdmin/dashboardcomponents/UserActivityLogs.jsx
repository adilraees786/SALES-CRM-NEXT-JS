// components/UserActivityLogs.js
import React from 'react';
import Image from 'next/image';

import clock from '../../../../assets/images/clock.png';
import grayclock from '../../../../assets/images/grayclock.png';

const UserActivityLogs = () => {
  return (
    <div className="w-full mx-auto space-y-4 h-full">
      <div className="  text-lg flex  font-semibold  items-center gap-2">
        <Image src={grayclock} alt="Gray Clock" width={40} height={40} />
      <h2>User Activity Logs
      </h2>
      </div>

      <div
        className="bg-white rounded-xl shadow-md p-4 space-y-4 overflow-auto"
        style={{ height: `calc(100vh - 150px)` }}
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-blue-50 text-center rounded-lg p-3 shadow-sm">
            <p className="text-primary text-sm">Active Users</p>
            <p className="text-secondary text-2xl font-semibold">05</p>
          </div>
          <div className="bg-red-50 text-center rounded-lg p-3 shadow-sm">
            <p className="text-primary text-sm">Miss Entries</p>
            <p className="text-secondary text-2xl font-semibold">10</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Active User */}
          <div className="flex flex-col bg-gray-100 p-3 rounded-lg shadow-sm">
            <div className="flex gap-4 items-center">
              <Image src={clock} alt="Clock" width={24} height={24} />
              <div className="flex-1">
                <p className="text-sm font-medium text-primary">Samentha John</p>
                <p className="text-xs text-gray-500">24-Mar 10:12 PM</p>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <span className="text-secondary text-xs font-semibold">Active</span>
            </div>
          </div>

          {/* Miss Entry */}
          <div className="flex flex-col bg-gray-100 p-3 rounded-lg shadow-sm">
            <div className="flex gap-4 items-center">
              <Image src={clock} alt="Clock" width={24} height={24} />
              <div className="flex-1">
                <p className="text-sm font-medium text-primary">John</p>
                <p className="text-xs text-gray-500">24-Mar 10:12 PM</p>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <span className="text-[#a12426] text-xs font-semibold">Miss Entry</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserActivityLogs;
