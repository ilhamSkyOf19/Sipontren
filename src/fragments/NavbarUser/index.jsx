// ===================
// Navbar
// ===================

import IconArab from '../../components/IconArab';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import IconNavbar from '../../components/IconNavbar';


const NavbarUser = ({ showNavbar, handleClick, ref, toggleButtonRef, showNavbarList, widthDevice }) => {


    const navbar = [
        {
            label: 'Home',
            url: ''
        },
        {
            label: 'Profile',
            url: 'profile'
        },
        {
            label: `Kema'hadan`,
            url: 'kemahadan'
        },
        {
            label: 'PSB',
            url: 'psb'
        },
        {
            label: 'Formulir',
            url: 'formulir'
        },
    ]

    // ==================
    // Use Location 
    // ==================
    const location = useLocation();
    const currentPath = location.pathname;


    return (
        <div ref={ref} className={`flex flex-row justify-between items-center z-50 bg-secondary-blue w-full h-18 fixed transition duration-350 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} px-4 md:h-18 md:px-8 lg:h-14`}>
            {widthDevice < 400 && <IconArab width={90} />}
            {widthDevice > 700 && widthDevice <= 1024 && <IconArab width={100} />}
            {widthDevice > 1024 && <IconNavbar />}

            {widthDevice < 700 && <button
                ref={toggleButtonRef}
                onClick={handleClick}
                className='flex flex-row justify-end items-center '>
                <div className="relative w-8 h-8 p-2">
                    <FaBarsStaggered
                        className={`absolute inset-0 text-2xl transform transition-all duration-300 text-white cursor-pointer -scale-x-100 ${showNavbarList ? 'opacity-0 rotate-40 scale-75' : 'opacity-100 rotate-0 scale-100'
                            } md:md:text-4xl`}
                    />
                    <FaXmark
                        className={`absolute inset-0 text-2xl transform transition-all duration-300 text-white cursor-pointer ${showNavbarList ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                            } md:text-4xl`}
                    />
                </div>
            </button>}
            {widthDevice > 700 && widthDevice <= 1024 &&
                <div className='flex flex-row justify-end items-center gap-9'>
                    <NavbarLinkTab link='' text='Home' />
                    <NavbarLinkTab link='profile' text='Profile' />
                    <NavbarLinkTab link='kemahadan' text={`Kema'hadan`} />
                    <NavbarLinkTab link='psb' text='PSB' />
                    <NavbarLinkTab link='formulir' text='Formulir' />
                </div>
            }
            {widthDevice > 1024 &&
                <div className='flex flex-row justify-end items-center gap-6'>
                    {navbar.map((item, index) => (
                        <NavbarLinkTabDesktop key={index} link={item.url} text={item.label} active={currentPath === `/${item.url}`} />
                    ))}

                </div>
            }

        </div>
    )
}

// ====================
// Navbar Link tab
// ====================

const NavbarLinkTab = ({ link, text }) => {

    return (
        <Link to={`/${link}`} className={`text-lg text-white relative before:w-full before:h-[4px] before:bg-yellow-300 before:absolute before:bottom-0 before:left-0 before:origin-left before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100 `}>{text}</Link>
    )
}

// ====================
// Navbar Link tab Desktop
// ====================

const NavbarLinkTabDesktop = ({ link, text, active }) => {
    return (
        <Link to={`/${link}`} className={`text-lg text-white relative transition-all duration-700 ease-in-out hover:bg-primary-yellow  lg:text-xs lg:py-2 lg:px-4 lg:rounded-2xl lg:font-semibold ${active ? 'bg-primary-yellow' : 'bg-transparent'}`}>{text}</Link>
    )
}

export default NavbarUser