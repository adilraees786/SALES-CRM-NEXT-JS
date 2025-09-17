
'use client'
import Image from 'next/image';
import React from 'react';
import flag from '../../../../assets/images/flag.png';
import goal from '../../../../assets/images/goal.png';
import redAlert from '../../../../assets/images/alert 2.png';
import redFlagAlert from '../../../../assets/images/red-flag 1.png';
import Heading from '@/components/reuseable/Heading';
import SimpleInput from '@/components/reuseable/SimpleInput';

const WeeklyComminmentsTable = ({ setModal, setObj }) => {
    const header = ["", "", "", "", ""]
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
        <div className="mt-4 p-4">
            <div className='flex justify-between items-center gap-2'>
                <div className='flex items-center gap-3'>
                    <Image alt='' src={redAlert} height={500} width={500} className='w-[45px]' />
                    <Heading>Missed Weekly Commitments By SRs </Heading>
                </div>
                <div>
                    <SimpleInput extraClass={"bg-white"} placeholder={"Search by Name , Id"} />
                </div>
            </div>
            <div className=" bg-white h-[200px] overflow-auto rounded-lg shadow-md mt-4">
                <table className="min-w-full overflow-auto text-sm text-left">
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
                                <td className="px-4 py-3">Md Moshiur Rahman</td>
                                <td className="px-4 py-3">
                                    <div className="flex-1 flex justify-center   py-1.5  border-l-[2px] border-primary">
                                        <div className="w-full bg-gray-200 h-6">
                                            <div
                                                className={`flex  items-center justify-start h-full bg-[#ff0004]`}
                                            >
                                                <div className="text-sm text-right whitespace-nowrap text-white  font-semibold">Focus Product  Performance {person.percent}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex w-44  items-center justify-start gap-2">
                                        <div className='text-center'>
                                            <Heading className=" text-primary font-semibold  text-lg">20</Heading>
                                            <div className="text-sm text-gray-500">Achieved Targed</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex w-44  items-center justify-start gap-2">
                                        <div className='text-center'>
                                            <Heading extraClassName=" text-secondary font-semibold">80</Heading>
                                            <div className="text-sm text-gray-500">Commitment Target</div>
                                        </div>
                                    </div>
                                </td>

                                <td className="px-4 py-3">
                                    <Image alt='' src={redFlagAlert} width={500} height={500} className='w-[30px]' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WeeklyComminmentsTable;



