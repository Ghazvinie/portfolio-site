import React, {useEffect} from 'react';
import FlashingArrows from './FlashingArrows';

export default function About() {



    return (
        <div
            className='border-black border-t-4 flex justify-center flex-col flex-wrap p-2 md:pb-24 overflow-hidden'
            name='about'
        >
            <h1 className='text-4xl font-semibold ml-2 mt-2'>About</h1>
            <div className='ml-2 md:ml-36 justify-center md:h-screen'>
                <div className='text-1xl md:text-3xl leading-10 md:leading-loose text-start mb-10 mt-4 md:mt-0'>
                    Hello again.
                    <br />
                    I am a bespoke tailor turned passionate full-stack developer.
                    <br />
                    I love to code and work with computers!
                    <br />
                    I have experience developing projects for a small start-up, as well as working on production code issues.
                    <br />
                    Please scroll down to view my projects and skills...
                    <br />
                </div>
                <div className='text-3xl md:text-5xl flex flex-col w-min h-72 md:h-3/5 justify-between arrow overflow-hidden'>
                    <FlashingArrows />
                </div>
            </div>
        </div>
    );
}