import React from 'react'
import Button from '../../../ReusableComponent/Button'
import SearchInput from '../../../ReusableComponent/SearchInput'
import { flag, goal } from '../../../../assets'
import DocumentTable from '../Tables/DocumentTable'
import WeeklyCommitmentTable from '../Tables/WeeklyCommitmentTable'

const WeeklyCommitment = ({handleSearchChange,searchTerm,setModal,obj,setObj}) => {
    return (
        <>
            <div className='flex justify-center pt-6  px-6'>
                <div className='flex gap-4 w-full justify-between items-center'>
                    <div className='flex flex-1 w-full'>
                        <SearchInput
                            placeholder="Search by Name"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            extraClass={``}
                        />
                    </div>
                    <Button onClick={() => setModal("createCommitment")}>+ Add Commitment</Button>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4  px-6">
                <div className='w-full p-4 bg-white rounded-2xl shadow-md flex flex-col justify-between'>

                    <div className=" flex  justify-between items-center">
                        <div>
                            <p className="text-primary font-medium text-base mt-0 ">Focus Product </p>
                            <p className="text-primary font-medium text-base mt-0">Performance</p>
                        </div>
                        <div className="flex justify-end items-start">
                            <img src={flag} className='' />
                        </div>


                    </div>
                    <div>
                        <div className="flex-1 flex justify-center   py-1.5  border-l-[2px] border-primary">
                            <div className="w-full bg-gray-200 h-6">
                                <div
                                    className={`h-full
                                                            ${obj.percent <= 70 ? "bg-[#ff0004]" : obj.percent <= 85 ? "bg-secondary" : "bg-[#5FEA7D]"}  
                                                             flex  items-center justify-center`}
                                    style={{ width: `${obj.percent}%` }}
                                >

                                    <div className="text-sm text-center text-white  font-semibold">{obj.percent}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-4xl font-semibold text-primary">{obj.percent}%</p>
                    </div>

                </div>


                <div className="w-full p-4 bg-white rounded-2xl shadow-md flex items-start justify-between">
                    <div>
                        <p className="text-primary font-medium text-base">Total Memos</p>
                        <h2 className="text-4xl font-semibold text-primary">{obj?.totalCoveredMemos}</h2>
                        <div className="mt-2 flex space-x-6">
                            <div>
                                <p className="text-lg font-semibold text-primary">120</p>
                                <p className="text-sm text-gray-500 !mt-0">Commitment</p>
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-secondary">150</p>
                                <p className="text-sm text-gray-500 !mt-0">Achievement</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-start">
                        <img src={goal} className='' />
                    </div>
                </div>
            </div>
            <div className='pt-4  px-6'>
                <WeeklyCommitmentTable setModal={setModal} setObj={setObj} />
            </div>
        </>
    )
}

export default WeeklyCommitment
