'use client'
import React from 'react'

const SimpleInput = ({ value, placeholder, label, labelextraClass, extraClass, type, name, min, ...otherProps }) => {
    // Get the current date and time
    const today = new Date();
    const todayDate = today.toISOString().split("T")[0]; // Current date in YYYY-MM-DD format
    return (
        <div className='flex flex-col w-full relative'>
            <div className='w-full'>
                {label && <p className='text-sm my-2'>{label}</p>}
                <input min={type === "date" ? todayDate : min} value={value} placeholder={placeholder} {...otherProps} className={`pl-5 pr-2 py-2 disabled:bg-gray-100 placeholder:text-sm rounded-sm border-1 text-text-black border-gray-300 placeholder:text-gray-400 outline-none w-full ${extraClass} `} type={type} name={name} />
            </div>
        </div>
    )
}

export default SimpleInput