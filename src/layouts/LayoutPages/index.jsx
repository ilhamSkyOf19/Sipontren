import React, { useEffect, useRef, useState, useCallback } from 'react'
import ButtonNavigasi from '../../components/NavbarList';
import IconArab from '../../components/IconArab';
import useWindowSize from '../../hook/UseWindowSize';
import PusatBantuan from '../../fragments/PusatBantuan';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import NavbarAdmin from '../../fragments/NavbarAdmin';
import NavbarUser from '../../fragments/NavbarUser';


// icon
import { RiArrowRightSLine } from 'react-icons/ri'
import { BsThreeDots } from "react-icons/bs";
import { IoClose, IoHome } from 'react-icons/io5';
import { FaListAlt, FaLock, FaUser } from 'react-icons/fa'
const index = ({ children }) => {
    // ====================
    // State
    // ====================
    const [showNavbar, setShowNavbar] = useState(true)
    const [showNavbarList, setShowNavbarList] = useState(null)
    const [valueTop, setValueTop] = useState(0)
    const [admin, setAdmin] = useState(true)
    const [showNavbarAdmin, setShowNavbarAdmin] = useState(false)



    // ====================
    // Use Reff
    // ====================
    const lastScrollY = useRef(0)
    const elementTop = useRef(null)
    const navbarListRef = useRef(null);
    const toggleButtonRef = useRef(null);




    // ====================
    // Use Effect Handle Scroll
    // ====================

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY.current) {
                setShowNavbarList(false)
                setShowNavbar(false)
            } else if (currentScrollY < lastScrollY.current) {
                setShowNavbar(true)
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        if (showNavbarList && elementTop.current) {
            const bottom = elementTop.current.getBoundingClientRect().bottom;
            setValueTop(bottom);
        }
    }, [showNavbarList]);


    // =============
    // Use Effect Handle Click Outside
    // =============
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarListRef.current &&
                !navbarListRef.current.contains(event.target) &&
                toggleButtonRef.current &&
                !toggleButtonRef.current.contains(event.target)
            ) {
                setShowNavbarList(false);
            }
        };

        if (showNavbarList) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showNavbarList]);


    // ====================
    // handle click Show Navbar
    // ====================

    const handleClick = useCallback(() => {
        setShowNavbarList((prev) => !prev)
    }, [showNavbarList])


    // ====================
    // handle click Show NavbarAdmin
    // ====================

    const handleNavbarAdmin = useCallback(() => {
        setShowNavbarAdmin((prev) => !prev)
    }, [showNavbarAdmin])


    // =================
    // Cek role
    // =================
    const path = window.location.pathname;
    useEffect(() => {
        if (path.includes('/admin')) {
            setAdmin(true)
        } else {
            setAdmin(false)
        }
    }, [])





    return (
        <div className='flex flex-col overflow-hidden '>
            {
                admin ? (
                    <NavbarAdmin ref={elementTop} showNavbar={showNavbar} widthDevice={useWindowSize().width} handleNavbarAdmin={handleNavbarAdmin} />
                ) : (
                    <NavbarUser ref={elementTop} showNavbar={showNavbar} handleClick={handleClick} toggleButtonRef={toggleButtonRef} showNavbarList={showNavbarList} widthDevice={useWindowSize().width} />
                )
            }

            {/* Navbar user */}
            <NavbarListComponent valueTop={valueTop} showNavbarList={showNavbarList} setShowNavbarList={setShowNavbarList} navbarListRef={navbarListRef} />

            {/* Navbar admin */}
            <NavbarAdminComponent showNavbarAdmin={showNavbarAdmin} handleNavbarAdmin={handleNavbarAdmin} />
            {children}
            <Footer widthDevice={useWindowSize().width} />
        </div>
    )
}






// =================
// Footer
// =================

