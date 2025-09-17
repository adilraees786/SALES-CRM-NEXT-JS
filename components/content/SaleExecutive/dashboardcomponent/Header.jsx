// import React from 'react'

// const SaleExHeader = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default SaleExHeader


'use client'
import React from 'react';


import { usePathname } from 'next/navigation';

const SaleExHeader = () => {

    const pathname = usePathname();



    const renderPageName = () => {
        const pathArray = pathname?.split('/')
        const path = pathArray?.[pathArray?.length - 1]?.split('-')
        const pageName = path?.map((item) => item)?.join(' ')
        return pageName
    };



    return (
        <div className='w-full sticky top-0 flex z-999 justify-between bg-background  items-center'>
            <div className='flex items-center px-4 py-4'>

                <p className=' font-bold capitalize text-2xl cursor-pointer'>{renderPageName()}</p>
            </div>


        </div>
    );
};

export default SaleExHeader;
