import React from 'react';

export default function About(){
    const greeting = Date.now()

    return (
        <div 
        className='about-container flex  my-2 mx-2 p-2' 
        name='about'>
        <h1 className='text-4xl mr-10 font-semibold'>About</h1>

        </div>
    )
}