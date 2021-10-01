import React from 'react';
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodeDotJs,
    SiMongodb,
    SiJavascript,
    SiGithub,
    SiReact,
    SiNpm,
    SiYarn,
    SiRedux,
    SiGnubash,
    SiTypescript,
    SiPostgresql,
    SiPostman,
} from 'react-icons/si'
import skills from '../data/skills';

export default function Skills() {

    return (
        <div
            className='border-black border-t-4 flex my-2 mx-2 p-2'
            name='about'>
            <h1 className='text-4xl mr-10 font-semibold'>Skills</h1>
            <div className='flex justify-center w-100'>
                {skills.map(skill => {
                    const keys = Object.keys(skill)
                    console.log(keys)
                    return (
                        <div className={`${keys} flex flex-row items-center`}>
                            {keys.map(key => {
                                const Icon = skill[key].icon
                                return (
                                    <div className='flex flex-rcol items-center m-4'>
                                    <Icon style={{ height: 60, width: 60 }}/>
                                     <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                                         {skill[key].name}
                                     </p>
                                 </div>
                                )
                            }


                            )}
                        </div>
                    )
                    // return (

                    //      {keys.map(skillName => (

                    //                 <div className='flex flex-row items-center m-4'>
                    //                     <SiPostman style={{ height: 60, width: 60 }} />
                    //                     <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                    //                         {skill[skillName].name}
                    //                     </p>
                    //                 </div>


                    //         ))
                    //         }
                    // )


                })}

                {/* <div className='flex flex'>
                    <div className='flex flex-col items-center m-5'>
                        <SiHtml5 style={{ height: 60, width: 60 }} />
                        <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                            HTML5
                        </p>
                    </div>
                </div>

                <div className='front-end flex '>
                    <div className='flex flex-col items-center m-5'>
                        <SiHtml5 style={{ height: 60, width: 60 }} />
                        <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                            HTML5
                        </p>
                    </div>
                    <div className='flex flex-col items-center m-5'>
                        <SiHtml5 style={{ height: 60, width: 60 }} />
                        <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                            HTML5
                        </p>
                    </div>
                    <div className='flex flex-col items-center m-5'>
                        <SiHtml5 style={{ height: 60, width: 60 }} />
                        <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                            HTML5
                        </p>
                    </div>
                    <div className='flex flex-col items-center m-5'>
                        <SiHtml5 style={{ height: 60, width: 60 }} />
                        <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                            HTML5
                        </p>
                    </div>
                </div> */}


                {/*
                                <div className='flex flex-col items-center m-5'>
                                    <SiCss3 style={{ height: 60, width: 60 }} />
                                    <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                                        CSS3
                                    </p>
                                </div>
                                <div className='flex flex-col items-center m-5'>
                                    <SiCss3 style={{ height: 60, width: 60 }} />
                                    <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                                        CSS3
                                    </p>
                                </div>
                                <div className='flex flex-col items-center m-5'>
                                    <SiCss3 style={{ height: 60, width: 60 }} />
                                    <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                                        CSS3
                                    </p>
                                </div>
                                <div className='flex flex-col items-center m-5'>
                                    <SiCss3 style={{ height: 60, width: 60 }} />
                                    <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                                        CSS3
                                    </p>
                                </div>
                                <div className='flex flex-col items-center m-5'>
                                    <SiCss3 style={{ height: 60, width: 60 }} />
                                    <p className='mt-4 font-semibold border-b-2 border-black text-xl b-black p-1'>
                                        CSS3
                                    </p>
                                </div>



                            </div> */}
                {/* <div>
                    <SiMongodb style={{ height: 60, width: 60 }} />
                    <SiJavascript style={{ height: 60, width: 60 }} />
                    <SiNodeDotJs style={{ height: 60, width: 60 }} />
                </div>
                <div>
                    <SiGithub style={{ height: 60, width: 60 }} />
                    <SiNpm style={{ height: 60, width: 60 }} />
                    <SiYarn style={{ height: 60, width: 60 }} />
                    <SiGnubash style={{ height: 60, width: 60 }} />
                    <SiPostman style={{ height: 60, width: 60 }} />
                </div>

                <div>
                    <SiTypescript style={{ height: 60, width: 60 }} />
                    <SiPostgresql style={{ height: 60, width: 60 }} />
                </div> */}




                {/* <MdHttp /> */}
                {/* </div> */}
            </div>
        </div >

    )
}