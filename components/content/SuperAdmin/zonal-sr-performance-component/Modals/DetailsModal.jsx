'use client'
import React, { useRef } from 'react'
import { useScreenHeight } from '@/hooks/UseScreenHeight'
import { IoCloseCircleOutline } from 'react-icons/io5'
import blackProduct from '../../../../../assets/images/blackProduct.png';
import businessman from '../../../../../assets/images/businessman.png';
import flag from '../../../../../assets/images/flag.png';
import goal from '../../../../../assets/images/goal.png';
// import products from '../../../../../assets/images/products.png';
import regional from '../../../../../assets/images/regional.png';
import salesRepresentative from '../../../../../assets/images/salesRepresentative.png';


import RegionalZonalTracking from '../RegionalZonalTracking'
import TotalSummaryChart from '../TotalSummaryChart'
import Image from 'next/image';
import Button from '@/components/reuseable/Button';

const DetailsModal = ({setModal}) => {
    const Ref1 = useRef()
    const Ref2 = useRef()
    const screenHeight = useScreenHeight()

    return (
        <div ref={Ref1} className='fixed top-0 left-0 w-full bg-[#4a4a4aa0] z-[99999] h-full drop-shadow-2xl  flex justify-center items-center'>
            <div style={{ maxHeight: `${screenHeight}` }} ref={Ref2} className={`bg-white  w-[820px] overflow-auto  rounded-lg transition-all relative ease-in-out duration-300 transform`}>
                <div className='w-full '>
                    <div className=' relative flex flex-col justify-center items-center '>
                        <div className='bg-secondary w-full flex  justify-center items-center text-white py-3 '>
                            <p className={`text-2xl font-semibold  `}>
                                Zonal In-Charges Details
                            </p>
                            {/* <div className='absolute top-1.5 right-1.5'>
                                <IoCloseCircleOutline onClick={() => setModal("")} size={32} color='#fff'
                                    className='cursor-pointer ' />
                            </div> */}
                        </div>
                        <div className=' bg-[#f6f8fc]-200 w-full'>
                            <div className="grid grid-cols-12 bg-[#f3f3f3] py-4 px-6">
                                <div className='col-span-2'>
                                    <Image src={businessman} />
                                </div>
                                <div className='col-span-8 '>
                                    <h2 className="text-xl font-semibold text-[#5a5a5a]">
                                        Md. Sabbir Ahmed Shaon
                                    </h2>
                                    <div className="flex gap-x-6 w-full mt-2">
                                        <div className=" flex gap-2 items-center">
                                            <div> <Image src={flag} /></div>
                                            <div>
                                                <p className="text-lg font-bold text-red-600 ">৳25,000</p>
                                                <p className="text-sm text-lightGray !mt-0"> Achieved Target</p>
                                            </div>
                                        </div>
                                        <div className=" flex gap-2 items-center">
                                            <div> <Image src={goal} /></div>
                                            <div>
                                                <p className="text-lg font-bold text-secondary ">৳325,000</p>
                                                <p className="text-sm text-lightGray !mt-0"> Achieved Target</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-span-2 flex items-start justify-end gap-3'>
                                    <p className="text-sm text-green-600">Active</p>
                                    <label className="inline-flex items-center cursor-pointer relative">
                                        <input
                                            type="checkbox"
                                            checked={true}
                                            readOnly
                                            className="sr-only peer"
                                        />
                                        <div className="w-10 h-5 bg-lightGray rounded-full peer-checked:bg-green-500 transition-colors duration-300"></div>
                                        <div
                                            className="absolute left-[2px] top-[2px] w-4 h-4 bg-white border rounded-full transition-transform duration-300
                                          peer-checked:translate-x-5"
                                        ></div>
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4  px-6">
                                <div className='flex gap-4 items-center px-3'>
                                    <Image src={regional} className='w-9' />
                                    <p className="font-semibold text-primary text-base">Regional/Zonal Tracking</p>
                                </div>
                                <div className='flex gap-4 items-center px-3'>
                                    <Image src={salesRepresentative} className='w-10' />
                                    <p className="font-semibold text-primary text-base ">Lists Assigned SRs</p>
                                </div>

                                {/* Regional Tracking */}
                                <RegionalZonalTracking />

                                {/* Assigned SRs */}
                                <div className="bg-white p-4 flex flex-col justify-center gap-2.5 rounded-lg shadow-2xl">
                                    {[
                                        { name: "Md. Sabbir Ahmed Shaon", status: "bg-green-400" },
                                        { name: "Reazul Hayat", status: "bg-green-400" },
                                        { name: "Md Masud Rana", status: "bg-gray-300" },
                                        { name: "Md Jamil Ahmed Jiad", status: "bg-red-400" },
                                    ].map((sr) => (
                                        <div key={sr.name} className={`py-0.5 px-2.5 text-white ${sr.status}  `}>
                                            {sr.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4  px-6">
                                <div className='flex gap-4 items-center px-3'>
                                    <Image src={regional} className='w-9' />
                                    <p className="font-semibold text-primary text-base">Total Sales Summary Memos</p>
                                </div>
                                <div className='flex gap-4 items-center px-3'>
                                    <Image src={blackProduct} className='w-10' />
                                    <p className="font-semibold text-primary text-base ">Lists Assigned SRs</p>
                                </div>
                                <TotalSummaryChart />

                                <div className="bg-white p-4 rounded-lg shadow-2xl">
                                    {[
                                        { name: "Buiscuits", percent: 99.6, revenue: "৳25,000" },
                                        { name: "Chips", percent: 80.2, revenue: "৳18,000" },
                                        { name: "Juice", percent: 76.5, revenue: "৳14,000" },
                                        { name: "Chocolate", percent: 20.8, revenue: "৳2,000" },
                                    ].map((item) => (
                                        <div key={item.name} className="mb-3">
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span className='w-20'>{item.name}</span>
                                                <span className="text-secondary flex-1 bg-[#f0faff] py-1 text-center font-semibold">Target Achieved {item.percent}%</span>
                                                <div className="text-right font-bold text-primary w-20">{item.revenue}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6  px-6">
                                {/* Footer Buttons */}
                                <div className="flex justify-end mt-6">
                                    <Button 
                                    onClick={()=>setModal("")}
                                    extraClass={`w-full !rounded-full !border-lightGray border-[1px] bg-transparent !text-primary`}>
                                        Close
                                    </Button>
                                </div>
                                <div className="flex justify-end mt-6">
                                    <Button extraClass={`w-full w-full !rounded-full `}>
                                        Edit Profile
                                    </Button>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default DetailsModal




