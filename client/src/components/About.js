import React from 'react';
import FlashingArrows from './FlashingArrows';

export default function About() {
    return (
        <div
            className='border-black border-t-4 flex justify-center flex-col flex-wrap m-2 p-2'
            name='about'
        >
            <h1 className='text-4xl font-semibold'>About</h1>
            <div className='ml-18 md:ml-36 justify-center md:h-screen'>
                <div className='text-1xl md:text-3xl md:leading-loose leading-loose text-start mb-10 mt-4 md:mt-0'>
                    Hello again.
                    <br />
                    I am a bespoke tailor turned passionate developer.
                    <br />
                    I love to code and work with computers!
                    <br />
                    I have experience creating real world projects and working on real-world codebases.
                    <br />
                    Please scroll down to view my projects and skills...
                    <br />
                </div>
                <div className='text-3xl md:text-5xl flex flex-col w-min mb-10'>
                    <FlashingArrows />
                </div>
            </div>

            <p className='ml-18 md:ml-36 text-base font-extralight'>(Yes, the website is black and white)</p>
        </div>
    );
}