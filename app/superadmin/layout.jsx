import DashboardHeader from '@/components/reuseable/DashboardHeader'
import Sidebar from '@/components/reuseable/Sidebar'
import React from 'react'

const Layout = ({children}) =>
{
    return (
        <div className='w-full flex fixed h-screen bg'>
            <Sidebar />
            <div className='w-full  flex-col overflow-y-scroll pb-6'>
                <DashboardHeader />
                <div className=''>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout