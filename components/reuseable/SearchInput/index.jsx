'use client'
import React from 'react';

const SearchInput = ({ placeholder, value, onChange,extraClass }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full  px-4 py-2 border border-gray-300 rounded-md focus:outline-none
       focus:ring-1 focus:ring-secondary ${extraClass}`}
        />
    );
};

export default SearchInput;
