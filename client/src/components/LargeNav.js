import React, { useState, useEffect } from 'react';
import { Link, animateScroll } from 'react-scroll';
import { MdEmail } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io'
import { AiFillLinkedin } from 'react-icons/ai'
import { VscGithubInverted } from 'react-icons/vsc'

export default function LargeNav() {
    const [scroll, setScroll] = useState(window.scrollY);

    const updateScroll = () => {
        setScroll(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const offSet = -84;
    const linkStyle = 'nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl border-black border-solid border-b-4 border-opacity-0 hover:border-opacity-100';
    const linkActive = 'underline bg-black text-white rounded-sm';
    const iconStyle = 'border-black border-b-2 border-opacity-0 hover:border-opacity-100 mx-1';
    const iconSize = { height: 33, width: 33 };

    return (
        <div className='flex flex-row justify-between'>
            <nav className='flex flex-row flex-wrap mb-1'>
                <Link
                    className={linkStyle}
                    activeClass={linkActive}
                    to='about'
                    spy={true}
                    smooth={true}
                    offset={offSet}
                    duration={500}>
                    About
                </Link>
                <Link
                    className={linkStyle}
                    activeClass={linkActive}
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={offSet}
                    duration={500}>
                    Projects
                </Link>
                <Link
                    className={linkStyle}
                    activeClass={linkActive}
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={offSet}
                    duration={500}>
                    Skills
                </Link>
                <Link
                    className={linkStyle}
                    activeClass={linkActive}
                    to='contact'
                    spy={true}
                    smooth={true}
                    offset={offSet}
                    duration={500}>
                    Contact
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
                    {
                    scroll > 800 &&
                        <IoIosArrowUp style={{ height: 35, width: 35 }} className='cursor-pointer self-center' onClick={() => animateScroll.scrollToTop()} />
                }

            </nav>
            <div className='flex flex-row self-center'>

                    <a href='https://github.com/Ghazvinie' className={iconStyle} target='_blank' rel='noreferrer'>
                        <VscGithubInverted
                            style={iconSize}
                            title='GitHub' />
                    </a>
                    <a href='https://www.linkedin.com/in/daniel-ghazvinie-53a304188/' className={iconStyle} target='_blank' rel='noreferrer'>
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
    )
}