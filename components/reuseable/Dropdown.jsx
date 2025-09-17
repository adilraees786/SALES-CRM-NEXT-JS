"use client"
import React from 'react'

const Dropdown = ({ control, register, disabled = false, errorExtraClass, extraClass, handleBlur, placeholder, errors, lableText, type, name, children, ...otherProps }) => {
    return (
        <div className='flex flex-col w-full relative'>
            <label className='text-primary my-1 font-medium'>{lableText}</label>
            <select disabled={disabled} className={`${extraClass} px-4 py-2.5 !rounded-sm  
                 ${disabled ? "border-lightGray text-lightGray bg-[#d5d5d5]" :
                    "border border-1 border-lightGray text-primary"} 
                   outline-none w-full`}
                onBlur={() => handleBlur(name)}
                {...register(name)}
                control={control}
                {...otherProps} name={name}>
                <option value="" selected disabled>{placeholder}</option>
                {children}
            </select>
            {errors?.[name]?.message && <p className={`${errorExtraClass} text-error text-sm my-1`} name={name} component="div">{errors?.[name]?.message}</p>}
        </div>
    )
}
export default Dropdown