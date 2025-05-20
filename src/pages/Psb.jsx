import React from 'react'

// layouts 
import LayoutPages from '../layouts/LayoutPages'
import SubJudulLeft from '../components/SubJudulLeft'
import LayoutSectionBg from '../layouts/LayoutSectionBg'
// component 
import IconArab from '../components/IconArab'
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
import { Link } from 'react-router-dom'
const Psb = () => {
    return (
        <LayoutPages>
            <HeaderPage whiteText1={'Penerimaan Santri Baru'} whiteText2={''} YellowText={'Tahun Ajaran 2025/2026'} deskripsi={'Kunjungi website PSB Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak, lengkapi setiap persyaratan, ikuti semua alur pendaftaran dan jadilan bagian dari Pondok Pesantren Muhammadiyah Al-Alim Seputih Banyak.'} />
            <SectionService />
            <SectionPamflet />
            <SectionInfo />
        </LayoutPages>
    )
}




// ================
// Section Service
// ================

const SectionService = () => {
    return (
        <LayoutSectionBg pb={4} pt={4}>
            <div className='w-full min-h-[100vh] flex flex-col justify-start items-start px-6 py-12 gap-7'>
                <div className='w-full flex flex-col justify-start items-start'>
                    <SubJudulLeft title="One Day, One Service" />
                    <div className='w-full flex flex-col justify-start items-start gap-6 pt-12'>
                        <div className='w-full'>
                            <TextLgBlue text={'Melakukan Pendaftaran'} custom={'font-semibold'} />
                            <p className='text-sm'>Calon santri dapat melakukan pendaftaran melalui website pondok pesantren atau dapat langsung datang di kampung kami yang berada di JL. AR. Fakhrudin No. 2. Tanjung Harapan, Sep. Banyak</p>
                        </div>
                        <div className='w-full'>
                            <TextLgBlue text={'Melakukan Tes/Ujian'} custom={'font-semibold'} />
                            <p className='text-sm'>Tes tulis meliputi tes baca tulis Al-Qur'an, hafalan surat-surat pendek, praktek ibadah, pengetahuan umun dan PAI(pendidikan Agama Islan), serta wawancara orang tua dan santri</p>
                        </div>
                        <div className='w-full'>
                            <TextLgBlue text={'Pengumuman Pendaftaran'} custom={'font-semibold'} />
                            <p className='text-sm'>Pengumuman kelulusan calon santri akan segera di umumkan melalui website atau whatsapp grup</p>
                        </div>
                    </div>
                    <AnimationThreeImg bg={'primary-blue'} />
                </div>
                <div className='w-full h-[3rem] bg-primary-blue rounded-lg'></div>
                <div className='w-full flex flex-col justify-start items-start gap-6 pt-4'>
                    <ServiceInfo />
                </div>
            </div>
        </LayoutSectionBg>
    )
}


// ==================
// Section Pamflet
// ==================

const SectionPamflet = () => {
    return (
        <LayoutSectionBg pb={4} pt={4} >
            <div className='w-full py-12 flex flex-col justify-center items-center gap-4 px-4'>
                <div className='flex-1 overflow-hidden'>
                    <img src={pamflet1} alt="" className='w-full h-full object-contain' />
                </div>
                <div className='flex-1 overflow-hidden'>
                    <img src={pamflet2} alt="" className='w-full h-full object-contain' />
                </div>
                <div className='flex-1 overflow-hidden'>
                    <img src={pamflet3} alt="" className='w-full h-full object-contain' />
                </div>
                <div className='flex-1 overflow-hidden'>
                    <img src={pamflet4} alt="" className='w-full h-full object-contain' />
                </div>
            </div>
        </LayoutSectionBg>
    )
}


// =================
// Section Info
// =================


const SectionInfo = memo(() => {
    return (
        <div className='flex justify-center items-center px-4 pb-12 pt-2'>
            <div className='flex flex-col justify-start items-center w-screen min-h-[50vh] pt-8 pb-12 bg-primary-blue gap-2 overflow-hidden rounded-2xl'>
                <div className='flex flex-col justify-center items-center w-screen gap-3'>
                    <IconArab width='40%' position={'center'} />
                    <div className='flex flex-col justify-center items-center w-full gap-2 mb-3'>
                        <p className='text-md font-roboto weight-[100] text-white'>Update Informasi Terkait</p>
                        <p class="text-xl text-white font-semibold">PENERIMAAN SANTRI BARU</p>
                        <p class="text-xl text-white font-semibold">TAHUN AJARAN 2025/2026</p>
                    </div>
                    <p className='text-lg font-poppins font-[600] text-white bg-primary-yellow py-2 px-5 text-center rounded-sm mb-8'>Jenjang SMP/SMA</p>
                </div>
                <div className='w-[90%] h-[1px] bg-white'></div>
                <div className='flex flex-col justify-center items-center w-screen'>
                    <img src={thumbnailProfile} alt="thumbnail profile" className='w-[18rem]' />
                    <Link to={'/'} className='text-sm font-poppins font-semibold bg-slate-100 py-2 px-12 text-center rounded-lg text-primary-blue cursor-pointer hover:scale-110 transition ease-in-out duration-300'>Daftar Sekarang</Link>
                </div>
            </div>
        </div>
    )
});


export default Psb
