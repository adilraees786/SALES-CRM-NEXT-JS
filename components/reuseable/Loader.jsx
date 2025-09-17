'use client';
import { useEffect } from 'react';

export default function Loader()
{
    useEffect(() =>
    {
        // Hide loader after component mounts (hydration completes)
        const loader = document.getElementById('global-loader');
        if (loader) loader.style.display = 'none';
    }, []);

    return (
        <div
            id="global-loader"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                // opacity: 0.5,
                backgroundColor: 'gray',
            }}
        >
          <div className='loader'></div>
        </div>
    );
}