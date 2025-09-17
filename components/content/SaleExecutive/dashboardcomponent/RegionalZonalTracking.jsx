import React from 'react'

const RegionalZonalTracking = () => {
  const regionData = [
    { region: 'East', percent: 99.6, color: 'bg-green-500' },
    { region: 'West', percent: 85, color: 'bg-blue-500' },
    { region: 'South', percent: 70, color: 'bg-red-500' },
    { region: 'North', percent: 85, color: 'bg-blue-500' },
  ];
  return (
    <div className="bg-white h-full rounded-lg shadow-md p-4 space-y-4 flex  flex-col justify-center">
      {regionData.map((region, i) => (
        <div key={i} className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary w-12">{region.region}</span>
          <div className='mx-2 py-1 w-full border-l-[1px] border-l-primary' >
            <div className="w-full  bg-gray-200  h-5 overflow-hidden ">
              <div
                className={`h-5 ${region.color} flex justify-center items-center `}
                style={{ width: `${region.percent}%` }}
              >
                <span className="text-sm font-semibold text-white">{region.percent}%</span>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RegionalZonalTracking
