'use client'
import React, { useEffect, useRef, useState } from 'react'
import profile from '../../assets/images/profile.png';
import { usePathname } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { VscMenu } from 'react-icons/vsc';
import Image from 'next/image';
import { setOpen } from '@/redux/sidebar';
// import CustomDatePicker from '../CustomDatePicker'
// import moment from 'moment';

const DashboardHeader = () => {
    const pathname = usePathname();
    const { open } = useSelector((state) => state?.sidebarValue);
    const dispatch = useDispatch();

    const dropdownRef = useRef(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    // const [depStartDate, setDepStartDate] = useState(moment().startOf('month').format('YYYY-MM-DD'));
    // const [depEndDate, setDepEndDate] = useState(moment().endOf('month').format('YYYY-MM-DD'));
    // const [salesByDep, setSalesByDep] = useState([]);
    // const [salesByDepLoader, setSalesByDepLoader] = useState(false);

    // const handleDepDate = (start, end) => {
    //     setDepStartDate(start);
    //     setDepEndDate(end);
    // };

    // const gettingSalesByDep = async () => {
    //     setSalesByDepLoader(true);
    //     try {
    //         const response = await axios.get(`/your-api-endpoint?start=${depStartDate}&end=${depEndDate}`);
    //         setSalesByDep(response.data);
    //     } catch (error) {
    //         console.error('Failed to fetch sales by department:', error);
    //     } finally {
    //         setSalesByDepLoader(false);
    //     }
    // };

    // useEffect(() => {
    //     //   gettingSalesByDep();
    // }, [depStartDate, depEndDate]);

    const renderPageName = () => {
        const pathArray = pathname?.split('/')
        const path = pathArray?.[pathArray?.length - 1]?.split('-')
        const pageName = path?.map((item) => item)?.join(' ')
        return pageName
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='w-full sticky top-0 flex z-999 justify-between flex-wrap items-center bg-background shadow-md px-6 py-4'>
            <div className='flex gap-4 items-center'>
                {!open && <VscMenu size={30} className='cursor-pointer text-black' onClick={() => dispatch(setOpen(!open))} />}
                {/* <Heading extraClassName={"capitalize"}>{renderPageName()}</Heading> */}
                <p className='text-primary font-semibold capitalize text-xl'>{renderPageName()}</p>
            </div>

            {/* <div className="flex items-center gap-5 py-4">
                {isDatePicker && (
                    <div className="w-full flex justify-center">
                        <CustomDatePicker
                            value={[{ startDate: depStartDate, endDate: depEndDate }]}
                            handleChange={handleDepDate}
                        />
                    </div>
                )}
                <img src={profile} alt="Profile" className='w-[56px]' />
            </div> */}

            <Image src={profile} alt="Profile" width={56} height={56} className="rounded-full" />
        </div>
    )
}

export default DashboardHeader

