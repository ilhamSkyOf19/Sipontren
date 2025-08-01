import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


// module 
import { AnimatePresence, motion } from 'framer-motion'

// layouts 
import LayoutPages from '../layouts/LayoutPages'
import LayoutSectionBg from '../layouts/LayoutSectionBg'
import HeaderPage from '../fragments/HeaderPage'

// component 
import SubJudulCenter from '../components/SubJudulCenter'

// img
import pamflet from '../assets/pamflet/pamflet-4.jpg'

const Kemahadan = () => {
    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LayoutPages>
            <HeaderPage whiteText1={'Pondok Pesantren'} whiteText2={'Muhammadiyah Al-Amin'} YellowText={'Seputih Banyak - Lampung Tengah'} deskripsi={'Pesantren ini bersiri sebagai salah satu upaya Muhammadiyah untuk mencetak generasi muda yang berakhlak mulia, memiliki wawasan keislaman yang mendalam, serta mampu berkontribusi dalam pembangunan masyarakat.'} />
            <DailySantri />
            <GallerySantri />
        </LayoutPages>
    )
}

// ==================
// Section Daily Santri
// ==================

const DailySantri = () => {
    return (
        <LayoutSectionBg minH={0} pb={12} pt={12} bg2={true}>
            <div className='w-full flex flex-col justify-start items-center px-2 gap-16 md:px-10'>
                <div className='flex justify-center items-center w-full lg:w-[60%]'>
                    <SubJudulCenter title={'Daily Santri Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak - Lampung Tengah'} />
                </div>
                <div className='w-full px-3 lg:w-[45%]'>
                    <img src={pamflet} alt="" loading='lazy' />
                </div>
            </div>
        </LayoutSectionBg>
    )
}


// ==================
// Section Gallery Santri
// ==================

import { dataGallery } from '../data/galleryData'
const GallerySantri = () => {
    // State
    const [indexImg, setIndexImg] = useState(0);
    const [gallery, setGallery] = useState([]);

    // UseEffect
    useEffect(() => {
        setGallery(dataGallery)
    }, [])

    // UseEffect Fade Galerry
    useEffect(() => {
        if (gallery.length === 0) return;
        const interval = setInterval(() => {
            setIndexImg((prevIndex) => (prevIndex + 1) % gallery.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [gallery])

    return (
        <div className='w-full min-h-[60vh] bg-primary-blue flex flex-col justify-start items-center px-6 gap-10 pt-6 pb-14 md:px-10 lg:h-[120vh]'>
            <SubJudulCenter title={'Gallery Santri'} color={'#fff'} />
            <div className='w-full h-[40vh] flex flex-row justify-between items-center gap-2 overflow-hidden lg:h-[90%] lg:w-[85%]'>
                <div className='w-[50%] h-full flex flex-col justify-between items-center gap-2'>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={gallery[(indexImg + 1) % gallery.length]}
                            src={gallery[(indexImg + 1) % gallery.length]}
                            alt=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                width: '100%',
                                height: '50%',
                                objectFit: 'cover',
                            }}
                            transition={{ duration: 1, delay: 0, ease: 'easeInOut' }}
                        />
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={gallery[(indexImg + 1) % gallery.length]}
                            src={gallery[(indexImg + 1) % gallery.length]}
                            alt=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                width: '100%',
                                height: '50%',
                                objectFit: 'cover',
                            }}
                            transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                        />
                    </AnimatePresence>

                </div>
                <div className='w-[50%] h-full'>
                    <AnimatePresence mode='wait'>
                        <motion.img
                            key={gallery[(indexImg + 1) % gallery.length]}
                            src={gallery[(indexImg + 1) % gallery.length]}
                            alt=""
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                        />
                    </AnimatePresence>
                </div>
            </div>
            <p className='text-md font-semibold text-primary-blue w-full text-center py-2 bg-white cursor-pointer rounded-md border-1 border-primary-blue hover:bg-primary-blue hover:text-white hover:border-white md:text-2xl md:py-4 lg:w-[85%] lg:text-xl lg:py-2.5'>
                Selengkapnya
            </p>
        </div>
    )
}


export default Kemahadan
