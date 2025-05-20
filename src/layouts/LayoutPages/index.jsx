import React, { useEffect, useRef, useState, useCallback } from 'react'
import ButtonNavigasi from '../../components/NavbarList';
import IconArab from '../../components/IconArab';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import useWindowSize from '../../hook/UseWindowSize';
import PusatBantuan from '../../fragments/PusatBantuan';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

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
    // Use Effect
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
    // handle click
    // ====================

    const handleClick = useCallback(() => {
        setShowNavbarList((prev) => !prev)
    }, [showNavbarList])

    return (
        <div className='flex flex-col overflow-hidden '>
            <Navbar ref={elementTop} showNavbar={showNavbar} handleClick={handleClick} toggleButtonRef={toggleButtonRef} showNavbarList={showNavbarList} />
            {<NavbarListComponent valueTop={valueTop} showNavbarList={showNavbarList} setShowNavbarList={setShowNavbarList} navbarListRef={navbarListRef} />}
            {children}
            <Footer />
        </div>
    )
}


// ===================
// Navbar
// ===================


const Navbar = ({ showNavbar, handleClick, ref, toggleButtonRef, showNavbarList }) => {

    return (
        <div ref={ref} className={`flex flex-row justify-between items-center z-40 bg-secondary-blue w-full h-18 fixed transition duration-350 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} px-4`}>
            <IconArab width='50%' position='start' />
            <button
                ref={toggleButtonRef}
                onClick={handleClick}
                className='flex flex-row justify-end items-center '>
                <div className="relative w-8 h-8 p-2">
                    <FaBarsStaggered
                        className={`absolute inset-0 text-2xl transform transition-all duration-300 text-white cursor-pointer -scale-x-100 ${showNavbarList ? 'opacity-0 rotate-40 scale-75' : 'opacity-100 rotate-0 scale-100'
                            }`}
                    />
                    <FaXmark
                        className={`absolute inset-0 text-2xl transform transition-all duration-300 text-white cursor-pointer ${showNavbarList ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                            }`}
                    />
                </div>
            </button>
        </div>
    )
}

// =================
// Footer
// =================

const Footer = () => {
    const { width } = useWindowSize();
    return (
        <div className='w-screen min-h-[70vh] flex flex-col justify-start items-start bg-primary-blue pt-8 px-6 gap-6 pb-7 '>
            <IconArab />
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-primary-yellow'>Alamat</p>
                <p className='text-sm text-white font-[200]'>
                    Jl. AR. Fakhrudin No.22 Desa Tanjung Harapan, Kecematan Seputih Banyak, Kabupaten Lampung Tengah 34156
                </p>
            </div>
            <div className='flex flex-col gap-7'>
                <PusatBantuan title={'Bantuan'} link={['faq', '', '', '']} text={['FAQ', 'Hubungi Kami', '+62 822-7821-9515']} />
                <PusatBantuan title={'Layanan Kami'} link={['', '', '', '']} text={['Profil Pesantren', 'Penerimaan Santri Baru', 'Berita Terkini']} />
                <PusatBantuan title={'Informasi Penting'} link={['', '', '', '']} text={['Jam Kerja', 'Biaya Pendidikan', 'Pendaftaran']} />
            </div>
            <MediaSocialComponent />
            {width <= 450 ? (
                <div className='w-full flex flex-col justify-center items-start gap-2'>
                    <div className='w-full h-[1px] bg-white mb-2'></div>
                    <p className='text-sm text-white font-[200]'>
                        &copy; 2024 Sipontren Inc. Copyright and all rights reserved
                    </p>
                    <p className='text-sm text-white font-[200]'>Terms and Conditions</p>
                    <p className='text-sm text-white font-[200]'>Privacy Policy</p>
                </div>
            ) : (
                <div className='w-full flex flex-col justify-center items-start'>
                    <p className='text-sm text-white font-[200]'>
                        &copy; 2024 Sipontren Inc. Copyright and all rights reserved
                    </p>
                    <p className='text-sm text-white font-[200]'>Terms and Conditions</p>
                    <p className='text-sm text-white font-[200]'>Privacy Policy</p>
                </div>
            )}
        </div>
    )
}

// =================
// Media social component
// =================

const MediaSocialComponent = () => {
    return (
        <div className='w-full flex flex-row justify-start items-center gap-3 mb-4'>
            <a
                href='https://m.facebook.com/people/PontrenMu-Al-Amin-Seba/100011218575737/'
                target='_blank'
                rel='noreferrer noopener'
                className='w-[2.2rem] h-[2.2rem] bg-white rounded-full flex justify-center items-center'>
                <FaFacebookF className='text-primary-blue text-xl' />
            </a>
            <a
                href='https://www.instagram.com/alaminseputihbanyak/'
                target='_blank'
                rel='noreferrer noopener'
                className='w-[2.2rem] h-[2.2rem] bg-white rounded-full flex justify-center items-center'>
                <FaInstagram className='text-primary-blue text-xl' />
            </a>
            <a
                href='https://m.facebook.com/people/PontrenMu-Al-Amin-Seba/100011218575737/'
                target='_blank'
                rel='noreferrer noopener'
                className='w-[2.2rem] h-[2.2rem] bg-white rounded-full flex justify-center items-center'>
                <FaTiktok className='text-primary-blue text-xl' />
            </a>
            <a
                href='https://youtube.com/@alaminseputihbanyak?si=HorDAiacHdvmMMpQ'
                target='_blank'
                rel='noreferrer noopener'
                className='w-[2.2rem] h-[2.2rem] bg-white rounded-full flex justify-center items-center'>
                <FaYoutube className='text-primary-blue text-xl' />
            </a>
        </div>
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
            className={` fixed w-full bg-[#1d4ed8] transition-opacity duration-200 shadow-xs shadow-slate-400  ${showNavbarList ? 'opacity-100 z-20' : 'opacity-0 -z-20'} flex flex-col items-center justify-between`}
            style={{ top: valueTop }}>
            <ButtonNavigasi label={'HOME'} url={'/'} />
            <ButtonNavigasi label={'PROFILE'} url={'/profile'} />
            <ButtonNavigasi label={`KEMA'HADAN`} url={'/'} />
            <ButtonNavigasi label={`EKTRAKULIKULER`} url={'/'} />
            <ButtonNavigasi label={`PSB ( Penerimaan Siswa Baru)`} url={'/psb'} />
        </div>
    )
}

export default index
