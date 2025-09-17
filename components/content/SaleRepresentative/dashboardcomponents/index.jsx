

'use client'
import React, { useState } from 'react'
import DashboardCards from './Dashboardcards/Cards'
import DailyLandingGraph from './Graph/DailyLandingGraph'
import DailySale from './DailySale'
import Button from '@/components/reuseable/Button'
import Landingpercentage from './Landingpercentage'
import Salefeedback from './Salefeedback'
import Dailysalemodal from './Modals/Dailysalemodal'
import TargetCards from './TargetCards'

const DashboardComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState('');

  const handleEditClick = (field) => {
    setCurrentField(field);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* <Header /> */}
      <div className="p-6 space-y-6">
        <DashboardCards />
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
          {/* Left Section */}
          <div className="lg:col-span-5 space-y-4">
            <DailyLandingGraph />
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <Landingpercentage />
              <Salefeedback />
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-3 space-y-4">
            <Button
              onClick={() => handleEditClick('Daily Sales')}
              extraClass="h-12 w-full px-4 text-white hover:bg-blue-700 transition"
            >
              Enter Daily Sales
            </Button>
            <DailySale />
            <TargetCards />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dailysalemodal
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={currentField}
        
      />
    </div>
  );
};

export default DashboardComponent;
