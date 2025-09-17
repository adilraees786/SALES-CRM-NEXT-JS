"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '@/components/reuseable/Button';
import { createSalesExecutiveSchema } from '@/schema/superadmin';
import Image from 'next/image';
import Input from '@/components/reuseable/Input';
import sales from '../../../../../assets/images/sales.png'

const SalesExecutive = () => {
    const [isLoading, setIsloading] = useState(false)
    const {
        control,
        handleSubmit,
        register,
        trigger,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "john doe",
            email: "john@gmail.com",
            password: "123456",
            confirmPassword: "",
        },
        mode: "onBlur",
        resolver: yupResolver(createSalesExecutiveSchema),
    });


    const handleBlur = async (fieldName) => {
        try {
            await trigger(fieldName);
        } catch (error) {
            console.error(error);
        }
    };

    const submit = (values) => {
        console.log(values, "values")
        toast.success("Sales Executive Created Successfully")
    }
    return (
        <div className='w-[50%] mx-auto  ' style={{ height: `calc(100vh - 260px)` }}>
            <div className='flex flex-col items-center justify-center px-8 h-full'>

                {/* <Image src={sales} /> */}
                <div className='w-full'>
                    <Input
                        control={control}
                        register={register}
                        placeholder="Full Name"
                        lableText="Enter Your Profile Image"
                        type="file"
                        name="name"
                        errors={errors}
                        handleBlur={handleBlur}
                    />
                </div>


                <div className='w-full flex flex-col gap-4'>
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
                    <div className='grid grid-cols-2 gap-4'>
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
                    </div>
                    <div className='mt-1 w-full flex justify-center'>
                        <Button onClick={handleSubmit(submit)} extraClass="!w-[180px] !py-2  !rounded-md !text-sm">
                            Save /  Update
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SalesExecutive
