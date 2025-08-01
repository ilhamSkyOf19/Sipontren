import { useState } from 'react'
import { Link } from 'react-router-dom';


// icon
import { RiArrowRightSLine } from 'react-icons/ri'
import { BsThreeDots } from "react-icons/bs";
import { IoClose, IoHome } from 'react-icons/io5';
import { FaListAlt, FaLock, FaUser } from 'react-icons/fa'

const NavbarAdminComponent = ({ showNavbarAdmin, handleNavbarAdmin, navbarAdminRef }) => {

    const [showUrl, setShowUrl] = useState(false)




    // handle show url 
    const handleShowUrl = () => {
        setShowUrl((prev) => !prev)
    }


    return (
        <div ref={navbarAdminRef} className={`flex px-1.5 flex-col justify-start items-start fixed py-2 w-[70%] h-[100vh] bg-primary-blue transition duration-300 shadow-xs shadow-slate-400 z-50  ${showNavbarAdmin ? 'translate-x-0' : '-translate-x-full'} md:w-[40%] lg:w-[25%] xl:w-[30%]`}>
            <div className='w-full flex flex-row justify-end items-center px-4 relative before:absolute before:w-[60%] before:h-0.5 before:left-3.5 before:bg-white'>
                <IoClose className={`text-white text-5xl cursor-pointer transition duration-1000 py-2 px-2   ${showNavbarAdmin ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} onClick={handleNavbarAdmin} />
            </div>
            <div className='w-full flex flex-row justify-start items-center px-3.5'>
                <p className='text-2xl font-semibold text-white'>Dashboard</p>
            </div>

            {/* home */}
            <UrlComponent showUrl={showUrl} handleShowUrl={handleShowUrl} />
            {/* link url */}


            {/* url dashboard */}
            <UrlDashboard link={'/admin/calon-santri'} label={'Data Calon Santri'}>
                <FaListAlt className={`text-white text-lg`} />
            </UrlDashboard>
            <UrlDashboard link={'/admin/ustad-ustadzah'} label={'Data Ustad & Ustadzah'}>
                <FaListAlt className={`text-white text-lg`} />
            </UrlDashboard>
            <UrlDashboard link={'/admin/alumni'} label={'Data Alumni'}>
                <FaListAlt className={`text-white text-lg`} />
            </UrlDashboard>
            <UrlDashboard link={'/admin/berita'} label={'Data Berita'}>
                <FaListAlt className={`text-white text-lg`} />
            </UrlDashboard>
            <UrlDashboard link={'/admin/username'} label={'Ubah Username'}>
                <FaUser className={`text-white text-lg`} />
            </UrlDashboard>
            <UrlDashboard link={'/admin/password'} label={'Ubah Password'}>
                <FaLock className={`text-white text-lg`} />
            </UrlDashboard>

        </div>
    )
}


// home url
const UrlComponent = ({ showUrl, handleShowUrl }) => {
    return (
        <>
            <div className='flex w-[95%] flex-row justify-between items-center mt-4 active:bg-secondary-blue cursor-pointer rounded-lg py-3 pl-3.5 pr-1' onClick={handleShowUrl}>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <IoHome className={`text-white text-lg`} />
                    <Link to={'/admin/home'} className='text-white text-sm'>Home</Link>
                </div>
                <RiArrowRightSLine className={`text-white text-xl transition duration-300 ${showUrl && 'rotate-90'}`} />
            </div>
            <LinkUrlComponent showUrl={showUrl} />
        </>
    )
}


// link url 
const LinkUrlComponent = ({ showUrl }) => {
    const navbar = [
        {
            label: 'Home',
            url: '',
        },
        {
            label: 'Profile',
            url: 'profile',
        },
        {
            label: `Kema'hadan`,
            url: 'kemahadan',
        },
        {
            label: 'PSB',
            url: 'psb',
        },
        {
            label: 'Formulir',
            url: 'formulir',
        },
    ]
    return (
        <div className={`w-full flex flex-col justify-start items-start gap-2 px-3.5 overflow-hidden transition-all duration-300 ease-in-out ${showUrl ? 'max-h-[20rem]' : 'max-h-0'}`}>
            {
                navbar.map((item, index) => (
                    <Link to={`/admin/${item.url}`} key={index} className='flex flex-row w-full justify-start items-center gap-2 pl-4.5 py-2 active:bg-secondary-blue cursor-pointer rounded-lg'>
                        <BsThreeDots className='text-white text-xl' />
                        <p className='text-white text-sm'>{item.label}</p>
                    </Link>

                ))
            }
        </div>
    )
}



// url dashboard
const UrlDashboard = ({ link, label, children }) => {
    return (
        <div className='flex w-[95%] flex-row justify-between items-center active:bg-secondary-blue cursor-pointer rounded-lg py-3 pl-3.5 pr-1'>
            <div className='flex flex-row justify-start items-center gap-2'>
                {children}
                <Link to={link} className='text-white text-sm'>{label}</Link>
            </div>

        </div>
    )
}

export default NavbarAdminComponent;