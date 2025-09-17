
'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../../../../../assets/images/logo.png';
import logout from '../../../../../assets/SuperAdminSidebarIcons/logout.png';
import { IoIosNotifications } from "react-icons/io";
import { usePathname } from 'next/navigation';
;
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
const Header = () => {

    const pathname = usePathname();

    const router = useRouter()

    const renderPageName = () => {
        const pathArray = pathname?.split('/')
        const path = pathArray?.[pathArray?.length - 1]?.split('-')
        const pageName = path?.map((item) => item)?.join(' ')
        return pageName
    };

    const handleLogout = () => {

        Cookies.remove('role');
        router.push('/login');
    };

    const handlenotificpage = () => {
        router.push('/sale-representative/notification')
    }

    return (
        <div className='w-full sticky top-0 flex z-999 justify-between flex-wrap items-center bg-[#38373A] shadow-md px-6 py-4'>
            <div className='flex gap-4 items-center'>
                <Image src={logo} alt="CRM Logo" width={80} height={80} />
                <p className='text-white font-semibold capitalize text-xl cursor-pointer'>{renderPageName()}</p>
            </div>

            <div className="flex items-center space-x-6">
                <div className="relative">
                    <IoIosNotifications size={35} className=' text-yellow-400' onClick={handlenotificpage} />
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                        0
                    </span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer"
                    onClick={handleLogout}
                >
                    <Image src={logout} alt="Logout" width={20} height={20} />
                    <span className="text-sm font-semibold text-white">Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
