import Image from 'next/image'
import React from 'react'
import TotalSummaryChart from './TotalSummaryChart'
import RegionalZonalTracking from './RegionalZonalTracking'
import totalSummary from '../../../../assets/images/totalSummary.png';
import zonaltracking from '../../../../assets/images/zonaltracking.png';
import Heading from '@/components/reuseable/Heading';

const GraphSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col gap-y-5">
                <div className="flex text-xl text-primary items-center gap-3">
                    <Image src={totalSummary} alt="Total Summary" className="w-10" />
                    <Heading>Total Sales Summary Memos</Heading>
                </div>
                <TotalSummaryChart />
            </div>

            <div className="flex  flex-col gap-y-2">
                <div className="flex text-xl text-primary items-center gap-3">
                    <Image src={zonaltracking} alt="Zonal Tracking" className="w-10" width={40} height={40} />
                    <Heading>Regional/Zonal Tracking</Heading>
                </div>
                <RegionalZonalTracking />
            </div>
        </div>
    )
}

export default GraphSection