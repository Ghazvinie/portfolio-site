import React from 'react';
import projects from '../data/projects';
import { FaGithubSquare } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

export default function Projects() {
    return (
        <div
            className='flex flex-col border-black border-t-4 my-2 mx-2 p-2 '
            name='projects'
        >
            <h1 className='text-4xl font-semibold'>Projects</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-18 md:ml-36 justify-items-center items-center'>

                {
                    projects.map(project => (
                        <div className='flex flex-col ml-2'>
                            <img src={project.img} className='w-full h-48 object-scale-down text-center' alt={project.title} />
                            <h1 className='text-center text-lg font-bold break-word mb-3 mt-4'>
                                {project.title}
                            </h1>
                            <p className='break-word text-center text-medium font-light m-2 text-center'>
                                {project.description}
                            </p>
                            <div className='flex items-center justify-center flex-row m-2'>
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

