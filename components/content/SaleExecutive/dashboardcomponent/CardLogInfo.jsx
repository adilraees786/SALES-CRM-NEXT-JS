import React from 'react'
import redFlag from "../../../../assets/images/red-flag 1.png"
import rightArrow from "../../../../assets/images/rightArrow.png"
import Image from 'next/image'
import Heading from '@/components/reuseable/Heading'
import Paragraph from '@/components/reuseable/Paragraph'

const CardLogInfo = () => {
    return (
        <div className='bg-[#F3F3F3] rounded-lg p-3 flex items-center gap-3'>
            <div>
                <Image src={redFlag} alt='' height={500} width={500} className='w-[60px]' />
            </div>
            <div className='flex flex-col w-full items-start gap-1'>
                <Heading extraClassName={"!font-normal !text-lg"}>Md Moshiur Rahman</Heading>
                <Paragraph extraClassName={"!font-semibold !text-dark-grey !text-sm"}>24-Mar 10:12 PM</Paragraph>
                <div className='flex justify-between items-center  w-full gap-2'>
                    <Paragraph extraClassName={"!text-red-500 !font-semibold !text-sm"}>Focus product "0" IMS</Paragraph>
                    <Image src={rightArrow} alt='' className='w-[5px]' height={500} width={500} />

                </div>
            </div>
        </div>
    )
}

export default CardLogInfo