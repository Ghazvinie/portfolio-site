import React, {useState} from 'react';

export default function Welcome() {
const [text, setText] = useState('');

    const hours = new Date().getHours();
    const timeGreet = hours > 0 && hours < 7 ? 'Good morning (you\'re up early)'
        : hours >= 7 && hours < 12 ? 'Good morning'
            : hours >= 12 && hours < 18 ? 'Good afternoon'
                : hours >= 18 && hours < 23 ? 'Good evening'
                    : hours >= 23 && hours <= 23 ? 'Good evening (you\'re up late)' : 'Welcome'

    const text = () => {
        setInterval(() => {
            setText('Hello')
        },5000)
    }

    return (
        <div
            className='about-container flex mt-20  my-2 mx-2 p-2 '
            name='about'>
            <div className='text-6xl mx-auto text-center leading-10'>
                {timeGreet}, I am Daniel.
                <br />        <br />
                {/* <br/>        <br/>
        Self taught in both front-end, and back-end development. 
        <br/>        <br/>
        Experience creating and contributing to real-world projects. */}
            </div>
        </div>
    )
}