const Footer = ({ widthDevice }) => {
    return (
        <div className='w-screen min-h-[70vh] flex flex-col justify-start items-start bg-primary-blue pt-8 px-4 gap-6 pb-7 md:min-h-[100vh] lg:min-h-[40vh] lg:px-14 lg:pb-4 lg:pt-9'>
            <div className='w-full flex flex-col justify-start items-start gap-6 lg:flex-row lg:justify-between'>
                <div className='w-full flex flex-col justify-start items-start gap-6 lg:flex-1'>
                    <IconArab width={widthDevice > 0 && widthDevice <= 760 ? 100 : widthDevice > 760 && widthDevice < 1024 ? 100 : widthDevice > 1024 ? 140 : 100} />
                    <div className='flex flex-col gap-2'>
                        <p className='text-sm text-primary-yellow md:text-2xl lg:text-sm'>Alamat</p>
                        <a href='https://maps.app.goo.gl/QvT4tcbTzG6kppcq7' target='_blank' className='text-sm text-white font-[200] md:text-xl lg:text-sm lg:cursor-pointer lg:font-normal'>
                            Jl. AR. Fakhrudin No.22 Desa Tanjung Harapan, Kecematan Seputih Banyak, Kabupaten Lampung Tengah 34156
                        </a>
                    </div>
                    {widthDevice < 1024 && <div className='flex flex-col gap-7 mb-4'>
                        <PusatBantuan title={'Bantuan'} link={['faq', '', '', '']} text={['FAQ', 'Hubungi Kami', '+62 822-7821-9515']} />
                        <PusatBantuan title={'Layanan Kami'} link={['', '', '', '']} text={['Profil Pesantren', 'Penerimaan Santri Baru', 'Berita Terkini']} />
                        <PusatBantuan title={'Informasi Penting'} link={['', '', '', '']} text={['Jam Kerja', 'Biaya Pendidikan', 'Pendaftaran']} />
                    </div>}


                    {/* media social */}
                    <div className='w-full flex flex-row justify-start items-center gap-3 lg:mb-1'>
                        <MediaSocialComponent link={'https://www.facebook.com/profile.php?id=100011218575737'}>
                            <FaFacebookF className='text-primary-blue text-xl md:text-3xl lg:text-lg' />
                        </MediaSocialComponent>
                        <MediaSocialComponent link={'https://www.instagram.com/alaminseputihbanyak?igsh=MzJwbnI5bDJmMDVq'}>
                            <FaInstagram className='text-primary-blue text-xl md:text-3xl lg:text-lg' />
                        </MediaSocialComponent>
                        <MediaSocialComponent link={'https://www.tiktok.com/@pontrenmu.alamin?_t=ZS-8wjeNqqt9wF&_r=1'}>
                            <FaTiktok className='text-primary-blue text-xl md:text-3xl lg:text-lg' />
                        </MediaSocialComponent>
                        <MediaSocialComponent link={'https://www.youtube.com/@alaminseputihbanyak'}>
                            <FaYoutube className='text-primary-blue text-xl md:text-3xl lg:text-lg' />
                        </MediaSocialComponent>

                    </div>
                </div>
                {widthDevice > 1024 && <div className='flex flex-col gap-7 mb-4 lg:flex-1 lg:flex-row lg:justify-end'>
                    <PusatBantuan title={'Bantuan'} link={['faq', '', '', '']} text={['FAQ', 'Hubungi Kami', '+62 822-7821-9515']} />
                    <PusatBantuan title={'Layanan Kami'} link={['', '', '', '']} text={['Profil Pesantren', 'Penerimaan Santri Baru', 'Berita Terkini']} />
                    <PusatBantuan title={'Informasi Penting'} link={['', '', '', '']} text={['Jam Kerja', 'Biaya Pendidikan', 'Pendaftaran']} />
                </div>}
            </div>


            <div className='w-full flex flex-col justify-center items-start lg:flex-row lg:justify-between'>
                <p className='text-sm text-white font-[200] md:text-lg lg:text-sm'>
                    &copy; 2024 Sipontren Inc. Copyright and all rights reserved
                </p>
                <div className='flex flex-col justify-start items-start gap-0 lg:flex-row lg:gap-5'>
                    <p className='text-sm text-white font-[200] md:text-lg lg:text-sm'>Terms and Conditions</p>
                    {widthDevice > 1024 && <p className='text-sm text-white font-bold'>&middot;</p>}
                    <p className='text-sm text-white font-[200] md:text-lg lg:text-sm'>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

// =================
// Media social component
// =================

const MediaSocialComponent = ({ link, children }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="w-[2.2rem] h-[2.2rem] bg-white rounded-full flex justify-center items-center 
             md:w-[4rem] md:h-[4rem] lg:w-[2rem] lg:h-[2rem] 
             transform lg:hover:scale-120 transition duration-300 ease-in-out will-change-transform"
        >
            {children}
        </a>

    )
}

// =================
// Navbar List 
// =================

const NavbarListComponent = ({ valueTop, showNavbarList, navbarListRef }) => {
    // =================
    // state
    // =================
    const [selected, setSelected] = useState('')


    // =================
    // handle selected
    // =================
    const handleSelected = useCallback((index) => {
        setSelected(index)
        console.log(index)
    }, [selected])

    return (
        <div
            ref={navbarListRef}
            className={`fixed w-full bg-[#1d4ed8] transition duration-700 shadow-xs shadow-slate-400 z-40  ${showNavbarList ? 'translate-y-0 ' : '-translate-y-[28rem]'} flex flex-col items-center justify-between`}
            style={{ top: valueTop }}>
            <ButtonNavigasi label={'HOME'} url={'/'} />
            <ButtonNavigasi label={'PROFILE'} url={'/profile'} />
            <ButtonNavigasi label={`KEMA'HADAN`} url={'/kemahadan'} />
            <ButtonNavigasi label={`PSB ( Penerimaan Siswa Baru)`} url={'/psb'} />
            <ButtonNavigasi label={`Formulir Pendaftaran`} url={'/formulir'} />
        </div>
    )
}



// navbar admin

//

const NavbarAdminComponent = ({ showNavbarAdmin, handleNavbarAdmin }) => {

    const [showUrl, setShowUrl] = useState(false)




    // handle show url 
    const handleShowUrl = () => {
        setShowUrl((prev) => !prev)
    }


    return (
        <div className={`flex px-1.5 flex-col justify-start items-start fixed py-2 w-[70%] h-[100vh] bg-primary-blue transition duration-700 shadow-xs shadow-slate-400 z-50  ${showNavbarAdmin ? 'translate-x-0' : '-translate-x-full'}`}>
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
            <UrlDashboard link={'/admin/usatad-ustadzah'} label={'Data Ustad & Ustadzah'}>
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
        <div className={`w-full flex flex-col justify-start items-start gap-2 px-3.5 overflow-hidden transition-all duration-700 ease-in-out ${showUrl ? 'max-h-[20rem]' : 'max-h-0'}`}>
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

export default index
