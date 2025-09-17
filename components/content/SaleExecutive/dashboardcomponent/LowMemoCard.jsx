import React from 'react'
import alert from '../../../../assets/images/alert 2.png';
import Image from 'next/image';

const LowMemoCard = () => {
    return (
        <div className="flex flex-col bg-gray-100 p-3 rounded-lg shadow-sm">
            <div className="flex gap-4 items-center">
                <Image className='w-[35px]' src={alert} alt="alert" width={24} height={24} />
                <div className="flex-1">
                    <p className="text-sm font-medium text-primary">John</p>
                    <p className="text-xs text-gray-500">24-Mar 10:12 PM</p>
                </div>
            </div>
            <div className="flex justify-end items-center">
                <span className="text-[#a12426] text-xs font-semibold">Miss Entry</span>
            </div>
        </div>
    )
}

export default LowMemoCard