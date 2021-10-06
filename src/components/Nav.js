import React from 'react';
import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import { MdEmail } from 'react-icons/md';

export default function Nav() {
    return (
        <header className='bg-white p-2 border-b-4 border-black' >
            <div className='container mx-auto flex flex-wrap justify-between'>
                <nav className='flex flex-wrap mb-1'>
                    <Link
                        className='nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl'
                        activeClass='underline bg-black text-white'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-94}
                        duration={500}
                    >About
                    </Link>
                    <Link
                        className='nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl'
                        activeClass='underline bg-black text-white'
                        to='skills'
                        spy={true}
                        smooth={true}
                        offset={-94}
                        duration={500}
                    >Skills
                    </Link>
                    <Link
                        className='nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl'
                        activeClass='underline bg-black text-white'
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-94}
                        duration={500}
                    >Projects
                    </Link>
                    <Link
                        className='nav-item inline-flex items-center py-3 px-3 mr-1 cursor-pointer font-medium text-4xl'
                        activeClass='underline bg-black text-white'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Contact
                    </Link>



                </nav>
                <div className='flex flex-col justify-center items-center self-end'>
                    <div className='flex flex-row mt-auto items-center justify-center'>
                        <SocialIcon
                            url='https://github.com/Ghazvinie'
                            bgColor='black'
                            className='mx-1'
                            target='_blank'
                            style={{ height: 30, width: 30 }} />
                        <SocialIcon
                            url='https://www.linkedin.com/in/daniel-ghazvinie-53a304188/'
                            bgColor='black'
                            target='_blank'
                            className='mx-1'
                            style={{ height: 30, width: 30 }} />
                        <a href="mailto:danielghazvinie@protonmail.com">
                            <MdEmail
                                bgColor='black'
                                target='_blank'
                                className='mx-1'
                                style={{ height: 32, width: 32 }} />
                        </a>
                    </div>
                    <div>
                        <Link
                            className='cursor-pointer font-medium text-xs text-right text-white hover:text-black w-full'
                            activeClass='underline'
                            to='bonus'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >Bonus Photos
                        </Link>
                    </div>

                </div>

            </div>


        </header>
    );
}