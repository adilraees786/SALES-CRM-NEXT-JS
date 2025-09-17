'use client'

import React from 'react'
import Image from 'next/image'
import landingper from '../../../../assets/SaleResimages/landingper.png'
import ReactSpeedometer from 'react-d3-speedometer'

const Landingpercentage = () => {
    return (
        <div className="w-full">
            <div className="flex gap-4 pb-2">
                <Image src={landingper} width={50} height={50} alt="Landing Percentage" />
                <h2 className="text-2xl font-bold text-[#38373A] mt-2">Landing Percentage</h2>
            </div>

            <div className="rounded-md items-center px-8 pb-8  bg-white shadow-md ">
                <div className="text-center pt-5">
                    <h1 className="text-4xl font-bold">100%</h1>
                    <p className="font-semibold">Your Current Level is Green</p>
                </div>

            <div className="flex justify-center mt-4">
                    <ReactSpeedometer
                        value={85}
                        minValue={0}
                        maxValue={100}
                        width={300}
                        height={200}
                        segments={5}
                        segmentColors={["#FF0004", "#B6DCF1", "#00B9F7", "#00007C", "#00DD30"]}
                    />
                </div>
                <div className='text-center'>
                    <p className=' font-normal text-[20px]'>Your achievement increased by <span className=' text-[#1689FE]'>৳20,000</span>; <br /> let's reach 100% next week.</p>
                </div>
            </div>

        </div>
    )
}

export default Landingpercentage
