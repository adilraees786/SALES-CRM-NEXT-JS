import Header from '@/components/content/SaleRepresentative/dashboardcomponents/Header/Header'
import Sidebar from '@/components/reuseable/Sidebar'
import React from 'react'

const Layout = ({children}) =>
{
    return (
        <div className='w-full flex fixed h-screen bg'>
            {/* <Sidebar /> */}
            <div className='w-full  flex-col overflow-y-scroll pb-6'>
                <Header />
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout