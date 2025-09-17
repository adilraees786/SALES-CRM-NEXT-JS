import Button from '@/components/reuseable/Button';
import Paragraph from '@/components/reuseable/Paragraph';
import React from 'react';
import pman from '../../../../assets/SaleResimages/pman.png';
import pflag from '../../../../assets/SaleResimages/pflag.png';
import Image from 'next/image';


const DailySale = () => {
    return (
        <div className="w-full ">
            <div className=" flex  flex-col justify-center items-center  bg-[#ECF8FF] rounded-lg shadow-md p-6">
                <Paragraph extraClassName=" font-bold">You Need <span className=' underline'>25000 </span>More Moints To Achieve Promotion </Paragraph>
                <div className="w-full pt-4">
                    <div className=" flex w-[88%] justify-between items-center">
                        <div>

                            <Image src={pman} alt="pman" width={50} height={50} />
                        </div>
                        <div className='  '>
                            <Image src={pflag} alt="pflag" width={25} height={25} />
                        </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <div className="flex-1 relative">
                            <progress
                                value="20"
                                max="100"
                                className="custom-progress w-full"
                            ></progress>
                        </div>
                        <p className="font-semibold whitespace-nowrap">
                            5100.00
                        </p>
                    </div>

                </div>
                <div className=' flex gap-4 pt-4'>
                    <div className='  flex items-center flex-col rounded-sm bg-[#00B9F729] py-1 px-8'>
                        <p className=' font-semibold'>Today Score </p>
                        <p className=' font-bold'>600</p>
                    </div>
                    <div className=' rounded-sm bg-[#8FC98052] flex  flex-col items-center py-1 px-8'>
                        <p className=' font-semibold'>Achieved Score</p>
                        <p className=' font-bold'>5100</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailySale;