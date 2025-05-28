import React, { useEffect, useRef, useState, useCallback } from 'react'
import ButtonNavigasi from '../../components/NavbarList';
import IconArab from '../../components/IconArab';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import useWindowSize from '../../hook/UseWindowSize';
import PusatBantuan from '../../fragments/PusatBantuan';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const index = ({ children }) => {
    // ====================
    // State
    // ====================
    const [showNavbar, setShowNavbar] = useState(true)
    const [showNavbarList, setShowNavbarList] = useState(null)
    const [valueTop, setValueTop] = useState(0)



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





    return (
        <div className='flex flex-col overflow-hidden '>
            <Navbar ref={elementTop} showNavbar={showNavbar} handleClick={handleClick} toggleButtonRef={toggleButtonRef} showNavbarList={showNavbarList} widthDevice={useWindowSize().width} />
            {<NavbarListComponent valueTop={valueTop} showNavbarList={showNavbarList} setShowNavbarList={setShowNavbarList} navbarListRef={navbarListRef} />}
            {children}
            <Footer />
        </div>
    )
}


// ===================
// Navbar
// ===================


const Navbar = ({ showNavbar, handleClick, ref, toggleButtonRef, showNavbarList, widthDevice }) => {

    return (
        <div ref={ref} className={`flex flex-row justify-between items-center z-50 bg-secondary-blue w-full h-18 fixed transition duration-350 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} px-4 md:h-24 md:px-8`}>
            <IconArab width='18%' position='start' />
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
            {widthDevice > 700 &&
                <div className='flex flex-row justify-end items-center gap-7'>
                    <NavbarLinkTab link='' text='Home' />
                    <NavbarLinkTab link='profile' text='Profile' />
                    <NavbarLinkTab link='kemahadan' text={`Kema'hadan`} />
                    <NavbarLinkTab link='psb' text='PSB' />
                    <NavbarLinkTab link='formulir' text='Formulir' />
                </div>
            }

        </div>
    )
}

// =================
// Footer
// =================

const Footer = () => {
    const { window } = useWindowSize().width;
    return (
        <div className='w-screen min-h-[70vh] flex flex-col justify-start items-start bg-primary-blue pt-8 px-6 gap-6 pb-7] md:min-h-[100vh]'>
            <IconArab width='32%' />
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-primary-yellow md:text-2xl'>Alamat</p>
                <p className='text-sm text-white font-[200] md:text-xl'>
                    Jl. AR. Fakhrudin No.22 Desa Tanjung Harapan, Kecematan Seputih Banyak, Kabupaten Lampung Tengah 34156
                </p>
            </div>
            <div className='flex flex-col gap-7 mb-4'>
                <PusatBantuan title={'Bantuan'} link={['faq', '', '', '']} text={['FAQ', 'Hubungi Kami', '+62 822-7821-9515']} />
                <PusatBantuan title={'Layanan Kami'} link={['', '', '', '']} text={['Profil Pesantren', 'Penerimaan Santri Baru', 'Berita Terkini']} />
                <PusatBantuan title={'Informasi Penting'} link={['', '', '', '']} text={['Jam Kerja', 'Biaya Pendidikan', 'Pendaftaran']} />
            </div>

            {/* media social */}
            <div className='w-full flex flex-row justify-start items-center gap-3 mb-10'>
                <MediaSocialComponent link={'https://www.facebook.com/profile.php?id=100011218575737'}>
                    <FaFacebookF className='text-primary-blue text-xl md:text-3xl' />
                </MediaSocialComponent>
                <MediaSocialComponent link={'https://www.instagram.com/alaminseputihbanyak?igsh=MzJwbnI5bDJmMDVq'}>
                    <FaInstagram className='text-primary-blue text-xl md:text-3xl' />
                </MediaSocialComponent>
                <MediaSocialComponent link={'https://www.tiktok.com/@pontrenmu.alamin?_t=ZS-8wjeNqqt9wF&_r=1'}>
                    <FaTiktok className='text-primary-blue text-xl md:text-3xl' />
                </MediaSocialComponent>
                <MediaSocialComponent link={'https://www.youtube.com/@alaminseputihbanyak'}>
                    <FaYoutube className='text-primary-blue text-xl md:text-3xl' />
                </MediaSocialComponent>

            </div>
            <div className='w-full flex flex-col justify-center items-start'>
                <p className='text-sm text-white font-[200] md:text-lg'>
                    &copy; 2024 Sipontren Inc. Copyright and all rights reserved
                </p>
                <p className='text-sm text-white font-[200] md:text-lg'>Terms and Conditions</p>
                <p className='text-sm text-white font-[200] md:text-lg'>Privacy Policy</p>
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
            target='_blank'
            rel='noreferrer noopener'
            className='w-[2.2rem] h-[2.2rem] bg-white rounded-full flex justify-center items-center md:w-[4rem] md:h-[4rem]'>
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



// ====================
// Navbar Link tab
// ====================

const NavbarLinkTab = ({ link, text }) => {
    return (
        <Link to={`/${link}`} className='text-xl text-white relative before:w-full before:h-[2px] before:bg-yellow-300 before:absolute before:bottom-0 before:left-0 before:origin-left before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100'>{text}</Link>
    )
}

export default index
