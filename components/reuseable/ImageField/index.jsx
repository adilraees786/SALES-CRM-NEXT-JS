'use client'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { FaCirclePlus } from 'react-icons/fa6'
import Image from 'next/image'

const ImageField = ({ values, register, handleImgUpload, errors, isLoading, setValue, name }) => {
    return (
        <div className='relative'>
            {values[name] && <FaTrash className='cursor-pointer text-error absolute top-1 right-1 z-50' onClick={() => { setValue(name, "") }} />}
            {values[name] ?
                <div className='w-full  flex justify-center overflow-hidden'>
                    {/* <img className='w-36 h-32  object-cover' src={values[name] && values[name]} alt='' /> */}
                    <Image
                        className='w-36 h-32 object-cover'
                        width={500}
                        height={500}
                        src={values[name]}
                        alt='Uploaded image'
                    />

                </div>
                :
                <label>
                    <div className='border-500 border-[1px] border-gray-400 p-12 text-center cursor-pointer'>
                        <FaCirclePlus className='w-full text-primaryBg text-center text-3xl' />
                    </div>
                    <input
                        type="file"
                        className="hidden"
                        {...register(name, {
                            onChange: handleImgUpload,
                        })}
                    />
                </label>
            }
            {errors[name]?.message && <p className="text-center  my-2 text-error font-normal text-sm">{errors[name]?.message}</p>}
            {isLoading && <p className='text-center text-sm my-2'>Please wait...</p>}
        </div>
    )
}

export default ImageField;