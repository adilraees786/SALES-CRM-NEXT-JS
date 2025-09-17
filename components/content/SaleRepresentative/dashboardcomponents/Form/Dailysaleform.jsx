

'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ImageField from '@/components/reuseable/ImageField';
import Input from '@/components/reuseable/Input';
import { UploadImg } from '@/store/Utitilizfunc';

const Dailysaleform = ({ control, register, errors, handleBlur, watch, setValue, trigger, values, labelText, labelExtraClass }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleImgUpload = async (e) => {
        try {
            setIsLoading(true);
            const uploadedImageUrl = await UploadImg(e);
            setValue("image", uploadedImageUrl);
        } catch (error) {
            toast.error("Some error occurred");
        } finally {
            setIsLoading(false);
        }
    };

    console.log(values,"valuesvalues")
    return (
        <>
            <div className='grid grid-cols-1 gap-x-8 gap-y-2 w-full mt-4 px-10'>
                <Input
                    control={control}
                    register={register}
                    placeholder="Enter Today's Sale"
                    lableText="Spice"
                    type="text"
                    name="spice"
                    errors={errors}
                    handleBlur={handleBlur}
                />
                <Input
                    control={control}
                    register={register}
                    placeholder="Enter Today's Sale"
                    lableText="Lacha"
                    type="text"
                    name="lacha"
                    errors={errors}
                    handleBlur={handleBlur}
                />
                <Input
                    control={control}
                    register={register}
                    placeholder="Enter Today's Sale"
                     lableText="Cake"
                    type="text"
                    name="cake"
                    errors={errors}
                    handleBlur={handleBlur}
                />
                <Input
                    control={control}
                    register={register}
                    placeholder="Enter Today's Sale"
                    lableText="Semai"
                    type="text"
                    name="semi"
                    errors={errors}
                    handleBlur={handleBlur}
                />
                <Input
                    control={control}
                    register={register}
                    placeholder="Enter Today's Sale"
                    lableText="Chips"
                    type="text"
                    name="chips"
                    errors={errors}
                    handleBlur={handleBlur}
                />
                <Input
                    lableExtraClass="!text-xl"
                    control={control}
                    register={register}
                    placeholder="No of Shops"
                    lableText="No Of Shops"
                    type="text"
                    name="shop"
                    errors={errors}
                    handleBlur={handleBlur}
                />
                <Input
                     lableExtraClass="!text-xl"
                    control={control}
                    register={register}
                    placeholder="Enter Total IMS"
                    lableText="Total IMS"
                    type="text"
                    name="ims"
                    errors={errors}
                    handleBlur={handleBlur}
                />
                <ImageField
                    values={values}
                    register={register}
                    handleImgUpload={handleImgUpload}
                    errors={errors}
                    isLoading={isLoading}
                    setValue={setValue}
                    name={'image'}
                
                      
                />
            </div>
        </>
    );
};

export default Dailysaleform;
