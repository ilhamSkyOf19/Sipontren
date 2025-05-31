import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


import { motion } from 'framer-motion'
import thumbnailProfile from '../assets/thumbnails/thumbnail_profile.png'

// Layout
import LayoutPages from '../layouts/LayoutPages'
import ScrollX from '../layouts/ScrollX'
import ScrollXDekstop from '../layouts/ScrollXDesktop'
import LayoutSectionBg from '../layouts/LayoutSectionBg'
// image


// component
import SubJudulLeft from '../components/SubJudulLeft'
import SubJudulCenter from '../components/SubJudulCenter'

// fragments
import CardPrestasi from '../fragments/CardPrestasi'
import CardFasilitas from '../fragments/CardFasilitas'
import CardProfileUstad from '../fragments/CardProfileUstad'
import CardAlumni from '../fragments/CardAlumni'
import HeaderPage from '../fragments/HeaderPage'
import AnimationThreeImg from '../fragments/AnimationThreeImg'

// json 
import dataUstad from '../jsons/dataUstad.json'
import useWindowSize from '../hook/UseWindowSize'
import ScrollXDesktop from '../layouts/ScrollXDesktop'

const Profile = () => {

    // Data Ustad
    const [dataUstads, setDataUstads] = useState([])

    useEffect(() => {
        setDataUstads(dataUstad);
    }, [])

    // Window Size
    const widthDevice = useWindowSize().width



    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LayoutPages>
            <LayoutSectionBg minH={100} pt={0} size={'contain'}>
                <HeaderPage whiteText1={`Pondok Pesantren`} whiteText2="Muhammadiyah Al-Amin" YellowText="Seputih Banyak - Lampung Tengah" deskripsi="Pesantren ini berdiri sebagai salah satu upaya Muhammadiyah untuk mencetak generasi muda yang berakhlak mulia, memiliki wawasan keislaman yang mendalam, serta mampu berkontribusi dalam pembangunan masyarakat." />
                <SectionSejarah />
                <SectionVisiMisi widthDevice={widthDevice} />
                <SectionProgramUnggulan />
                <SectionFasilitas widthDevice={widthDevice} />
                <SectionPrestasi />
                <SectionProfleUstad data={dataUstads} widthDevice={widthDevice} />
                <SectionAlumni widthDevice={widthDevice} />
            </LayoutSectionBg>
        </LayoutPages>
    )
}


// =================
// Section Thumbnail
// =================

const SectionThumbnail = () => {
    return (
        <HeaderPage whiteText1={`Pondok Pesantren`} whiteText2="Muhammadiyah Al-Amin" YellowText="Seputih Banyak - Lampung Tengah" deskripsi="Pesantren ini berdiri sebagai salah satu upaya Muhammadiyah untuk mencetak generasi muda yang berakhlak mulia, memiliki wawasan keislaman yang mendalam, serta mampu berkontribusi dalam pembangunan masyarakat." />
    )
}


// =================
// Section Sejarah
// =================

const SectionSejarah = () => {
    return (
        <div className='w-full h-[40vh]'>

        </div>
    )
}
// =================
// Section Visi Misi
// =================

