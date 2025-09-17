'use client'
import Image from 'next/image'
import React from 'react'
import salefeedback from '../../../../assets/SaleResimages/salefeedback.png'
import happiness11 from '../../../../assets/SaleResimages/happiness11.png'

const Salefeedback = () => {
  const feedbackItems = [
    {
      icon: happiness11,
      message: "Great Job! You're on track to meet your sales. Keep up the momentum! Great Job! You're on track to meet your sales.",
      time: "10:30 AM",
    },
    {
      icon: happiness11,
      message: "You're making steady progress, but there's room for improvement. Try to focus on high-priority products.",
      time: "9:45 AM",
    },
    {
      icon: happiness11,
      message: "Your sales are below the expected target. Please review your approach and consult your Zonal In-Charge.",
      time: "8:20 AM",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex gap-4 pb-2 items-center">
        <Image src={salefeedback} width={50} height={50} alt="Sales feedback" />
        <h2 className="text-2xl font-bold text-[#38373A]">Sales Feedback</h2>
      </div>

      <div className=" px-4 py-17  shadow-md bg-white rounded-md">
        {/* Vertical line */}
        <div className="flex flex-col  pt-8">
          {feedbackItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4   overflow-hidden">
              {/* Icon */}
              <div className='relative   '>
                <div className="w-8  mx-auto rounded-full   flex items-center justify-center  shadow-md">
                  <Image src={item.icon} width={150} height={150} className=' z-10' alt={`Feedback ${index}`} />
                </div>
                {feedbackItems.length - 1 !== index && <div
                  style={{ left: "15px", }}
                  className="absolute  top-0  h-44 w-[2px] bg-gray-300 z-0" />}
              </div>
              {/* Text */}
              <div className="mt-1">
                <p className="text-sm font-semibold text-gray-700 leading-snug">{item.message}</p>
                <span className="text-sm text-gray-400">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Salefeedback

// 'use client'
// import Image from 'next/image'
// import React from 'react'
// import salefeedback from '../../../../assets/SaleResimages/salefeedback.png'
// import happiness11 from '../../../../assets/SaleResimages/happiness11.png';
//  import happiness2 from '../../../../assets/SaleResimages/happiness2.png';
//  import happiness3 from '../../../../assets/SaleResimages/happiness3.png';

// const Salefeedback = () => {
//   const feedbackItems = [
//     {
//       icon: happiness11,
//       message: "Great Job! You're on track to meet your sales target. Keep up the momentum!",
//       time: "10:30 AM",
//     },
//     {
//       icon: happiness11,
//       message: "You're making steady progress, but there's room for improvement. Try to focus on high-priority products.",
//       time: "9:45 AM",
//     },
//     {
//       icon: happiness11,
//       message: "Your sales are below the expected target. Please review your approach and consult your Zonal In-Charge.",
//       time: "8:20 AM",
//     },
//   ];

//   return (
//     <div className="w-full">
//       <div className="flex gap-4 pb-2 items-center">
//         <Image src={salefeedback} width={50} height={50} alt="Sales feedback" />
//         <h2 className="text-2xl font-bold text-[#38373A]">Sales Feedback</h2>
//       </div>

//       <div className="rounded-md bg-white px-8 pb-8 shadow-md h-[420px]">
//         {feedbackItems.map((item, index) => (
//           <div key={index} className="flex gap-4 pt-6 items-start">
//             <div className="w-10 h-10 flex-shrink-0 mt-1">
//               <Image src={item.icon} width={40} height={40} alt={`Feedback ${index}`} />
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-gray-700 leading-snug">{item.message}</p>
//               <span className="text-xs text-gray-400">{item.time}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Salefeedback
