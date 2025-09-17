// 'use client'
// import { useState, useEffect, useRef } from 'react';
// import { IoIosArrowForward } from 'react-icons/io';
// import zonaltracking from '../../assets/images/zonaltracking.png';
// import Image from 'next/image';


// export default function CustomDropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => setIsOpen(prev => !prev);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
    
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative w-60" ref={dropdownRef}>
//       <button
//         onClick={toggleDropdown}
//         className={`flex items-center justify-between w-full px-4 py-1.5 border-[1px] rounded-full  bg-white
//           ${isOpen ? 'border-secondary' : 'border-gray-300'} transition duration-300`}
//       >
//         <div className="flex items-center gap-2">
//           {/* Replace with your own map icon */}
//           <Image src={zonaltracking} className='w-4'/>
//           <span className="text-gray-700">Barishal BH</span>
//         </div>
//         <IoIosArrowForward 
//           className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
//         />
//       </button>

//       {isOpen && (
//         <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg">
//           <ul>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
//             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


'use client';

import { useState, useEffect, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import zonaltracking from '@/assets/images/zonaltracking.png'; 

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-60" ref={dropdownRef}>
      <button 
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full px-4 mt-4 py-1.5 border-[1px] rounded-full bg-white
          ${isOpen ? 'border-secondary' : 'border-gray-300'} transition duration-300`}
      >
        <div className="flex items-center gap-2">
          <Image src={zonaltracking} alt="Zonal Tracking Icon" width={16} height={16} />
          <span className="text-gray-700">Barishal BH</span>
        </div>
        <IoIosArrowForward
          className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border rounded-md shadow-lg">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
