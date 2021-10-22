import React from 'react';
import skills from '../data/skillsData';

export default function Skills() {
    const skillsDisplay = skills.map(skill => {
        const keys = Object.keys(skill)
        const categoryName = keys.includes('react') ? 'Frontend'
            : keys.includes('node') ? 'Backend'
                : keys.includes('npm') ? 'Misc'
                    : keys.includes('bash') ? 'WIP' : '';

        return (
            <div className='flex flex-row flex-wrap items-center justify-center my-5' >
                <p className='md:mr-8 flex text-2xl  font-semibold'>
                    {categoryName}:
                </p>
                {keys.map((key, idx) => {
                    const Icon = skill[key].icon
                    return (
                        <div className='flex flex-col items-center mx-2 md:mx-5 my-4' key={idx}>
                            <Icon style={{ height: 60, width: 60 }} />
                            <p className='m-2 font-semibold  text-md md:text-xl b-black pb-1 text-center' >
                                {skill[key].name}
                            </p>
                        </div>
                    )})}
            </div>

        );
    })

    return (
        <div
            className='border-black border-t-4 flex flex-col flex-wrap justify-center m-2 p-2' name='skills'>
            <h1 className='text-4xl font-semibold' >Skills</h1>
            <div className='flex flex-col flex-wrap justify-center ml-18 md:ml-36 md:h-screen'>
                {skillsDisplay}
            </div>
        </div >
    );
}