const SectionVisiMisi = ({ widthDevice }) => {
    return (
        <div className='w-full min-h-[100vh] bg-primary-blue flex flex-col justify-start items-center py-12 px-6 gap-12 lg:px-10 lg:pt-8 lg:pb-20 lg:justify-between'>
            <p className='text-3xl font-semibold text-white relative before:absolute before:w-full before:h-[3px] before:bg-primary-yellow before:-bottom-2 before:left-0 md:text-4xl lg:hidden'>Visi & Misi</p>
            <div className='w-full flex flex-col justify-center items-center gap-12 lg:flex-row-reverse lg:gap-20'>
                <div className='w-full flex flex-col justify-start item-start gap-12 lg:w-[50%] lg:gap-6'>
                    {widthDevice > 1024 && (
                        <p className='text-lg font-semibold text-white relative before:absolute before:w-[20%] before:h-[3px] before:bg-primary-yellow before:-bottom-2 mb-4'>Visi & Misi</p>
                    )}
                    <div className='w-full flex flex-col justify-start items-end gap-4 lg:items-start'>
                        <p className='text-primary-blue py-2 px-14 bg-white text-xl font-semibold rounded-xl md:text-2xl lg:text-sm lg:px-8 lg:py-1 lg:rounded-lg'>Visi</p>
                        <p className='text-sm text-white text-right font-[300] relative before:absolute before:w-[20%] before:h-[3px] before:bg-primary-yellow before:-bottom-2 before:right-0 md:text-lg lg:text-left lg:before:hidden lg:text-sm'>
                            Menjadi Lembaga Pendidikan Muhammadiyah Yang Unggul Dalam Ilmu Keislaman, Berwawasan Luas, Visioner Dan Santun
                        </p>
                    </div>
                    <div className='w-full flex flex-col justify-start items-start gap-4'>
                        <p className='text-primary-blue py-2 px-14 bg-white text-xl font-semibold rounded-xl md:text-2xl lg:text-sm lg:py-1 lg:px-8 lg:rounded-lg'>Misi</p>
                        <ol className='list-decimal list-outside px-5 space-y-3 relative before:absolute before:w-[20%] before:h-[3px] before:bg-primary-yellow before:-bottom-2 before:left-0 text-white text-sm font-[300] md:text-xl lg:text-sm lg:before:hidden lg:px-3'>
                            <li>Menyelenggarakan pendidikan pesantren integrall dengan memadukan kurikulum pesantren dan kurikulum nasional.</li>
                            <li>Menyelenggarakan pendidikan yang berbasis Qur’an dan Hadist yang sesuai paham Muhammadiyah.</li>
                            <li>Menanamkan nilai-nilai keimanan dan keislaman untuk menyiapkan dan mencetak kader muhammadiyah yang cerdas Iman, Ilmu dan Akhlak.</li>
                            <li>Mengembangkan pendidikan Bahasa Arab dan Inggris sebagai alat komunikasi untuk mendalami Agama, Ilmu pengetahuan dan Teknologi.</li>
                            <li>Membentuk karakter dan mengembangkan minat bakat santri dalam berbagai kegiatan keorganisasian dan ekstrakulikuler.</li>
                            <li>Menjadi Lembaga Pendidikan Muhammadiyah Yang Unggul Dalam Ilmu Keislaman, Berwawasan Luas, Visioner Dan Santun</li>
                            <li>Menyelengarakan pendidikan yang kreatif, komunikatif, Humanistik dan Menyenangkan.</li>
                        </ol>
                    </div>
                </div>
                <AnimationThreeImg bg={'primary-yellow'} />
            </div>
        </div>
    )
}


// =================
// Section Program Unggulan
// =================

