import React, { useState, useEffect } from 'react';

import { Link, animateScroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import { MdEmail } from 'react-icons/md';
import { RiMenuLine } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import { IoIosArrowUp } from 'react-icons/io'


export default function DropNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(window.scrollY);

    const offSet = -285;
    const linkStyle = 'nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer text-justify border-black border-solid border-b-2 border-opacity-0 hover:border-opacity-100 w-min';
    const linkActive = 'underline bg-black text-white rounded-sm';

    const updateScroll = () => {
        setScroll(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div className='flex flex-row justify-between'>
            <nav className='flex flex-col w-min'>
                {
                    isOpen ?
                        <div className='flex flex-row'>
                            <CgClose style={{ width: 50, height: 50 }} onClick={() => setIsOpen(!isOpen)} className='cursor-pointer' />
                            {
                                scroll > 500 &&
                                <div className='cursor-pointer self-center ml-20' onClick={() => animateScroll.scrollToTop()}>
                                    <IoIosArrowUp style={{ height: 40, width: 40 }} />
                                </div>
                            }

                        </div>
                        : <RiMenuLine style={{ width: 50, height: 50 }} className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                }

                {
                    isOpen &&
                    <div className='flex flex-col text-md text-2xl'>
                        <Link
                            className={linkStyle}
                            activeClass={linkActive}
                            to='about'
                            spy={true}
                            smooth={true}
                            offset={offSet}
                            duration={500}
                        >About
                        </Link>
                        <Link
                            className={linkStyle}
                            activeClass={linkActive}
                            to='projects'
                            spy={true}
                            smooth={true}
                            offset={offSet}
                            duration={500}
                        >Projects
                        </Link>
                        <Link
                            className={linkStyle}
                            activeClass={linkActive}
                            to='skills'
                            spy={true}
                            smooth={true}
                            offset={offSet}
                            duration={500}
                        >Skills
                        </Link>
                        <Link
                            className={linkStyle}
                            activeClass={linkActive}
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={offSet}
                            duration={500}
                        >Contact
                        </Link>
                    </div>
                }


            </nav>
            <div className='flex flex-col w-min'>

                <div className='flex flex-row  items-center justify-center'>
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

                <div className=''>
                    <Link
                        className='font-medium text-md text-black hover:text-black cursor-pointer'
                        activeClass='underline text-black'
                        to='photos'
                        spy={true}
                        smooth={true}
                        offset={offSet}
                        duration={500}>
                        <p className='text-center'>Bonus Photos</p>
                    </Link>
                </div>

            </div>
        </div>
    );
}