import React, { useEffect, useRef, useState, useCallback } from 'react'
import ButtonNavigasi from '../../components/NavbarList';
import IconArab from '../../components/IconArab';
import useWindowSize from '../../hook/UseWindowSize';
import PusatBantuan from '../../fragments/PusatBantuan';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import NavbarAdmin from '../../fragments/NavbarAdmin';
import NavbarUser from '../../fragments/NavbarUser';


// icon

import NavbarAdminComponent from '../../fragments/NavbarAdminComponent';
const index = ({ children, noFooter }) => {
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
    const navbarAdminRef = useRef(null)
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
    // Use Effect Handle Click Outside Navbar User
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


    // =============
    // Use Effect Handle Click Outside Navbar Admin
    // =============
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navbarAdminRef.current &&
                !navbarAdminRef.current.contains(event.target)
            ) {
                setShowNavbarAdmin(false);
            }
        };

        if (showNavbarAdmin) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showNavbarAdmin]);


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
            <NavbarAdminComponent showNavbarAdmin={showNavbarAdmin} handleNavbarAdmin={handleNavbarAdmin} navbarAdminRef={navbarAdminRef} />
            {children}

            {
                !noFooter && (
                    <Footer widthDevice={useWindowSize().width} />
                )
            }
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





export default index
