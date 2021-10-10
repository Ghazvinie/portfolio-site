import React, { useEffect, useState } from 'react';
import LargeNav from './LargeNav';
import DropNav from './DropNav';

export default function Nav() {
    const [width, setWidth] = useState(window.innerWidth);
    const [menu, setMenu] = useState(<LargeNav />);

    const handleResize = () => {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        width <= 768 ? setMenu(<DropNav />) : setMenu(<LargeNav />)
    }, [width]);


    return (
        <header className='bg-white p-2 border-b-4 border-black' >
            {menu}
        </header>
    );
}