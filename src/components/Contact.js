import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { SiLinkedin } from 'react-icons/si'

export default function Contact() {
    const iconSize = 'h-16 w-16 md:h-32 md:w-32';
    const iconDiv = 'border-black border-solid border-b-4 border-opacity-0 hover:border-opacity-100 cursor-pointer rounded-sm pb-10 flex flex-col m-6 justify-center items-center';
    const title = 'text-center text-2xl md:text-5xl mb-10';

    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', updateWidth)
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <div
            className={`border-black border-t-4 flex flex-col flex-wrap m-2 p-2 mb-20 ${width <= 640 && 'h-screen'}`}
            name='contact'
        >
            <h1 className='text-4xl font-semibold' >Contact</h1>
            {/* <p className=' ml-18 md:ml-36 text-1xl md:text-3xl md:leading-loose leading-loose md:text-center mt-4' >
                If you would like to contact me regarding any employment opportunities, please do so through:
            </p> */}
            <div className='ml-18 md:ml-36 justify-center items-center flex flex-col md:h-screen'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:-mt-96 justify-center items-center'>
                    <a href="mailto:danielghazvinie@protonmail.com" rel='noreferrer' target='_blank'>
                        <div className={iconDiv}>
                            <p className={title}>Email</p>
                            <AiOutlineMail className={iconSize} />
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/daniel-ghazvinie-53a304188/' rel='noreferrer' target='_blank'>
                        <div className={iconDiv}>
                            <p className={title}>LinkedIn</p>
                            <SiLinkedin className={iconSize} />
                        </div>
                    </a>
                </div>
            </div>
        </div >
    );
}