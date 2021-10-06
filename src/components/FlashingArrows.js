import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function FlashingArrows() {
const [index, setIndex] = useState(0);
 
    const offStyle = {
        color: 'white'
    }
    return (
        <div>
            <IoIosArrowDown />
            <IoIosArrowDown />
            <IoIosArrowDown style={offStyle} />
            <IoIosArrowDown />
            <IoIosArrowDown />
            <IoIosArrowDown />
            <IoIosArrowDown />
            <IoIosArrowDown />
            <IoIosArrowDown />
        </div>
    )
}