import React, { useState, useEffect } from 'react';
import { Link, animateScroll } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import { MdEmail } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io'

export default function LargeNav() {
    const [scroll, setScroll] = useState(window.scrollY);
    const [enter, setEnter] = useState(false);

    const updateScroll = () => {
        setScroll(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);

    const handleEnterLeave = (e) => {
        setEnter((prevEnter) => !prevEnter);
    };



    const offSet = -84;
    const linkStyle = 'nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl border-black border-solid border-b-4 border-opacity-0 hover:border-opacity-100';
    const linkActive = 'underline bg-black text-white rounded-sm';
    const linkUnderline = 'border-b-2 border-black border-opacity-0 border-opacity-0 mt-2 w-5 self-center'
    const linkUnderlineActive = 'border-b-2 border-black border-opacity-0 border-opacity-100 mt-2 w-5 self-center'


    return (
        <div className='flex flex-row justify-between'>
            <nav className='flex flex-wrap mb-1'>
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
                    offset={offSet - 8}
                    duration={500}>
                    Contact
                </Link>
                {
                    scroll > 400 &&
                    <div className='flex flex-col justify-center cursor-pointer ml-4' onClick={() => animateScroll.scrollToTop()}>

                        <IoIosArrowUp style={{ height: 40, width: 40 }} />
                    </div>
                }
            </nav>
            <div className='flex flex-col mt-3'>
                <div className='flex flex-row items-centerjustify-center'>
                    <div className='flex flex-col border-black border-b-2 border-opacity-0 hover:border-opacity-100'>
                        <SocialIcon
                            url='https://github.com/Ghazvinie'
                            bgColor='black'
                            className='mx-1 mb-2'
                            target='_blank'
                            style={{ height: 30, width: 30 }}
                            title='GitHub'
                            onMouseEnter={handleEnterLeave} 
                            onMouseLeave={handleEnterLeave}/>

                    </div>
                    <div className='flex flex-col border-black border-b-2 border-opacity-0 hover:border-opacity-100'>
                        <SocialIcon
                            url='https://www.linkedin.com/in/daniel-ghazvinie-53a304188/'
                            bgColor='black'
                            target='_blank'
                            className='mx-1 mb-2'
                            style={{ height: 30, width: 30 }}
                            title='LinkedIn' 
                            onMouseEnter={handleEnterLeave} 
                            onMouseLeave={handleEnterLeave}/>
                    </div>
                    <div className='flex flex-col border-black border-b-2 border-opacity-0 hover:border-opacity-100'>
                        <a href='mailto:danielghazvinie@protonmail.com'>
                            <MdEmail
                                bgColor='black'
                                target='_blank'
                                className='mx-1 mb-2'
                                style={{ height: 32, width: 32 }}
                                title='Email' 
                                onMouseEnter={handleEnterLeave} 
                            onMouseLeave={handleEnterLeave}/>
                        </a>
                    </div>
                </div>
                <div className='text-center m-1'>
                    <Link
                        className='font-medium text-md text-center text-white hover:text-black cursor-pointer p-1'
                        activeClass='bg-black underline'
                        to='photos'
                        spy={true}
                        smooth={true}
                        offset={offSet}
                        duration={500}>
                        Bonus Photos
                    </Link>
                </div>
            </div>
        </div>
    )
}