// 'use client'
// import React, { useRef, useState } from 'react'
// import { IoCloseCircleOutline } from 'react-icons/io5'
// import flag from '../../../../../assets/images/flag.png';
// import goal from '../../../../../assets/images/goal.png';
// import salesRepresentative from '../../../../../assets/images/salesRepresentative.png';
// import RegionalZonalTracking from '../RegionalZonalTracking'
// import TotalSummaryChart from '../TotalSummaryChart'
// import { MdOutlineMail } from 'react-icons/md'
// import { FaPhoneAlt } from 'react-icons/fa'
// import moment from 'moment'
// import { useNavigate } from 'react-router-dom'
// import { useScreenHeight } from '@/hooks/UseScreenHeight';
// import Image from 'next/image'
// import Button from '@/components/reuseable/Button';
// import CustomDatePicker from '@/components/reuseable/CustomDatePicker';


// const DetailsSrModal = ({ setModal, obj }) => {
//     const navigate = useNavigate()
//     const Ref1 = useRef()
//     const Ref2 = useRef()
//     const screenHeight = useScreenHeight()

//     const [depStartDate, setDepStartDate] = useState(moment().startOf('month').format('YYYY-MM-DD'));
//     const [depEndDate, setDepEndDate] = useState(moment().endOf('month').format('YYYY-MM-DD'));
//     const [salesByDep, setSalesByDep] = useState([]);
//     const [salesByDepLoader, setSalesByDepLoader] = useState(false);

//     const handleDepDate = (start, end) => {
//         setDepStartDate(start);
//         setDepEndDate(end);
//     };


//     return (
//         <div ref={Ref1} className='fixed top-0 left-0 w-full bg-[#4a4a4aa0] z-[99999] h-full drop-shadow-2xl  flex justify-center items-center'>
//             <div style={{ maxHeight: `${screenHeight}` }} ref={Ref2} className={`bg-white  w-[620px] overflow-auto  rounded-lg transition-all relative ease-in-out duration-300 transform`}>
//                 <div className='w-full '>
//                     <div className=' relative flex flex-col justify-center items-center '>
//                         <div className='bg-secondary w-full flex  justify-center items-center text-white py-3 '>
//                             <p className={`text-2xl font-semibold  `}>
//                                 Zonal In-Charges Details
//                             </p>
//                             {/* <div className='absolute top-1.5 right-1.5'>
//                                 <IoCloseCircleOutline onClick={() => setModal("")} size={32} color='#fff'
//                                     className='cursor-pointer ' />
//                             </div> */}
//                         </div>
//                         <div className=' bg-[#f6f8fc]-200 w-full'>
//                             <div className="flex flex-col justify-center items-center bg-[#f3f3f3] gap-y-1 py-4 px-6">
//                                 <div>
//                                     <Image src={salesRepresentative} />
//                                 </div>
//                                 <p className='text-xl'>{obj?.name}</p>
//                                 <div className='flex items-center gap-1 text-lightGray'>
//                                     <MdOutlineMail className='text-lightGray text-xl' />
//                                     {obj?.email}
//                                 </div>
//                                 <div className='flex items-center gap-1 text-lightGray'>
//                                     <FaPhoneAlt className='text-lightGray text-base' />
//                                     +{obj?.phone}
//                                 </div>
//                             </div>
//                             <div className='flex justify-center pt-6  px-6'>
//                                 <CustomDatePicker
//                                     value={[{ startDate: depStartDate, endDate: depEndDate }]}
//                                     handleChange={handleDepDate}
//                                 />
//                             </div>

//                             <div className="grid grid-cols-2 gap-4 pt-6  px-6">
//                                 <div className='w-full p-4 bg-white rounded-2xl shadow-md flex flex-col justify-between'>

//                                     <div className=" flex  justify-between items-center">
//                                         <div>
//                                             <p className="text-primary font-medium text-base mt-0 ">Focus Product </p>
//                                             <p className="text-primary font-medium text-base mt-0">Performance</p>
//                                         </div>
//                                         <div className="flex justify-end items-start">
//                                             <Image src={flag} className='' />
//                                         </div>


//                                     </div>
//                                     <div>
//                                         <div className="flex-1 flex justify-center   py-1.5  border-l-[2px] border-primary">
//                                             <div className="w-full bg-gray-200 h-6">
//                                                 <div
//                                                     className={`h-full
//                                                     ${obj.percent <= 70 ? "bg-[#ff0004]" : obj.percent <= 85 ? "bg-secondary" : "bg-[#5FEA7D]"}  
//                                                      flex  items-center justify-center`}
//                                                     style={{ width: `${obj.percent}%` }}
//                                                 >

//                                                     <div className="text-sm text-center text-white  font-semibold">{obj.percent}%</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <p className="text-4xl font-semibold text-primary">{obj.percent}%</p>
//                                     </div>

//                                 </div>


//                                 <div className="w-full p-4 bg-white rounded-2xl shadow-md flex items-start justify-between">
//                                     <div>
//                                         <p className="text-primary font-medium text-base">Total Memos</p>
//                                         <h2 className="text-4xl font-semibold text-primary">{obj?.totalCoveredMemos}</h2>
//                                         <div className="mt-2 flex space-x-6">
//                                             <div>
//                                                 <p className="text-lg font-semibold text-primary">120</p>
//                                                 <p className="text-sm text-gray-500">Commitment</p>
//                                             </div>
//                                             <div>
//                                                 <p className="text-lg font-semibold text-secondary">150</p>
//                                                 <p className="text-sm text-gray-500">Achievement</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="flex justify-end items-start">
//                                         <Image src={goal} className='' />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-2 gap-4 mb-6  px-6">
//                                 {/* Footer Buttons */}
//                                 <div className="flex justify-end mt-6">
//                                     <Button
//                                         onClick={() => setModal("")}
//                                         extraClass={`w-full !rounded-full !border-lightGray border-[1px] bg-transparent !text-primary`}>
//                                         Close
//                                     </Button>
//                                 </div>
//                                 <div className="flex justify-end mt-6">
//                                     <Button
//                                         onClick={() => navigate("/zonal-sr-performance-details")}
//                                         extraClass={`w-full w-full !rounded-full `}>
//                                         View Details
//                                     </Button>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div >
//     )
// }

