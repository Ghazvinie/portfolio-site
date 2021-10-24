import React, { useEffect, useState } from 'react';
import LargeNav from './LargeNav';
import DropNav from './DropNav';

export default function Nav() {
    const [width, setWidth] = useState(window.innerWidth);
    
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return (
        <header className='bg-white p-2 border-b-4 border-black' >
            {width <= 945 ? <DropNav /> : <LargeNav />}
        </header>
    );
}