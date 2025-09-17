

'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Image from 'next/image';
import graph from '../../../../../assets/SaleResimages/graph.png';
import SimpleDropdown from '@/components/reuseable/SimpleDropdown';


const data = [
  { day: '1', landings: 120 },
  { day: '2', landings: 210 },
  { day: '3', landings: 180 },
  { day: '4', landings: 150 },
  { day: '5', landings: 190 },
  { day: '6', landings: 220 },
  { day: '7', landings: 200 },
  { day: '8', landings: 230 },
  { day: '9', landings: 250 },
  { day: '10', landings: 240 },
  { day: '11', landings: 260 },
  { day: '12', landings: 280 },
  { day: '13', landings: 300 },
  { day: '14', landings: 320 },
  { day: '15', landings: 310 },
  { day: '16', landings: 290 },
  { day: '17', landings: 330 },
  { day: '18', landings: 350 },
  { day: '19', landings: 340 },
  { day: '20', landings: 360 },
  { day: '21', landings: 380 },
  { day: '22', landings: 400 },
  { day: '23', landings: 420 },
  { day: '24', landings: 410 },
  { day: '25', landings: 430 },
  { day: '26', landings: 450 },
  { day: '27', landings: 440 },
  { day: '28', landings: 460 },
  { day: '29', landings: 480 },
  { day: '30', landings: 500 },
];

// Colors inspired by your uploaded image
const COLORS = [
  '#00B9F7', '#00DD30', '#00B9F7', '#2E64FE', '#FF0004', '#00BFFF',
  '#00B9F7', '#00007C', '#00B9F7', '#2E64FE', '#FF0004', '#00BFFF',
  '#00B9F7', '#00007C', '#00B9F7', '#2E64FE', '#FF0004', '#00BFFF',
  '#2E64FE', '#00BFFF', '#FF0004', '#FF0004', '#2E64FE', '#00DD30',
  '#00B9F7', '#00DD30', '#00B9F7', '#00007C', '#FF0004', '#00BFFF',
];


const DailyLandingGraph = () => {
  return (
    <div className=' w-full'>
      <div className='flex gap-2  mb-6 items-center'>
        <Image src={graph} width={50} height={50} alt="Graph icon" />
        <h2 className="text-2xl font-bold text-gray-800">Daily Landing Graph</h2>
      </div>
      <div className="bg-white  rounded-lg  p-4 shadow-md ">

        <div className='w-[20%] flex justify-end mb-4 ml-auto'>
          <SimpleDropdown extraClass='bg-[#F6F8FC]'>
            <option>This Month</option>
            <option>This Week</option>
          </SimpleDropdown>
        </div>



        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#d1d5db' }}
                tickMargin={10}
              />
              <YAxis
                tick={{ fill: '#6b7280', fontSize: 12 }}
                axisLine={{ stroke: '#d1d5db' }}
                tickMargin={10}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  fontSize: '14px'
                }}
                cursor={{ fill: '#f3f4f6' }}
              />
              <Bar
                dataKey="landings"
                radius={[4, 4, 0, 0]}
                barSize={30}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DailyLandingGraph;
