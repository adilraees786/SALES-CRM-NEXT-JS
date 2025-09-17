import { useState, useEffect } from 'react';

export function useScreenHeight(initialHeight = 0, offset = 0)
{
    const [height, setHeight] = useState(initialHeight);
    useEffect(() =>
    {
        const updateHeight = () =>
        {
            setHeight(window.innerHeight - offset);
        };
        // Initial call to set the height
        updateHeight();
        // Add event listener for window resize
        window.addEventListener('resize', updateHeight);
        // Cleanup function to remove event listener when component unmounts
        return () =>
        {
            window.removeEventListener('resize', updateHeight);
        };
    }, [offset]); // Only run effect if offset changes
    let temp = height - 200
    return `${ temp }px`;
}

export function useScreenHeightWithoutPx(initialHeight = 0, offset = 0)
{
    const [height, setHeight] = useState(initialHeight);
    useEffect(() =>
    {
        const updateHeight = () =>
        {
            setHeight(window.innerHeight - offset);
        };
        // Initial call to set the height
        updateHeight();
        // Add event listener for window resize
        window.addEventListener('resize', updateHeight);
        // Cleanup function to remove event listener when component unmounts
        return () =>
        {
            window.removeEventListener('resize', updateHeight);
        };
    }, [offset]); // Only run effect if offset changes
    let temp = height - 200
    return `${ temp }`;
}