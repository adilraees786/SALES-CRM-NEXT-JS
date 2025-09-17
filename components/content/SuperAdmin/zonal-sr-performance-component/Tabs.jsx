import React from 'react'

export default function Tabs({ tabList, tabs,setTabs }) {
    return (
        <div className=' w-full flex flex-row  gap-12 px-12 border-b-[#c0c0c0] border-b-[1px] border-t-[#c0c0c0] border-t-[1px] font-bold  '>
            {tabList?.map((item, index) => {
                return (
                    <div key={index} onClick={() => { setTabs(item?.id);}}
                        className={`${tabs === item?.id ? "  border-b-[3px] border-secondary  " :
                            "border-b-[3px] border-transparent  bg-transparent"} 
                               font-bold  text-primary    cursor-pointer  text-base  pt-5 pb-3`}>{item?.name}</div>
                )
            })}
        </div>
    )
}