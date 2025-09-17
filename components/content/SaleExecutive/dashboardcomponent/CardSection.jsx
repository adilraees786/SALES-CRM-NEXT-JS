import React from 'react'
import sales from '../../../../assets/images/sales 1.png';
import colombia from '../../../../assets/images/colombia 1.png';
import box from '../../../../assets/images/box.png';
import deadline from '../../../../assets/images/deadline 1.png';
import DashboardCard from './DashboardCard';
import { formatAmount, formatPercentage } from '@/app/utils/UtilityFunctions';

const CardSection = () => {
    const cardsData = [
        {
            title: 'Total Sales',
            value: formatAmount("2,5002"),
            image: sales,
        },
        {
            title: 'Sales',
            value: formatPercentage("17"),
            image: colombia,
        },
        {
            title: 'Focus Products',
            value: 125,
            image: box,
        },
        {
            title: 'Late Data Submission',
            value: 7,
            image: deadline,
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardsData.map((item, index) => (
                <DashboardCard key={index} item={item} />
            ))}
        </div>
    )
}

export default CardSection