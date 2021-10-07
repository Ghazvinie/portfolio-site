import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function FlashingArrows() {
    const [index, setIndex] = useState(0);
    const [arrows, setArrows] = useState([
        <IoIosArrowDown style={{ color: 'rgba(128, 128, 128, 0.329)' }} className='my-1'/>,
        <IoIosArrowDown className='my-1'/>,
        <IoIosArrowDown className='my-1'/>,
        <IoIosArrowDown className='my-1'/>,
        <IoIosArrowDown className='my-1'/>,
        <IoIosArrowDown className='my-1'/>,
        <IoIosArrowDown className='my-1'/>,
        <IoIosArrowDown className='my-1'/>,
        <IoIosArrowDown className='my-1'/>,
    ])

    const offStyle = {
        color: 'white'
    }

    useEffect(() => {
        index > arrows.length - 1 && setIndex(0)
        const move = (from, to) => {
            var temp = arrows.splice(from, 1)[0]
            arrows.splice(to, 0, temp)
        };

        const timer = setInterval(() => {
            if (index === arrows.length - 1) {
                move(index, 0)
                setIndex(0)
                return
            }
            move(index, index + 1);
            setIndex((prevIndex) => prevIndex + 1);
        }, 80);
        return () => clearInterval(timer);
    });

    return (
        <>
            {
                arrows.map(element => element)
            }
        </>
    );
}