const SectionProgramUnggulan = () => {
    return (
        <div className='w-full min-h-[40vh] bg-transparent flex flex-col justify-start items-start py-12 px-6 gap-10 lg:py-0 lg:h-[70vh]'>
            <div className='w-full bg-transparent flex flex-row justify-start items-start lg:justify-between lg:items-center lg:h-full'>
                <div className='w-full flex flex-col justify-start items-start gap-8 lg:w-[50%]'>
                    <SubJudulLeft title={'Program Unggulan'} />
                    <p className='text-sm text-primary-blue font-[300] md:text-lg leading-6 md:leading-8 '>
                        Ada bebrapa program unggulan di Pontren Mu seperti Tahfidz Al-Quran, Bahasa Inggris, Bahasa Arab, Desain Grafis, Movie Maker, dan Bidang Pelajaran Pilihan. Namun yang paling mendominasi ialah Tahfidz Al-Quran. Proses pembelajaran Tahfidz Al-Quran ada beberapa cara salah satunya kami membuka kelas khusus untuk Tahfidz, sehingga santri-santri yang memilki keinginan lebih untuk menambah haflan bisa mengikuti kelas khusus Tahfidz Quran.
                    </p>
                </div>
                <div className='w-full h-[30vh] hidden flex-col justify-end items-center rounded-4xl overflow-hidden md:h-[65vh] lg:h-full lg:w-[36%] lg:flex '>
                    <div className={`w-[90%] h-[13rem] flex flex-col justify-center items-center  rounded-3xl relative bg-primary-yellow md:w-[80%] md:h-[28rem] lg:h-[65%]`}>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                            className='w-[120%] h-[100%]'
                        >
                            <img src={thumbnailProfile} alt="logo sipontren" className='w-[100%] absolute bottom-0' />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// =================
// Section Fasilitas
// =================

const SectionFasilitas = ({ widthDevice }) => {
    return (
        <div className='w-full min-h-[50vh] flex flex-col justify-start items-start pt-2 pb-8 gap-10 bg-transparent lg:py-20 lg:gap-20 lg:items-center'>
            {widthDevice < 1024 && <SubJudulLeft title={'Fasilitas'} px={7} />}
            {widthDevice > 1024 && <SubJudulCenter title={'Fasilitas'} />}
            {widthDevice < 1024 ? (
                <ScrollX gap={6}>
                    <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                    <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                    <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                    <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                </ScrollX>
            ) : (
                <ScrollXDekstop>
                    <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                    <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                    <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                    <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                </ScrollXDekstop>
            )}
        </div>
    )
}


// ================
// Section Prestasi
// ================

const SectionPrestasi = () => {
    return (
        <div className='w-full min-h-[40vh] bg-transparent flex flex-col justify-start items-center pb-8 px-6 gap-10 md:gap-22'>
            <SubJudulCenter title="Prestasi Santri" />
            <div className='w-full flex flex-row justify-between items-center gap-6 flex-wrap md:px-12 md:gap-12 lg:gap-16 lg:px-20'>
                <CardPrestasi tingkat={'Internasional'} jumlah={2} />
                <CardPrestasi tingkat={'Nasional'} jumlah={5} />
                <CardPrestasi tingkat={'Provinsi'} jumlah={12} />
                <CardPrestasi tingkat={'Kabupaten'} jumlah={23} />
            </div>
        </div>
    )
}



// ===========
// Section Profile Ustad
// ===========

const SectionProfleUstad = ({ data, widthDevice }) => {

    return (
        <div className='w-full min-h-[40vh] bg-transparent flex flex-col justify-start items-center py-12 gap-14'>
            <SubJudulCenter title="Profile Asatid/Ustadzah" />
            {widthDevice < 1024 ? (
                <ScrollX slidesToScroll={widthDevice < 700 ? 1 : 2} gap={widthDevice < 700 ? 4 : 4}>
                    {data.map((item) => (
                        <CardProfileUstad key={item.id} img={item.img} nama={item.nama} jabatan={item.jabatan} />
                    ))}
                </ScrollX>
            ) : (
                <ScrollXDesktop>
                    {data.map((item) => (
                        <CardProfileUstad key={item.id} img={item.img} nama={item.nama} jabatan={item.jabatan} />
                    ))}
                </ScrollXDesktop>
            )}

        </div>
    )
}




// ===========
// Section Alumni
// ===========


const SectionAlumni = ({ widthDevice }) => {
    return (
        <div className='w-full min-h-[40vh] bg-transparent flex flex-col justify-start items-center py-12 gap-14'>
            <SubJudulCenter title="Apa Kata Lulusan" />
            {widthDevice < 1024 ? (
                <ScrollX>
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium'} />
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                </ScrollX>
            ) : (
                <ScrollXDekstop>
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium'} />
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                    <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                </ScrollXDekstop>
            )}

        </div>
    )
}




export default Profile
