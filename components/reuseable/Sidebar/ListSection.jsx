

'use client'; 

import Image from 'next/image';
import React from 'react';
import List from './List';
import LogoutButton from './LogoutButton';
import logo from '../../../assets/images/logo.png'
import Dropdown from '../Dropdown';
// import { useUser } from '@/content/userContext';


const ListSection = ({ list, handleLogout, handleNavigate, sidebarRef, open }) => {
    // const { user } = useUser();

    const gettingName = () => {
        if (user === 'superadmin') return "Super Admin";
   
    };

    return (
        <div
            ref={sidebarRef}
            className={`overflow-auto sidebarHeightA ml-0 w-[280px] bg-[#38373A] z-[9] pb-5 pt-9 
                sidebarBgImage shadow-md drop-shadow-md transition-all ease-in-out duration-300 transform sidebarAdmin 
                ${open ? "translate-x-0 relative" : "-translate-x-full absolute"} 
                border-r-[1px] border-r-borderColor`}
        >
            <div className='flex flex-col gap-y-1 items-center'>
                <Image
                    src={logo}
                    alt="Logo"
                    width={130}
                    height={40}
                    className="w-[130px] h-auto"
                    priority
                />
                {/* <p className='text-left font-bold my-4 '>{gettingName()}</p> */}
            </div>
            <div className="sidebarHR"></div>
            <div className="mt-8 flex flex-col items-start justify-center w-full pl-4 pr-2">
                <ul className='w-full'>
                    {list?.map((item, index) => {
                        const { Icon } = item;
                        if (item?.subMenu?.length > 0) {
                            return (
                                <Dropdown
                                    handleNavigate={handleNavigate}
                                    Icon={Icon}
                                    key={index}
                                    lableName={item}
                                    item={item}
                                />
                            );
                        } else {
                            return (
                                <div key={index}>
                                    <List
                                        index={index}
                                        Icon={Icon}
                                        item={item}
                                        handleNavigate={handleNavigate}
                                    />
                                </div>
                            );
                        }
                    })}
                    <LogoutButton handleLogout={handleLogout} />
                </ul>
            </div>
        </div>
    );
};

export default ListSection;
