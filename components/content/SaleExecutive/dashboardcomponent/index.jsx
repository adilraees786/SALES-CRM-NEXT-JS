import React from 'react'
import CardSection from './CardSection'
import RightSectionLogs from './RightSectionLogs'
import GraphSection from './GraphSection'
import WeeklyComminmentsTable from './WeeklyComminmentsTable'
import FocusProductTable from './FocusProductTable'
import ZonalInchargeTable from './ZonalInchargeTable'

const DashboardComponent = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4  sm:px-6 mt-6 w-full">
                {/* Left Side */}
                <div className="lg:col-span-9 w-full">
                    <CardSection />
                    <GraphSection />
                    <WeeklyComminmentsTable />
                    <FocusProductTable />
                </div>
                {/* Right Side */}
                <div className="lg:col-span-3 overflow-auto w-full">
                    <RightSectionLogs />
                </div>
            </div>
            <ZonalInchargeTable />
        </>
    )
}

export default DashboardComponent