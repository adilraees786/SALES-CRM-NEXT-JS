
import React from 'react'

const SubDropdown = ({ lableName, res, index, handleDropdownClickSub, openSubIndex }) => {

    return (
        <li className='my-1' key={index} >
            <details open={index === openSubIndex} className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    onClick={(e) => handleDropdownClickSub(index, e)}
                    className={`${res?.select && "bg-[#FFF3DA]"} font-regular font-medium relative py-3 px-3 flex items-center cursor-pointer transition-all ease-out text-[#40403F]`}
                >
                    <span className="text-[16px] text-[#404040] font-medium font- font-regular"> {lableName}</span>
                    {/* Arrow icon Start */}
                    <span className={`shrink-0 transition absolute right-4 duration-300 ${index === openSubIndex ? "-rotate-180" : "rotate-0"}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    {/* Arrow Icon End */}
                </summary>
                <ul>
                    {
                        res?.list?.map((item, index) => {
                            return (
                                <li className='cursor-pointer' key={index}>
                                    <p
                                        className={`${item?.select ? "text-[#40403F]  !font-semibold " : "text-gray-400"
                                            } block  px-4 py-3 text-[13.5px] font-regular `}>
                                        {item?.name}
                                    </p>
                                </li>
                            )
                        })}
                </ul>
            </details>
        </li >
    )
}

export default SubDropdown
