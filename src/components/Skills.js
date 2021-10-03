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
            <div className='flex flex-row items-center justify-center my-5' >
                <p className='mr-4 flex  text-2xl font-semibold'>
                    {categoryName}:
                </p>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    {keys.map(key => {
                        const Icon = skill[key].icon
                        return (
                            <div className='flex flex-col items-center  m-4'>
                                <Icon style={{ height: 60, width: 60 }} />
                                <p className='m-2 font-semibold border-b-2 border-black text-xl b-black pb-1' >
                                    {skill[key].name}
                                </p>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        );
    })

    return (
        <div
            className='border-black border-t-4 flex flex-col flex-wrap justify-center my-2 mx-2 p-2' name='skills'>
            <h1 className='text-4xl font-semibold' >Skills</h1>
            <div className='flex flex-col flex-wrap justify-center justify-between ml-32 items-center '>
                {skillsDisplay}
            </div>
        </div >
    );
}