
import React from 'react';
import Button from '../../../ReusableComponent/Button';
import { MdArrowForwardIos } from 'react-icons/md';

const DocumentTable = ({setModal,setObj}) => {
    const header = ["Date", "Regions", "Name ", "Area", "Product Name", "Target Achieved","Sales Target","",""]

    const data = [
        {
          date: "2024-07-01",
          regions: "North",
          name: "John Doe",
          area: "Lahore",
          productName: "Toothpaste",
          targetAchieved: "80%",
          salesTarget: "$5000",
          action: "View"
        },
        {
          date: "2024-07-02",
          regions: "South",
          name: "Jane Smith",
          area: "Karachi",
          productName: "Shampoo",
          targetAchieved: "90%",
          salesTarget: "$6000",
          action: "View"
        },
        {
          date: "2024-07-03",
          regions: "East",
          name: "Ahmad Khan",
          area: "Multan",
          productName: "Hair Oil",
          targetAchieved: "75%",
          salesTarget: "$4500",
          action: "View"
        },
        {
          date: "2024-07-04",
          regions: "West",
          name: "Sara Ali",
          area: "Quetta",
          productName: "Face Wash",
          targetAchieved: "85%",
          salesTarget: "$5500",
          action: "View"
        },
       
      ];
      
      

    return (
        <div className=" bg-white rounded-lg shadow-sm ">
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                    <thead className=" text-lightGray font-semibold">
                        <tr className='border-b'>
                            {header.map((item, index) => {
                                return (
                                    <th key={index} className="px-4 py-3">{item}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((person, index) => (
                            <tr key={index} className="border-b text-primary">
                                <td className="px-4 py-3">{person?.date}</td>
                                <td className="px-4 py-3">{person?.regions}</td>
                                
                                <td className="px-4 py-3">{person?.name}</td>
                                <td className="px-4 py-3">{person?.area}</td>
                                <td className="px-4 py-3">{person?.productName}</td>
                                <td className="px-4 py-3">{person?.targetAchieved}</td>
                                <td className="px-4 py-3">{person?.salesTarget}</td>
                                <td className="px-4 py-3">
                                    <Button
                                    onClick={()=>{setObj(person); setModal("edit")}}
                                    extraClass="!px-12 ">Edit</Button>

                                </td>
                                <td className="px-4 py-3">
                                <MdArrowForwardIos className="text-primary text-xl cursor-pointer" />
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DocumentTable;
