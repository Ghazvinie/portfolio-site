import React, { useState } from 'react';

import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import { MdEmail } from 'react-icons/md';
import { RiMenuLine } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';

export default function DropNav() {
    const [isOpen, setIsOpen] = useState(false);
    const offSet =  - 300;
    const linkStyle = 'nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer';
    const linkActive = 'underline bg-black text-white';

    return (
        <div className='flex flex-row justify-between'>
            <nav className='flex flex-col w-min'>
                <button
                    className='cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <CgClose style={{ width: 50, height: 50 }} className=' ' /> : <RiMenuLine style={{ width: 50, height: 50 }} className='' />}
                </button>
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
                <div className='text-center'>
                    <Link
                        className='cursor-pointer font-medium text-xs text-right text-white hover:text-black'
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
    )
}