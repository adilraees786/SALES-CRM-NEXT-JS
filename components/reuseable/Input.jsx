"use client"
import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const Input = ({ disabled = false, control, eyeIconExtraClass, lockIcon, lableExtraClass, extraClass, register, errorExtraClass, min, handleBlur, placeholder, errors, lableText, type, name, ...otherProps }) => {
    const [eyeIcon, setEyeIcon] = useState(true)
    const today = new Date()
    const todayDate = new Date().toISOString().split('T')[0];
    const todayDateTime = today.toISOString().slice(0, 16)

    return (
        <div className='flex flex-col w-full relative'>
            <label className={`text-primary my-1 ${lableExtraClass} font-medium`}>{lableText}</label>
            <div className='relative w-full'>
                {/* {lockIcon && <img src={lockImg} alt="lockIcon" className='absolute left-6 top-3 max-w-4' />} */}
                <input disabled={disabled} min={type === "datetime-local" ? todayDateTime : (type === "date" ? todayDate : min)} placeholder={placeholder} onBlur={() => handleBlur(name)} {...register(name)} control={control} {...otherProps} className={`px-4 ${extraClass} py-2  border-1  ${disabled ? "border-lightGray text-primary bg-[#d5d5d5]" :
                    "border-lightGray text-primary"}  rounded-sm outline-none w-full mb-0.5`} type={type === "password" ? eyeIcon ? "password" : type === 'datetime-local' ? "datetime-local" : "text" : type} name={name} />
                {type === "password" && (eyeIcon ?
                    <FaEyeSlash className={`absolute ${eyeIconExtraClass} bottom-4 right-3  cursor-pointer`} onClick={() => setEyeIcon(!eyeIcon)} /> :
                    <FaRegEye className={`absolute ${eyeIconExtraClass} bottom-4 right-3  cursor-pointer`} onClick={() => setEyeIcon(!eyeIcon)} />)}
            </div>
            {errors?.[name]?.message && <p className={`text-error text-[12px] ${errorExtraClass} `} name={name} component="div">{errors?.[name]?.message}</p>}
        </div>
    )
}

export default Input;