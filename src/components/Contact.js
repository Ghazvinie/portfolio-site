import React from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {SiLinkedin} from 'react-icons/si'

export default function Contact() {
    return (
        <div
            className='border-black border-t-4 flex flex-col flex-wrap my-2 mx-2 p-2 mb-20' >
            <h1 className='text-4xl font-semibold'>Contact</h1>
            <div className='ml-18 md:ml-36 justify-center items-center flex flex-col h-screen -mt-96 '>


                    <p className='text-1xl md:text-3xl md:leading-loose leading-loose text-start  ' name='contact'>
                    If you would like to contact me regarding any employment opportunities, you can contact me through:
                    </p>
                    <div className='grid grid-cols-2 gap-8'>
                    <div className='border-black border-solid border-b-4 border-opacity-0 hover:border-opacity-100 cursor-pointer rounded-sm p-10 flex flex-col justify-center items-center m-6'>
                        <p className='text-center text-2xl md:text-3xl mb-10'>Email</p>
                       <AiOutlineMail style={{width: 75, height: 75}}/>
                    </div>
                    <div className='border-black border-solid border-b-4 border-opacity-0 hover:border-opacity-100 cursor-pointer p-10 flex flex-col justify-center items-center m-6'>
                        <p className='text-center text-2xl md:text-3xl mb-10'>LinkedIn</p>
                       <SiLinkedin style={{width: 75, height: 75}}/>
                    </div>
                    </div>





            
            </div>
        </div >
    )
}