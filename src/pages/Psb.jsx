import React from 'react'

// layouts 
import LayoutPages from '../layouts/LayoutPages'

import LayoutSectionBg from '../layouts/LayoutSectionBg'
// component 
import IconArab from '../components/IconArab'
import SubJudulCenter from '../components/SubJudulCenter'
import SubJudulLeft from '../components/SubJudulLeft'
// fragments
import HeaderPage from '../fragments/HeaderPage'
import AnimationThreeImg from '../fragments/AnimationThreeImg'
import ServiceInfo from '../fragments/ServiceInfo'

// Text
import TextLgBlue from '../components/text/TextLgBlue'

// img 
import pamflet1 from '../assets/pamflet/pamflet-1.jpg'
import pamflet2 from '../assets/pamflet/pamflet-2.jpg'
import pamflet3 from '../assets/pamflet/pamflet-3.jpg'
import pamflet4 from '../assets/pamflet/pamflet-4.jpg'
import thumbnailProfile from '../assets/thumbnails/thumbnail_profile.png'
import { memo } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { useEffect } from 'react'
import useWindowSize from '../hook/UseWindowSize'
const Psb = () => {
    // loader pamflet 
    const pamflet = useLoaderData();


    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const widthDevice = useWindowSize().width;
    return (
        <LayoutPages>
            <HeaderPage whiteText1={'Penerimaan Santri Baru'} whiteText2={''} YellowText={'Tahun Ajaran 2025/2026'} deskripsi={'Kunjungi website PSB Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak, lengkapi setiap persyaratan, ikuti semua alur pendaftaran dan jadilan bagian dari Pondok Pesantren Muhammadiyah Al-Alim Seputih Banyak.'} />
            <LayoutSectionBg pt={12} size={'cover'}>
                <SectionService />
                <SectionPamflet pamflet={pamflet?.data} />
                <SectionInfo width={widthDevice} />
            </LayoutSectionBg>
        </LayoutPages>
    )
}




// ================
// Section Service
// ================

const SectionService = () => {
    return (
        <div className='w-full flex flex-col justify-start items-center pt-4 pb-4 overflow-hidden'>
            <div className='w-full min-h-[100vh] flex flex-col justify-start items-start px-6 py-12 gap-7 lg:pb-12 lg:pt-0 lg:px-12'>
                <div className='w-full flex flex-col justify-start items-start'>
                    <div className='w-full flex-row justify-start items-center lg:hidden'>
                        <SubJudulLeft title="One Day, One Service" />
                    </div>
                    <div className='w-full flex flex-col justify-start items-center mb-16 lg:flex-row lg:justify-between lg:items-end'>
                        <div className='w-full flex flex-col justify-start items-start gap-6 pt-12 lg:order-2 lg:w-[80%] lg:justify-end lg:mb-7'>
                            <div className='w-full flex-row justify-start items-center hidden md:hidden lg:flex lg:mb-12'>
                                <SubJudulLeft title="One Day, One Service" customSize={'text-3xl'} />
                            </div>
                            <div className='w-full'>
                                <TextLgBlue text={'Melakukan Pendaftaran'} custom={'font-semibold'} />
                                <p className='text-sm md:text-lg lg:text-sm'>Calon santri dapat melakukan pendaftaran melalui website pondok pesantren atau dapat langsung datang di kampung kami yang berada di JL. AR. Fakhrudin No. 2. Tanjung Harapan, Sep. Banyak</p>
                            </div>
                            <div className='w-full'>
                                <TextLgBlue text={'Melakukan Tes/Ujian'} custom={'font-semibold'} />
                                <p className='text-sm md:text-lg lg:text-sm'>Tes tulis meliputi tes baca tulis Al-Qur'an, hafalan surat-surat pendek, praktek ibadah, pengetahuan umun dan PAI(pendidikan Agama Islan), serta wawancara orang tua dan santri</p>
                            </div>
                            <div className='w-full'>
                                <TextLgBlue text={'Pengumuman Pendaftaran'} custom={'font-semibold'} />
                                <p className='text-sm md:text-lg lg:text-sm'>Pengumuman kelulusan calon santri akan segera di umumkan melalui website atau whatsapp grup</p>
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-start items-center lg:order-1'>
                            <AnimationThreeImg bg={'primary-blue'} pages={'psb'} />
                        </div>
                    </div>
                    <div className='w-full h-[3rem] bg-primary-blue rounded-lg md:h-[4rem]'></div>
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-6 pt-4'>
                    <ServiceInfo />
                </div>
            </div>
        </div>
    )
}


