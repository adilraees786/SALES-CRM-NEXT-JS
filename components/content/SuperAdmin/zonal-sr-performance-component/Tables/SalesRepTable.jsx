
'use client'
import React from 'react';
 import flag from '../../../../../assets/images/flag.png';
 import goal from '../../../../../assets/images/goal.png';
import Image from 'next/image';


const SalesRepTable = ({ setModal, setObj }) => {
    const header = ["Id", "Name", "Target Completion ", "Total Covered Memos", "Target Achieved", "Sales Target", "", ""]

    const data = [
        {
            id: '001',
            name: 'Md Moshiur Rahman',
            email: 'mdmoshiur@gmail.com',
            phone: '03138999103',
            region: 'North Region',
            zone: 'Zone 1',
            area: 'Area A',
            salesReps: 5,
            date: '25/03/2025',
            time: '10:51 PM',
            active: true,
            percent: 70,
            totalCoveredMemos: 23
        },
        {
            id: '002',
            name: 'Firoz Alam',
            email: 'firozalam@example.com',
            phone: '03138999104',
            region: 'South Region',
            zone: 'Zone 2',
            area: 'Area B',
            salesReps: 6,
            date: '25/03/2025',
            time: '10:51 PM',
            active: true,
            percent: 85,
            totalCoveredMemos: 53
        },
        {
            id: '003',
            name: 'Md Masud Jomadar',
            email: 'masud.jomadar@example.com',
            phone: '03138999105',
            region: 'East Region',
            zone: 'Zone 3',
            area: 'Area C',
            salesReps: 5,
            date: '25/03/2025',
            time: '10:51 PM',
            active: true,
            percent: 99.9,
            totalCoveredMemos: 34
        },
        {
            id: '004',
            name: 'Rashid Khan',
            email: 'rashid.khan@example.com',
            phone: '03138999106',
            region: 'West Region',
            zone: 'Zone 4',
            area: 'Area D',
            salesReps: 7,
            date: '25/03/2025',
            time: '10:51 PM',
            active: true,
            percent: 34,
            totalCoveredMemos: 30
        },
        {
            id: '005',
            name: 'Sadia Noor',
            email: 'sadia.noor@example.com',
            phone: '03138999107',
            region: 'North Region',
            zone: 'Zone 1',
            area: 'Area A',
            salesReps: 4,
            date: '25/03/2025',
            time: '10:51 PM',
            active: true,
            percent: 90,
            totalCoveredMemos: 56
        },
        {
            id: '006',
            name: 'Ahsan Raza',
            email: 'ahsan.raza@example.com',
            phone: '03138999108',
            region: 'South Region',
            zone: 'Zone 2',
            area: 'Area B',
            salesReps: 6,
            date: '25/03/2025',
            time: '10:51 PM',
            active: true,
            percent: 50,
            totalCoveredMemos: 32
        },
        {
            id: '007',
            name: 'Meher Un Nisa',
            email: 'meher.nisa@example.com',
            phone: '03138999109',
            region: 'East Region',
            zone: 'Zone 3',
            area: 'Area C',
            salesReps: 5,
            date: '25/03/2025',
            time: '10:51 PM',
            active: true,
            percent: 76,
            totalCoveredMemos: 12
        },
    ];


    return (
        <div className=" bg-white rounded-lg shadow-sm mt-4 px-5 ">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className=" text-lightGray font-semibold">
                        <tr className='border-b'>
                            {header.map((item, index) => {
                                return (
                                    <th key={index} className="px-4 py-3">{item}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((person, index) => (
                            <tr key={index} className="border-b text-primary">
                                <td className="px-4 py-3">{person.id}</td>
                                <td className="px-4 py-3">{person.name}</td>
                                <td className="px-4 py-3 flex items-center  gap-2">
                                    <div className="flex-1 flex justify-center   py-1.5  border-l-[2px] border-primary">
                                        <div className="w-full bg-gray-200 h-6">
                                            <div
                                                className={`h-full
                                                    ${person.percent <= 70 ? "bg-[#ff0004]" :person.percent <= 85? "bg-secondary": "bg-[#5FEA7D]"}  
                                                     flex  items-center justify-center`}
                                                style={{ width: `${person.percent}%` }}
                                            >

                                                <div className="text-sm text-center text-white  font-semibold">{person.percent}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className='flex w-full justify-around'>
                                        {person?.totalCoveredMemos}
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex w-44  items-center justify-start gap-2">
                                        < Image src={flag} />
                                        <div className='flex-col'>

                                            <div className="text-sm text-primary font-semibold  ">৳25,000</div>
                                            <div className="text-sm text-gray-500">Achieved Targed</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex w-44  items-center justify-start gap-2">
                                        < Image src={goal} />
                                        <div className='flex-col'>

                                            <div className="text-sm text-secondary font-semibold">৳325,000</div>
                                            {/* <div className="text-sm text-primary font-semibold  ">৳25,000</div> */}
                                            <div className="text-sm text-gray-500">Achieved Targed</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => { setObj(person); setModal("edit") }}
                                        className="text-primary underline font-semibold">Edit</button>
                                </td>
                                <td className="px-4 py-3">
                                    <button 
                                    onClick={()=>{setObj(person);setModal("detailsSr")}}
                                    className="px-3 py-1.5 border border-orange-400 text-primary font-semibold
                                     rounded-md hover:bg-orange-50 text-sm">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesRepTable;
