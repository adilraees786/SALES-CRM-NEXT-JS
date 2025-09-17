

import target from '../../../../assets/SaleResimages/target.png'
import Image from "next/image"


const TargetCards =()=> {
  const metricsData = [
    {
      id: "1",
      name: "Spice",
      percentage: 10,
      todaysTarget: 60.0,
      lastWeekXAS: 51.0,
      changePercentage: 8.02,
      progressColor: "bg-red-500",
    },
    {
      id: "2",
      name: "Lacha",
      percentage: 92,
      todaysTarget: 60.0,
      lastWeekXAS: 51.0,
      changePercentage: 8.02,
      progressColor: "bg-green-500",
    },
    {
      id: "3",
      name: "Cake",
      percentage: 78,
      todaysTarget: 60.0,
      lastWeekXAS: 51.0,
      changePercentage: 11.02,
      progressColor: "bg-blue-500",
    },
    {
      id: "31",
      name: "Cake",
      percentage: 78,
      todaysTarget: 60.0,
      lastWeekXAS: 51.0,
      changePercentage: 11.02,
      progressColor: "bg-blue-500",
    },
    {
      id: "32",
      name: "Cake",
      percentage: 78,
      todaysTarget: 60.0,
      lastWeekXAS: 51.0,
      changePercentage: 11.02,
      progressColor: "bg-blue-500",
    },
  ]

  return (
    <div className="w-full bg-white px-2 py-4  mt-4 rounded-md overflow-auto h-[670px]">
      <div className="max-w-md mx-auto space-y-4">
        {metricsData.map((item) => (
          <div key={item.id} className="bg-[#FFEAEA8F]  p-4 shadow-md  rounded-xl ">
            {/* Header with name, target icon and percentage */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Image src={target} width={40} height={40} alt="Target Icon" className="text-red-600" />
                </div>

              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-4 flex items-center justify-between">
              <div className="w-full bg-[#FFFFFF] rounded-full h-3 relative">
                <div
                  className={`h-3 rounded-full ${item.progressColor}`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <span className="ml-2 text-xl font-bold text-[#1398E6]">
                {item.percentage}%
              </span>
            </div>


            {/* Metrics row */}
            <div className="flex justify-between items-center ">
              <div className="bg-white py-2 px-4 rounded-md flex  gap-4">
                <div>
                  <div className=" font-[#2E2E2E] text-left">Today's Target</div>
                  <div className="font-semibold items-center text-[#0E0D0B]">
                    ৳{item.todaysTarget.toFixed(2)}
                  </div>
                </div>
                <div className=''>
                  <div className=" font-[#2E2E2E] text-right"> Last Week IMS</div>
                  <div className="font-semibold  items-center text-[#0E0D0B]">
                    ৳{item.lastWeekXAS.toFixed(2)}
                  </div>
                </div>
              </div>



              <div className="text-right">
                <div className="text-[#22835C] font-semibold mb-1">+{item.changePercentage.toFixed(2)}%</div>
                <div className="text-[#2E2E2E] text-xs">from last week</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TargetCards;