import React from 'react';

export default function About() {

    return (
        <div
            className='border-black border-t-4 flex my-2 mx-2 p-2'
            name='about'
        >
            <h1 className='text-4xl mr-10  font-semibold'>About</h1>
            <div className='text-3xl leading-loose'>
                Hello again.
                <br />
                I am a bespoke tailor turned passionate developer.
                <br />
                I love to code and work with computers!
                <br />
                I have experience creating real world projects and working on real-world codebases.
                <br />
                Please scroll down to view my skills and some of my projects...
                <br />
                <p className='text-base font-extralight '>(Yes, the website is black and white)</p>
            </div>
        </div>
    );
}