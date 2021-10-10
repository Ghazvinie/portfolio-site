import React from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { SiLinkedin } from 'react-icons/si'

export default function Contact() {
    const midStyle = { width: 150, height: 150 };
    const smStyle = { width: 75, height: 75 };

    return (
        <div
            className='border-black border-t-4 flex flex-col flex-wrap my-2 mx-2 p-2 mb-20 ' name='contact'>
            <h1 className='text-4xl font-semibold'>Contact</h1>
            <p className=' ml-18 md:ml-36 text-1xl md:text-3xl md:leading-loose leading-loose md:text-center mt-4' >
                If you would like to contact me regarding any employment opportunities, you can contact me through:
            </p>
            <div className='ml-18 md:ml-36 justify-center items-center flex flex-col md:h-screen '>



                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:-mt-96 justify-center items-center'>
                    <a href="mailto:danielghazvinie@protonmail.com" rel='noreferrer' target='_blank'>
                        <div className='border-black border-solid border-b-4 border-opacity-0 hover:border-opacity-100 cursor-pointer rounded-sm pb-10 flex flex-col m-6 justify-center items-center'>
                            <p className='text-center text-2xl md:text-5xl mb-10'>Email</p>
                            <AiOutlineMail style={window.innerWidth <= 640 ? smStyle : midStyle} />
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/daniel-ghazvinie-53a304188/' rel='noreferrer' target='_blank'>
                        <div className='border-black border-solid border-b-4 border-opacity-0 hover:border-opacity-100 cursor-pointer pb-10 flex flex-col m-6 justify-center items-center'>
                            <p className='text-center text-2xl md:text-5xl mb-10'>LinkedIn</p>
                            <SiLinkedin style={window.innerWidth <= 640 ? smStyle : midStyle} />
                        </div>
                    </a>
                </div>
            </div>
            {window.innerWidth > 640 && <p className='ml-18 md:ml-36 font-extralight'>That's it!</p>}
        </div >
    )
}