import React from 'react';
import Heading from '@/components/reuseable/Heading';
import CardLogInfo from './CardLogInfo';
import LowMemoCard from './LowMemoCard';

const RightSectionLogs = () => {
    return (
        <div
            style={{ height: `calc(100vh - 150px)` }}
            className="w-full mx-auto space-y-4 h-full">
            <div
                className="bg-white rounded-xl shadow-md p-4 space-y-4 overflow-auto"

            >
                <Heading extraClassName={"!font-normal !text-lg !my-2"}>Sales Representative</Heading>
                <CardLogInfo />

                <Heading extraClassName={"!font-normal !text-lg !my-2"}>Zonal Charge</Heading>
                <CardLogInfo />
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50 text-center rounded-lg p-3 shadow-sm">
                        <p className="text-primary text-sm">Active Users</p>
                        <p className="text-secondary text-2xl font-semibold">05</p>
                    </div>
                    <div className="bg-red-50 text-center rounded-lg p-3 shadow-sm">
                        <p className="text-primary text-sm">Miss Entries</p>
                        <p className="text-secondary text-2xl font-semibold">10</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <LowMemoCard />
                    <CardLogInfo />
                    <CardLogInfo />
                    <CardLogInfo />
                    <CardLogInfo />
                    <CardLogInfo />
                    <CardLogInfo />
                    <CardLogInfo />
                    <CardLogInfo />
                    <CardLogInfo />
                    <CardLogInfo />
                </div>
            </div>
        </div>
    );
};

export default RightSectionLogs;