// ==================
// Section Pamflet
// ==================

const SectionPamflet = ({ pamflet }) => {

    console.log(pamflet)


    return (
        <div className='w-full flex flex-col justify-start items-center pt-4 pb-4 overflow-hidden'>
            <div className='w-full py-12 flex flex-col justify-center items-center gap-4 px-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:w-[70%]'>
                {
                    pamflet ? pamflet.map((item, index) => (

                        <div key={index} className='w-full h-[45vh]  overflow-hidden'>
                            <img src={`${import.meta.env.VITE_API_BASE_IMG_URL}/pamflet/${item.img}`} alt="pamflet" className='w-full h-full object-contain rounded-xl' loading='lazy' />
                        </div>
                    )) : null
                }
            </div>
        </div>
    )
}


// =================
// Section Info
// =================


const SectionInfo = memo(({ width }) => {
    return (
        <div className='flex flex-col justify-start items-center w-[98%] min-h-[90vh] pt-28 pb-12 bg-primary-blue gap-2 overflow-hidden md:pt-32 lg:flex-row lg:pt-12 lg:pb-0 lg:items-end  lg:h-[90vh] mb-4 rounded-xl'>
            <div className='flex-1 flex flex-col justify-center items-center w-screen gap-3 md:gap-6 lg:items-start lg:pl-8 lg:gap-2 lg:min-h-[100vh]'>
                <IconArab width={width < 700 ? '25%' : width > 1024 ? '24%' : '20%'} position={width > 1024 ? 'start' : 'center'} />
                <div className='flex flex-col justify-center items-center w-full gap-2 mb-3 lg:items-start lg:mb-1 lg:mt-2 lg:gap-0'>
                    <p className='text-md font-roboto weight-[100] text-white md:text-2xl lg:text-sm'>Update Informasi Terkait</p>
                    <p className="text-xl text-white font-semibold md:text-3xl lg:text-[2.8rem]">PENERIMAAN SANTRI BARU</p>
                    <p className="text-xl text-white font-semibold md:text-3xl lg:text-[2.8rem]">TAHUN AJARAN 2025/2026</p>
                </div>
                <p className='text-lg font-poppins font-[600] text-white bg-primary-yellow py-2 px-5 text-center rounded-sm mb-8 md:text-2xl md:py-4 md:px-10 lg:text-xl lg:py-2 lg:px-14 lg:mb-6'>Jenjang SMP/SMA</p>
                {width > 1024 &&
                    <div className='flex flex-row justify-between items-center gap-1 border border-white rounded-lg'>
                        <Link to={'/formulir'} className='text-xs rounded-lg border-white border-r bg-white text-bg-primary-blue py-2.5 px-9 cursor-pointer hover:bg-primary-blue hover:text-white transition-all ease-in-out duration-300 font-semibold text-primary-blue'>Daftar Sekarang</Link>
                        <p className='text-xs py-2.5 px-7 text-white font-semibold'>psb.pontrenmualamin</p>
                    </div>
                }
            </div>
            <div className='w-[90%] h-[1px] bg-white lg:hidden'></div>
            <div className='flex-1 flex flex-col justify-center items-center w-screen lg:justify-end lg:items-start'>
                <img src={thumbnailProfile} alt="thumbnail profile" className='w-[25rem] md:w-[32rem] lg:w-[35rem]' loading='lazy' />

                <Link to={'/formulir'} className='text-xl font-poppins font-semibold bg-slate-100 py-2 px-14 text-center rounded-lg text-primary-blue hover:scale-110 transition ease-in-out duration-200 md:text-2xl md:py-3 md:px-20 lg:hidden'>Daftar Sekarang</Link>
            </div>
        </div>
    )
});


export default Psb
