import React, { useState, useEffect } from 'react';
import messages from '../data/welcomeMessages';

export default function Welcome() {
    const [text, setText] = useState('');
    const [textArray, setTextArray] = useState(messages);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let timer;
        if (index <= textArray.length - 1) {
            timer = setTimeout(() => {
                setText(textArray[index])
            }, 1000)

            setIndex((prevIndex) => prevIndex + 1)
        };
        if (index >= textArray.length - 1) {
            setIndex(0)
        };
        return () => clearTimeout(timer);
    }, [text]);
    return (
        <div
            className='welcome-container flex p-2 h-screen'>
            <div className='text-6xl m-auto'>
                {text}
            </div>
        </div>
    );
}