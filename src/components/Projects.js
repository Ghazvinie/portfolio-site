import React from 'react';
import projects from '../data/projects';
import { FaGithubSquare } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

export default function Projects() {
    return (
        <div
            className='border-black border-t-4 flex my-2 mx-2 p-2'
            name='projects'
        >
            <h1 className='text-4xl font-semibold'>Projects</h1>
            <div className='flex flex-row flex-wrap items-center justify-center mx-auto'>
                {
                    projects.map(project => (
                        <div className='flex flex-col m-4 justify-center items-center'>
                            <img />
                            <h1 className='flex text-2xl font-semibold m-2'>
                                {project.title}
                            </h1>
                            <p className='flex break-all text-medium font-light m-2'>
                                {project.description}
                            </p>
                            <div className='flex flex-row m-2'>
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
                    ))
                }

            </div>
        </div>
    );
}