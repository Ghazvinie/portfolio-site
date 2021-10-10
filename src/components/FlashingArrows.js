import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function FlashingArrows() {
    const [index, setIndex] = useState(0);
    const [arrows, setArrows] = useState([
        <IoIosArrowDown style={{ color: 'rgba(128, 128, 128, 0.329)' }} className='my-1' />,
        <IoIosArrowDown className='my-1' />,
        <IoIosArrowDown className='my-1' />,
        <IoIosArrowDown className='my-1' />,
        <IoIosArrowDown className='my-1' />,
        <IoIosArrowDown className='my-1' />,
        <IoIosArrowDown className='my-1' />,
        <IoIosArrowDown className='my-1' />,
    ]);
    // const [numArrows, setNumArrows] = useState(3);

    // const updateHeight = () => {
    //     const { innerHeight } = window;
    //     const num = Math.round(innerHeight / 100);
    //     setNumArrows(num);
    // };

    // useEffect(() => {
    //     window.addEventListener('resize', () => updateHeight())
    //     return () => window.removeEventListener('resize', updateHeight());
    // }, []);

    // useEffect(() => {
    //     const tempArr = [<IoIosArrowDown style={{ color: 'rgba(128, 128, 128, 0.329)' }} className='my-1' />];
    //     for (let i = 0; i < numArrows + 1; i++) {
    //         tempArr.push(<IoIosArrowDown className='my-1' />)
    //     };
    //     console.log(tempArr)

    //     setArrows(tempArr)
    //     console.log(arrows.length)

    //     return () => setArrows([<IoIosArrowDown style={{ color: 'rgba(128, 128, 128, 0.329)' }} className='my-1' />]);
    // }, [numArrows])



    useEffect(() => {
        index > arrows.length - 1 && setIndex(0);
        const move = (from, to) => {
            var temp = arrows.splice(from, 1)[0]
            arrows.splice(to, 0, temp)
        };

        const timer = setInterval(() => {
            if (index === arrows.length - 1) {
                move(index, 0);
                setIndex(0);
                return;
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