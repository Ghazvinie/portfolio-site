import React from 'react';
import projects from '../data/projects';
import { FaGithubSquare } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

export default function Projects() {
    return (
        <div
            className='flex flex-col border-black border-t-4 m-2 p-2 '
            name='projects'
        >
            <h1 className='text-4xl font-semibold'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-18 md:ml-36 justify-items-center items-center' >
                {
                    projects.map(project => (
                        <div className='flex flex-col ml-2 items-center'>
                            <img src={project.img} className='w-11/12 h-80 object-scale-down text-center my-5' alt={project.title} />
                            <h1 className='text-center text-lg font-bold break-word my-4'>
                                {project.title}
                            </h1>
                            <p className='break-word text-justify text-medium font-light my-3 text-center w-11/12'>
                                {project.description}
                            </p>
                            <div className='flex flex-row justify-center my-2'>
                                {
                                    project.stack?.map(tech => <tech.icon style={{ width: 25, height: 25 }} className='mx-2' title={tech.text}/>)
                                }
                            </div>
                            <div className='flex items-center justify-center flex-row my-4'>
                                <a
                                    href={`${project.github}`}
                                    rel='noreferrer'
                                    target='_blank'
                                    title='GitHub Link'
                                    className='mx-5'>
                                    <FaGithubSquare style={{ width: 25, height: 25 }} />
                                </a>
                                {
                                    project.live && <a
                                        href={`${project.live}`}
                                        rel='noreferrer'
                                        target='_blank'
                                        title='Live Link'
                                        className='mx-5'>
                                        <BiLinkExternal style={{ width: 25, height: 25 }} />
                                    </a>
                                }

                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

