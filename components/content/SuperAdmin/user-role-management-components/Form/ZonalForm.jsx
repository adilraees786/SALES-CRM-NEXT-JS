import React, { useState } from 'react'
import Input from '@/components/reuseable/Input'
import Dropdown from '@/components/reuseable/Dropdown'



const ZonalForm = ({ control, register, errors, handleBlur, watch  }) => {

    return (
        <>
            <div className='grid  grid-cols-1   gap-x-8 gap-y-2  w-full mt-4 px-10'>
                <div className='w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="Full Name"
                        lableText="Full Name"
                        type="text"
                        name="name"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>
                <div className='w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="Email"
                        lableText="Email"
                        type="text"
                        name="email"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>
                <div className='w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="Mobile Number"
                        lableText="Mobile Number"
                        type="text"
                        name="phone"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>
                <div className='mt-1 w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="Enter Password"
                        lableText="Password"
                        type="password"
                        name="password"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>
                <div className='mt-1 w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="confirm Password"
                        lableText="confirm Password"
                        type="password"
                        name="confirmPassword"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>
                <div className='w-full'>
                    <Dropdown
                        lableText='Select Region'
                        placeholder='Select Region '
                        name='region'
                        errors={errors}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        extraClass=" !border !border-1 !rounded-lg"
                    >
                        <option value="North Region" >North Region</option>
                        <option value="South Region" >South Region</option>
                        <option value="East Region" >East Region</option>
                        <option value="West Region" >West Region</option>
                    </Dropdown>
                </div>
                <div className='w-full'>
                    <Dropdown
                        lableText='Select Zone'
                        placeholder='Select Zone '
                        name='zone'
                        errors={errors}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        extraClass=" !border !border-1 !rounded-lg"
                    >
                        <option value="Zone 1" >Zone 1</option>
                        <option value="Zone 2" >Zone 2</option>
                        <option value="Zone 3" >Zone 3</option>
                        <option value="Zone 4" >Zone 4</option>
                    </Dropdown>
                </div>
                <div className='w-full'>
                    <Dropdown
                        lableText='Select Area'
                        placeholder='Select Area '
                        name='area'
                        errors={errors}
                        control={control}
                        handleBlur={handleBlur}
                        register={register}
                        extraClass=" !border !border-1 !rounded-lg"
                    >
                        <option value="Area A" >Area A</option>
                        <option value="Area B" >Area B</option>
                        <option value="Area C" >Area C</option>
                        <option value="Area D" >Area D</option>
                    </Dropdown>
                </div>

            </div>
        </>
    )
}

export default ZonalForm