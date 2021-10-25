import React, { useState, useEffect } from 'react';

import { Link, animateScroll } from 'react-scroll';

import { MdEmail } from 'react-icons/md';
import { RiMenuLine } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import { IoIosArrowUp } from 'react-icons/io'
import { AiFillLinkedin } from 'react-icons/ai'
import { VscGithubInverted } from 'react-icons/vsc'



export default function DropNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(window.scrollY);

    const offSet = -355
    const linkStyle = 'nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer text-justify border-black border-solid border-b-2 border-opacity-0 hover:border-opacity-100 w-min';
    const linkActive = 'underline bg-black text-white rounded-sm';
    const iconStyle = 'border-black border-b-2 border-opacity-0 hover:border-opacity-100 mx-1 max-h-9';
    const iconSize = { height: 28, width: 28 };

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
                        <div className='flex flex-row w-min'>
                            <CgClose style={{ width: 50, height: 50 }} onClick={() => setIsOpen(!isOpen)} className='cursor-pointer' />
                            {
                                scroll > 600 && <IoIosArrowUp style={{ height: 40, width: 40 }} className='cursor-pointer place-self-center ml-2' onClick={() => animateScroll.scrollToTop()} />
                            }
                        </div>
                        :
                        <div className='flex flex-row'>
                            <RiMenuLine style={{ width: 50, height: 50 }} className='cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                            {
                                scroll > 600 && <IoIosArrowUp style={{ height: 40, width: 40 }} className='cursor-pointer place-self-center ml-2' onClick={() => animateScroll.scrollToTop()} />
                            }
                        </div>
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
                        <Link
                            className={linkStyle}
                            activeClass={linkActive}
                            to='photos'
                            spy={true}
                            smooth={true}
                            offset={offSet}
                            duration={500}>
                            Photos
                        </Link>
                    </div>
                }
            </nav>
            <div className='flex flex-row self-start mt-3'>
                <a href='https://github.com/Ghazvinie' className={iconStyle} target='_blank' rel='noreferrer'>
                    <VscGithubInverted
                        style={iconSize}
                        title='GitHub' />
                </a>
                <a href='https://www.linkedin.com/in/daniel-ghazvinie' className={iconStyle} target='_blank' rel='noreferrer'>
                    <AiFillLinkedin
                        style={iconSize}
                        title='LinkedIn' />
                </a>
                <a href='mailto:danielghazvinie@protonmail.com' className={iconStyle} target='_blank' rel='noreferrer'>
                    <MdEmail
                        style={iconSize}
                        title='Email' />
                </a>
            </div>
        </div>
    );
}