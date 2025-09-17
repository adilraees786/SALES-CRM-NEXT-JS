'use cliet'
import React from 'react'
const SimpleDropdown = ({ extraClass, label, children, ...otherProps }) => {
    return (
        <>
            <div className='flex flex-col w-full relative'>
                <div className='w-full'>
                    {label && <p className='text-sm my-2'>{label}</p>}
                    <select className={`w-full bg-white rounded-sm bg-transparent py-2 px-4 text-primaryText disabled:cursor-default pr-4 placeholder:text-primaryText outline-none border border-gray-300 ${extraClass}`} {...otherProps} >
                        {children}
                    </select>
                </div>
            </div>
        </>
    )
}
export default SimpleDropdown