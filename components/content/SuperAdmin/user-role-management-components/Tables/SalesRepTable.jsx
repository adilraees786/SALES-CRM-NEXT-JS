'use client'
import React from 'react';
import businessman from '../../../../../assets/images/businessman.png';
import Image from 'next/image';

const SalesRepTable = ({setModal,setObj}) => {
    const header = ["Id", "Name", "No. of Assigned Sales Rep ", "Joining Date", "Active/Inactive", ""]

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
        },
      ];
      

    return (
        <div className=" bg-white rounded-lg shadow-sm mt-4">
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
                                    <Image
                                        src={businessman}
                                        alt="icon"
                                        className="w-10"
                                    />
                                    <span className="text-lg font-medium">{person.salesReps}</span>
                                </td>
                                <td className="px-4 py-3">{person.date} - {person.time}</td>
                                <td className="px-4 py-3">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" checked={person.active} className="sr-only peer" readOnly />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:left-[2px] peer-checked:after:translate-x-full relative after:top-[2px]" />
                                    </label>
                                </td>
                                <td className="px-4 py-3">
                                    <button
                                    onClick={()=>{setObj(person); setModal("editSr")}}
                                    className="text-primary underline font-semibold">Edit</button>
                                </td>
                                {/* <td className="px-4 py-3">
                                    <button className="px-3 py-1.5 border border-orange-400 text-primary font-semibold
                                     rounded-md hover:bg-orange-50 text-sm">
                                        View Details
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesRepTable;
