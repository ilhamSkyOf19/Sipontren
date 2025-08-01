import React, { useEffect, useRef, useState, useCallback } from 'react'
import useWindowSize from '../../hook/UseWindowSize';
import NavbarAdmin from '../../fragments/NavbarAdmin';

import NavbarAdminComponent from '../../fragments/NavbarAdminComponent';
const LayoutDataPages = ({ children, header }) => {
    // ====================
    // State
    // ====================
    const [showNavbar, setShowNavbar] = useState(true)
    const [admin, setAdmin] = useState(true)
    const [showNavbarAdmin, setShowNavbarAdmin] = useState(false)



    // ====================
    // Use Reff
    // ====================
    const lastScrollY = useRef(0)
    const elementTop = useRef(null)
    const navbarAdminRef = useRef(null);




    // ====================
    // Use Effect Handle Scroll
    // ====================

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY.current) {
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
                    <NavbarAdmin ref={elementTop} showNavbar={showNavbar} widthDevice={useWindowSize().width} handleNavbarAdmin={handleNavbarAdmin} header={header} />
                ) : (
                    null
                )
            }

            {/* Navbar admin */}
            <NavbarAdminComponent showNavbarAdmin={showNavbarAdmin} handleNavbarAdmin={handleNavbarAdmin} navbarAdminRef={navbarAdminRef} />
            {children}
        </div>
    )
}




export default LayoutDataPages;
