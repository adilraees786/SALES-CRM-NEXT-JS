
import React from 'react';
import Image from 'next/image';
import logout from '../../../assets/SuperAdminSidebarIcons/logout.png';


const LogoutButton = ({ handleLogout }) => {
    return (
        <div className="mt-5">
            <li
                onClick={handleLogout}
                 className="font-[450]] text-white my-1 gap-[9px] text-[16px] pl-8 
                    py-2 laptop:text-sm laptopScreenHeight:text-sm rounded-md flex items-center capitalize  font-normalRegular   cursor-pointer transition-all ease-out"
                >
                <Image src={logout} alt="Logout Icon"  />
                Logout
            </li>
        </div>
    );
};

export default LogoutButton;
