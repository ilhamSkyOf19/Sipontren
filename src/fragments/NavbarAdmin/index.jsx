// ===================
// Navbar
// ===================

import { FaBarsStaggered } from 'react-icons/fa6';


const NavbarAdmin = ({ showNavbar, ref, handleNavbarAdmin, header }) => {


    return (
        <div ref={ref} className={`flex flex-row justify-between items-center z-50 bg-secondary-blue w-full h-18 fixed transition duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} px-4 md:h-18 md:px-8 lg:h-14`}>
            <FaBarsStaggered onClick={handleNavbarAdmin} className='rounded-lg px-3 py-2 w-11 h-11 bg-primary-blue  fill-white cursor-pointer ' />
            <p className='text-lg font-semibold text-white'>Data {header}</p>
        </div>
    )
}


export default NavbarAdmin