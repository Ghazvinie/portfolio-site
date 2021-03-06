import React from 'react';
import photos from '../data/photos';

export default function Photos() {
    return (
        <div
            className='border-black border-t-4 flex justify-center flex-col flex-wrap p-2'
            name='photos'
        >
            <div className='flex flex-row items-end'>
            <h1 className='text-4xl font-semibold ml-2 mt-2'>Photos</h1>
            <h2 className='ml-5 text-sm font-extralight'>(some personal snaps of mine)</h2>
            </div>
            <div className='grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-20 ml-18 md:ml-36 justify-items-center items-center md:mr-10 mt-4' >
                {
                    photos.map((photo, idx) => (
                        <img src={photo.img} alt={photo.desc} className='w-full h-full object-cover text-center' key={idx}></img>
                    ))
                }
            </div>
            <p className='font-thin self-end pt-10'>Copyright Daniel Ghazvinie</p>
        </div>
    );
}