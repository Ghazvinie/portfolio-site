import React from 'react';
import projects from '../data/projects';
import { FaGithubSquare } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
import mainLogo from '../assets/player.png'

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
                        <div className='flex flex-col max-w-2xl flex-wrap m-4 justify-center items-center'>
                            <img src={project.img} />
                            <h1 className='flex font-semibold m-2 text-center break-word'>
                                {project.title}
                            </h1>
                            <p className='flex break-word text-medium font-light m-2 text-center'>
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