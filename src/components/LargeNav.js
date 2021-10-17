import { Link } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import { MdEmail } from 'react-icons/md';

export default function LargeNav() {
    const offSet = -84;
    const linkStyle = 'nav-item inline-flex items-center py-3 px-3 mr-4 cursor-pointer font-medium text-4xl';
    const linkActive = 'underline bg-black text-white rounded-sm'
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
                    offset={offSet - 15}
                    duration={500}>
                    Contact
                </Link>
            </nav>
            <div className='flex flex-col mt-3'>
                <div className='flex flex-row items-center justify-center'>
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
                    <a href='mailto:danielghazvinie@protonmail.com'>
                        <MdEmail
                            bgColor='black'
                            target='_blank'
                            className='mx-1'
                            style={{ height: 32, width: 32 }} />
                    </a>
                </div>
                <div className='text-center m-1'>
                    <Link
                        className='font-medium text-md text-center text-white hover:text-black cursor-pointer p-1'
                        activeClass='bg-black underline'
                        to='photos'
                        spy={true}
                        smooth={true}
                        offset={offSet -5}
                        duration={500}>
                            Bonus Photos
                    </Link>
                </div>
            </div>
        </div>
    )
}