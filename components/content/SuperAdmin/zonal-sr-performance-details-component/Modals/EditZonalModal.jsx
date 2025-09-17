import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '../../../ReusableComponent/Button';
import Header from './Header';
import {  createZISchema } from '../../../../schemas';
import ZonalForm from '../Form/ZonalForm';

const EditZonalModal = ({ setModal, obj }) => {
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
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            status: ""

        },
        mode: "onBlur",
        resolver: yupResolver(createZISchema),
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
        toast.success("Zonal In-Charges Updated Successfully")
        reset()
        setModal(false)
    }


    useEffect(() => {
        setValue("name", obj?.name)
        setValue("email", obj?.email)
        setValue("phone", obj?.phone)
        setValue("password", obj?.password)
        setValue("region", obj?.region)
        setValue("zone", obj?.zone)
        setValue("area", obj?.area)
    }, [obj])
    return (
        <div className='!w-full h-screen bg-[#b8b8b88a] z-[999] fixed top-0 right-0 flex flex-col justify-center items-end'>
        <div className='bg-white overflow-y-auto h-screen shadow-2xl  w-[540px] laptop:w-[70%]'>
            <Header msg={`Edit ZI`} />
            <div style={{ height: "calc(100vh - 170px)" }} className="relative mt-3 mb-6 overflow-auto">
                <ZonalForm
                    control={control} register={register}
                    errors={errors} handleBlur={handleBlur}
                    watch={watch}
                />
            </div>
            <div className='flex justify-end gap-4 items-center mb-1 px-12'>
                <Button onClick={() => { reset(); setModal("") }} extraClass="!w-[120px] !py-2  !rounded-md !text-sm !text-primary bg-white border-lightGray border-[1px]" >Close</Button>
                <Button onClick={handleSubmit(submit)} extraClass="!w-[120px] !py-2  !rounded-md !text-sm">Save</Button>
            </div>
        </div>
    </div>
    )
}

export default EditZonalModal