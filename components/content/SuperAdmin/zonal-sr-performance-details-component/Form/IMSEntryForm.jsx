import React, { useState } from 'react'
import Input from '../../../ReusableComponent/Input'
import Dropdown from '../../../ReusableComponent/Dropdown'



const IMSEntryForm = ({ control, register, errors, handleBlur, watch }) => {

    return (
        <>
            <div className='grid  grid-cols-1   gap-x-8 gap-y-2  w-full mt-4 px-10'>
                <div className='w-full'>
                    <Dropdown
                        lableText='Focus Product Name'
                        placeholder='Select Focus Product Name '
                        name='focusProduct'
                        errors={errors}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        extraClass=" !border !border-1 !rounded-lg"
                    >
                        <option value="North Region" >Product A</option>
                        <option value="South Region" >Product B</option>
                        <option value="East Region" > Product C</option>
                        <option value="West Region" > Product D</option>
                    </Dropdown>
                </div>
                <div className='w-full'>
                    <Dropdown
                        lableText='Other Products'
                        placeholder='Select Other Products '
                        name='otherProduct'
                        errors={errors}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        extraClass=" !border !border-1 !rounded-lg"
                    >
                        <option value="Area A" >Product A</option>
                        <option value="Area B" >Product B</option>
                        <option value="Area C" >Product C</option>
                        <option value="Area D" >Product D</option>
                    </Dropdown>
                </div>
              

                <div className='w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="Total Sales Of Focus Product"
                        lableText="Total Sales Of Focus Product"
                        type="text"
                        name="totalSalesFocusProduct"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>
                <div className='w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="Total Sales Of Other Product"
                        lableText="Total Sales Of Other Product"
                        type="text"
                        name="totalSalesOtherProduct"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>
                <div className='w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="Total IMS"
                        lableText="Total IMS"
                        type="text"
                        name="totalIms"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>
                
                <div className='w-full'>
                    <Dropdown
                        lableText='Outlet Covered Today'
                        placeholder='Select Outlet  Name '
                        name='outletCovered'
                        errors={errors}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        extraClass=" !border !border-1 !rounded-lg"
                    >
                        <option value="Area A" >Outlet A</option>
                        <option value="Area B" >Outlet B</option>
                        <option value="Area C" >Outlet C</option>
                        <option value="Area D" >Outlet D</option>
                    </Dropdown>
                </div>


            </div>
        </>
    )
}

export default IMSEntryForm