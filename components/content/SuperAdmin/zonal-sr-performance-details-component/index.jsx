'use client'

import React, { useState } from 'react'
import Button from '../../ReusableComponent/Button'
import { flag, goal, salesRepresentative } from '../../../assets'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import SearchInput from '../../ReusableComponent/SearchInput'
import DocumentTable from './Tables/DocumentTable'
import CreateIMSEntryModal from './Modals/CreateIMSEntryModal'
import EditIMSEntryModal from './Modals/EditIMSEntryModal'
import Tabs from './Tabs'
import IMSEntry from './IMSEntry'
import WeeklyCommitment from './WeeklyCommitment'
import CreateCommitmentEntryModal from './Modals/CreateCommitmentEntryModal'

const ZonalSrPerformanceDetailsComponent = () => {
    const [modal, setModal] = useState("")
    const [tabs, setTabs] = useState(1)
    const [obj, setObj] = useState({
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
    })
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const tabList = [
        { id: 1, name: " IMS Entry", },
        { id: 2, name: "Weekly Commitment", },
    ]
    return (
        <>
            <div className={`${modal == "create" ? "w-[140%]" : ""}  fixed top-0 right-0   transition-transform duration-500 ease-in-out
                ${modal === "create" ? "translate-x-0 z-[99999] " : " translate-x-[540px] z-50"}`}>
                <CreateIMSEntryModal setModal={setModal} obj={obj} />
            </div>
            <div className={`${modal == "edit" ? "w-[140%]" : ""}  fixed top-0 right-0   transition-transform duration-500 ease-in-out
                ${modal === "edit" ? "translate-x-0 z-[99999] " : " translate-x-[540px] z-50"}`}>
                <EditIMSEntryModal setModal={setModal} obj={obj} />
            </div>

            {/* create Commitment Start*/}
            <div className={`${modal == "createCommitment" ? "w-[140%]" : ""}  fixed top-0 right-0   transition-transform duration-500 ease-in-out
                        ${modal === "createCommitment" ? "translate-x-0 z-[99999] " : " translate-x-[540px] z-50"}`}>
                <CreateCommitmentEntryModal setModal={setModal} obj={obj} />
            </div>
            {/* create Commitment End*/}

            <div className=' bg-[#f6f8fc]-200 w-full'>
                <Tabs tabList={tabList} tabs={tabs} setTabs={setTabs} />

                <div className="flex flex-col justify-center items-center bg-[#f3f3f3] gap-y-1 py-6 px-6">
                    <div>
                        <img src={salesRepresentative} />
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

                {tabs == 1 && <IMSEntry handleSearchChange={handleSearchChange}
                    searchTerm={searchTerm}
                    setModal={setModal}
                    setObj={setObj}
                    obj={obj}
                />}
                {tabs == 2 && <WeeklyCommitment handleSearchChange={handleSearchChange}
                    searchTerm={searchTerm}
                    setModal={setModal}
                    setObj={setObj}
                    obj={obj}
                />}

                <div className="grid grid-cols-2 gap-4 mb-6  px-6">
                    {/* Footer Buttons */}
                    {/* <div className="flex justify-end mt-6">
                    <Button
                        onClick={() => setModal("")}
                        extraClass={`w-full !rounded-full !border-lightGray border-[1px] bg-transparent !text-primary`}>
                        Close
                    </Button>
                </div>
                <div className="flex justify-end mt-6">
                    <Button
                        onClick={() => navigate("/zonal-sr-performance-details")}
                        extraClass={`w-full w-full !rounded-full `}>
                        View Details
                    </Button>
                </div> */}

                </div>
            </div>
        </>
    )
}

export default ZonalSrPerformanceDetailsComponent
