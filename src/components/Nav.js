import React from 'react';
import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';

export default function Nav() {
    return (
        <header className='bg-pink-100 bg-opacity-90' >
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'>
                    <Link
                        className='nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl'
                        activeClass='underline'
                        to='about'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About
                    </Link>
                    <Link
                        className='nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl'
                        activeClass='underline'
                        to='skills'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Skills
                    </Link>
                    <Link
                        className='nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl'
                        activeClass='underline'
                        to='projects'
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects
                    </Link>
                    <Link
                        className='nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl'
                        activeClass='underline'
                        to='contact'
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                    >Contact
                    </Link>
                    {/* <li className='nav-item inline-flex items-end py-1 ml-80 mr-20 cursor-pointer font-medium text-xs '>
                        <Link
                            activeClass='underline'
                            to='bonus'
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >Bonus Photos
                        </Link></li> */}


                </nav>
                <div >
                    <SocialIcon
                        url='https://github.com/Ghazvinie'
                        bgColor='black'
                        className='mr-4 mt-7'
                        target='_blank'
                        style={{ height: 30, width: 30 }} />
                    <SocialIcon
                        url='https://www.linkedin.com/in/daniel-ghazvinie-53a304188/'
                        bgColor='black'
                        target='_blank'
                        className='mr-4 mt-7'
                        style={{ height: 30, width: 30 }} />
                </div>
            </div>

        </header>
    );
}