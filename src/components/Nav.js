import React from 'react';
import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';

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
                <div className='ml-auto flex-column'>
                    <div className='flex'>
                    <SocialIcon
                        url='https://github.com/Ghazvinie'
                        bgColor='black'
                        className='mr-1 ml-1 mt-4'
                        target='_blank'
                        style={{ height: 30, width: 30 }} />
                    <SocialIcon
                        url='https://www.linkedin.com/in/daniel-ghazvinie-53a304188/'
                        bgColor='black'
                        target='_blank'
                        className='mr-1 ml-1 mt-4'
                        style={{ height: 30, width: 30 }} />
                    </div>
                    <Link
                        className='cursor-pointer font-medium text-xs inline-flex text-center text-white hover:text-black'
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


        </header>
    );
}