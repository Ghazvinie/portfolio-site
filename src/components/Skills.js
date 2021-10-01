import React from 'react';
import skills from '../data/skills';

export default function Skills() {
    const skillsDisplay = 

    return (
        <div
            className='border-black border-t-4 flex my-2 mx-2 p-2'
            name='skills'>
            <h1 className='text-4xl mr-10 font-semibold'>Skills</h1>
            <div className='flex flex-col justify-center items-center self-auto mx-auto'>
                {skills.map(skill => {
                    const keys = Object.keys(skill)
                    return (
                        <div className={`flex flex-row items-center`}>
                            {keys.map(key => {
                                const Icon = skill[key].icon
                                return (
                                    <div className='flex flex-col items-center m-4'>
                                        <Icon style={{ height: 60, width: 60 }} />
                                        <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                                            {skill[key].name}
                                        </p>
                                    </div>
                                )
                            }
                            )}
                        </div>
                    )

                })}

            </div>
        </div >

    )
}