'use client'
import React from 'react'

const Header = ({ msg }) => {
    return (
        <div className='px-8 py-4 gap-4 flex justify-start items-center
         border-gray-300 border-t-0 border-[1px] border-r-0 border-l-0'>
            <p className='text-primary   font-medium text-xl'>{msg}</p>
        </div>
    )
}

export default Header