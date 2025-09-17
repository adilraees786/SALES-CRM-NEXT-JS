
import React from 'react';
import Button from '../../../ReusableComponent/Button';
import { MdArrowForwardIos } from 'react-icons/md';
import { flag } from '../../../../assets';

const WeeklyCommitmentTable = ({ setModal, setObj }) => {
    const header = ["Date", "Name ", "Focus Product", "Weekly IMS", "Target Achieved", "Sales Target", "", ""]

    const data = [
        {
            id: 1,
            date: "27/03/2025 to 02/04/2025",
            name: "Md. Sabbir Ahmed Shaon",
            focusProduct: "05",
            weeklyIms: "8562",
            targetAchieved: "32191",
            salesTarget: "42191",
            isCompleted: false,
        },
        {
            id: 2,
            date: "27/03/2025 to 02/04/2025",
            name: "Rezaaul Hayat",
            focusProduct: "03",
            weeklyIms: "125863",
            targetAchieved: "32191",
            salesTarget: "42191",
            isCompleted: true,
        },
        {
            id: 3,
            date: "27/03/2025 to 02/04/2025",
            name: "Md Jamil Ahmed Jlad",
            focusProduct: "50",
            weeklyIms: "521336",
            targetAchieved: "32191",
            salesTarget: "42191",
            isCompleted: true,
        },
    ];



    return (
        <div className=" bg-white rounded-lg shadow-sm mt-">
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
                                <td className="px-4 py-3">{person?.name}</td>
                                <td className="px-4 py-3">{person?.focusProduct}</td>

                                <td className="px-4 py-3">{person?.weeklyIms}</td>
                                <td className="px-4 py-3">{person?.targetAchieved}</td>
                                <td className="px-4 py-3">{person?.salesTarget}</td>
                                <td className="px-4 py-3">
                                {!person.isCompleted &&    <Button
                                        onClick={() => { setObj(person); setModal("edit") }}
                                        extraClass="!px-12 ">Edit</Button>}

                                </td>
                                <td className="py-3 px-4">
                                    {person.isCompleted ? (
                                        <div className="bg-green-100 text-green-600 px-3 py-1 rounded inline-flex items-center gap-1">
                                           <img src={flag} className='w-4'/>
                                            <span>Completed</span>
                                        </div>
                                    ) : (
                                        <button
                                        className="bg-yellow-50 text-yellow-600 border border-yellow-400 px-3 py-1 rounded inline-flex items-center gap-1"
                                        onClick={() => handleComplete(person.id)}
                                        >
                                        <img src={flag} className='w-4'/>
                                            <span>Mark Completed</span>
                                        </button>
                                    )}
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

export default WeeklyCommitmentTable;