// export default DetailsSrModal

'use client'
import React, { useRef, useState } from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import flag from '@/assets/images/flag.png'
import goal from '@/assets/images/goal.png'
import salesRepresentative from '@/assets/images/salesRepresentative.png'
import RegionalZonalTracking from '../RegionalZonalTracking'
import TotalSummaryChart from '../TotalSummaryChart'
import { MdOutlineMail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import { useScreenHeight } from '@/hooks/UseScreenHeight'
import Image from 'next/image'
import Button from '@/components/reuseable/Button'
import CustomDatePicker from '@/components/reuseable/CustomDatePicker'

const DetailsSrModal = ({ setModal, obj }) => {
    const router = useRouter()
    const Ref1 = useRef()
    const Ref2 = useRef()
    const screenHeight = useScreenHeight()

    const [depStartDate, setDepStartDate] = useState(moment().startOf('month').format('YYYY-MM-DD'))
    const [depEndDate, setDepEndDate] = useState(moment().endOf('month').format('YYYY-MM-DD'))

    const handleDepDate = (start, end) => {
        setDepStartDate(start)
        setDepEndDate(end)
    }

    return (
        <div ref={Ref1} className='fixed top-0 left-0 w-full bg-[#4a4a4aa0] z-[99999] h-full drop-shadow-2xl flex justify-center items-center'>
            <div style={{ maxHeight: `${screenHeight}` }} ref={Ref2} className='bg-white w-[620px] overflow-auto rounded-lg transition-all relative ease-in-out duration-300 transform'>
                <div className='w-full'>
                    <div className='relative flex flex-col justify-center items-center'>
                        <div className='bg-secondary w-full flex justify-center items-center text-white py-3'>
                            <p className='text-2xl font-semibold'>Zonal In-Charges Details</p>
                        </div>
                        <div className='bg-[#f6f8fc]-200 w-full'>
                            <div className='flex flex-col justify-center items-center bg-[#f3f3f3] gap-y-1 py-4 px-6'>
                                <div>
                                    <Image src={salesRepresentative} alt="sales rep" />
                                </div>
                                <p className='text-xl'>{obj?.name}</p>
                                <div className='flex items-center gap-1 text-lightGray'>
                                    <MdOutlineMail className='text-lightGray text-xl' />
                                    {obj?.email}
                                </div>
                                <div className='flex items-center gap-1 text-lightGray'>
                                    <FaPhoneAlt className='text-lightGray text-base' />
                                    +{obj?.phone}
                                </div>
                            </div>

                            <div className='flex justify-center pt-6 px-6'>
                                <CustomDatePicker
                                    value={[{ startDate: depStartDate, endDate: depEndDate }]}
                                    handleChange={handleDepDate}
                                />
                            </div>

                            <div className='grid grid-cols-2 gap-4 pt-6 px-6'>
                                <div className='w-full p-4 bg-white rounded-2xl shadow-md flex flex-col justify-between'>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <p className='text-primary font-medium text-base'>Focus Product</p>
                                            <p className='text-primary font-medium text-base'>Performance</p>
                                        </div>
                                        <div className='flex justify-end items-start'>
                                            <Image src={flag} alt="flag" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex-1 flex justify-center py-1.5 border-l-[2px] border-primary'>
                                            <div className='w-full bg-gray-200 h-6'>
                                                <div
                                                    className={`h-full ${obj.percent <= 70 ? "bg-[#ff0004]" : obj.percent <= 85 ? "bg-secondary" : "bg-[#5FEA7D]"} flex items-center justify-center`}
                                                    style={{ width: `${obj.percent}%` }}
                                                >
                                                    <div className='text-sm text-center text-white font-semibold'>{obj.percent}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-4xl font-semibold text-primary'>{obj.percent}%</p>
                                    </div>
                                </div>

                                <div className='w-full p-4 bg-white rounded-2xl shadow-md flex items-start justify-between'>
                                    <div>
                                        <p className='text-primary font-medium text-base'>Total Memos</p>
                                        <h2 className='text-4xl font-semibold text-primary'>{obj?.totalCoveredMemos}</h2>
                                        <div className='mt-2 flex space-x-6'>
                                            <div>
                                                <p className='text-lg font-semibold text-primary'>120</p>
                                                <p className='text-sm text-gray-500'>Commitment</p>
                                            </div>
                                            <div>
                                                <p className='text-lg font-semibold text-secondary'>150</p>
                                                <p className='text-sm text-gray-500'>Achievement</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end items-start'>
                                        <Image src={goal} alt="goal" />
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-4 mb-6 px-6'>
                                <div className='flex justify-end mt-6'>
                                    <Button
                                        onClick={() => setModal("")}
                                        extraClass='w-full !rounded-full !border-lightGray border-[1px] bg-transparent !text-primary'>
                                        Close
                                    </Button>
                                </div>
                                <div className='flex justify-end mt-6 bo'>
                                    <Button
                                        onClick={() => router.push("/zonal-sr-performance-details")}
                                        extraClass='w-full !rounded-full'>
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsSrModal;

