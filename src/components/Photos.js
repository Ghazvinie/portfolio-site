import React from 'react';
import photos from '../data/photos';

export default function Photos() {
    return (
        <div
            className='border-black border-t-4 flex justify-center flex-col flex-wrap m-2 p-2'
            name='photos'
        >
            <div className='flex flex-row items-end'>
            <h1 className='text-4xl font-semibold '>Photos</h1>
            <h2 className='ml-5 text-sm font-extralight'>(some personal snaps of mine)</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 ml-18 md:ml-36 justify-items-center items-center md:mr-10 mt-4' >
                {
                    photos.map(photo => (
                        <img src={photo.img} alt={photo.desc} className='w-full h-full object-cover text-center'></img>
                    ))
                }
            </div>
            <p className='font-thin self-end pt-10'>Copyright Daniel Ghazvinie</p>
        </div>
    );
}