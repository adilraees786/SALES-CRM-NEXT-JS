'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const List = ({ item, handleNavigate, Icon, index }) => {
  const pathname = usePathname();
  const isActive = pathname === item?.url;

  return (
    <li className="list-none" key={index}>
      <Link
        href={item?.url === 'logout' ? '/login' : item?.url}
        className={`flex items-center w-full ${
          isActive ? "bg-secondary" : ""
                     } font-[450]  my-3 py-3  pl-4
                       rounded-md flex text-white capitalize gap-2 items-center  font-normalRegular 
                        cursor-pointer transition-all ease-out`}
      >
        <Image src={Icon} alt="Icon" />
        {item.name}
      </Link>
    </li>
  );
};

export default List;
