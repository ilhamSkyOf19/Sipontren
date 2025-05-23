import React from 'react'

// module
import { motion } from 'framer-motion'
// Layout
import LayoutPages from '../layouts/LayoutPages'
import ScrollX from '../layouts/ScrollX'
// image

import frameKonten from '../assets/frame/frame_konten.png'

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
const Profile = () => {
    return (
        <LayoutPages>
            <SectionThumbnail />
            <SectionSejarah />
            <SectionVisiMisi />
            <SectionProgramUnggulan />
            <SectionFasilitas />
            <SectionPrestasi />
            <SectionProfleUstad />
            <SectionAlumni />
        </LayoutPages>
    )
}


// =================
// Section Thumbnail
// =================

const SectionThumbnail = () => {
    return (
        <HeaderPage whiteText1="Pondok Pesantren" whiteText2="Muhammadiyah Al-Amin" YellowText="Seputih Banyak - Lampung Tengah" deskripsi="Pesantren ini berdiri sebagai salah satu upaya Muhammadiyah untuk mencetak generasi muda yang berakhlak mulia, memiliki wawasan keislaman yang mendalam, serta mampu berkontribusi dalam pembangunan masyarakat." />
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

const SectionVisiMisi = () => {
    return (
        <div className='w-full min-h-[100vh] bg-primary-blue flex flex-col justify-start items-center py-12 px-6 gap-12'>
            <p className='text-3xl font-semibold text-white relative before:absolute before:w-full before:h-[3px] before:bg-primary-yellow before:-bottom-2 before:left-0'>Visi & Misi</p>
            <div className='w-full flex flex-col justify-start item-start gap-12'>
                <div className='w-full flex flex-col justify-start items-end gap-4'>
                    <p className='text-primary-blue py-3 px-14 bg-white text-xl font-semibold rounded-xl'>Visi</p>
                    <p className='text-sm text-white text-right font-[300] relative before:absolute before:w-[20%] before:h-[3px] before:bg-primary-yellow before:-bottom-2 before:right-0'>
                        Menjadi Lembaga Pendidikan Muhammadiyah Yang Unggul Dalam Ilmu Keislaman, Berwawasan Luas, Visioner Dan Santun
                    </p>
                </div>
                <div className='w-full flex flex-col justify-start items-start gap-4'>
                    <p className='text-primary-blue py-3 px-14 bg-white text-xl font-semibold rounded-xl'>Misi</p>
                    <ol className='list-decimal list-outside px-2 space-y-1 relative before:absolute before:w-[20%] before:h-[3px] before:bg-primary-yellow before:-bottom-2 before:left-0 text-white text-sm font-[300]'>
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
    )
}


// =================
// Section Program Unggulan
// =================

const SectionProgramUnggulan = () => {
    return (
        <div className='w-full min-h-[40vh] bg-white flex flex-col justify-start items-start py-12 px-6 gap-10 ' style={{ backgroundImage: `url(${frameKonten})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <SubJudulLeft title={'Program Unggulan'} />
            <p className='text-sm text-primary-blue font-[300]'>
                Ada bebrapa program unggulan di Pontren Mu seperti Tahfidz Al-Quran, Bahasa Inggris, Bahasa Arab, Desain Grafis, Movie Maker, dan Bidang Pelajaran Pilihan. Namun yang paling mendominasi ialah Tahfidz Al-Quran. Proses pembelajaran Tahfidz Al-Quran ada beberapa cara salah satunya kami membuka kelas khusus untuk Tahfidz, sehingga santri-santri yang memilki keinginan lebih untuk menambah haflan bisa mengikuti kelas khusus Tahfidz Quran.
            </p>
        </div>
    )
}


// =================
// Section Fasilitas
// =================

const SectionFasilitas = () => {
    return (
        <div className='w-full min-h-[50vh] bg-white flex flex-col justify-start items-start pt-2 pb-8 gap-10' style={{ backgroundImage: `url(${frameKonten})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <SubJudulLeft title="Fasilitas" px={6} />
            <ScrollX>
                <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />
                <CardFasilitas img={'masjid.png'} nama={'Masjid'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium.'} />

            </ScrollX>
        </div>
    )
}


// ================
// Section Prestasi
// ================

const SectionPrestasi = () => {
    return (
        <div className='w-full min-h-[40vh] bg-transparent flex flex-col justify-start items-center pb-8 px-6 gap-10 '>
            <SubJudulCenter title="Prestasi Santri" />
            <div className='w-full flex flex-row justify-between items-center gap-6 flex-wrap'>
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

const SectionProfleUstad = () => {
    return (
        <div className='w-full min-h-[40vh] bg-white flex flex-col justify-start items-center py-12 gap-14'>
            <SubJudulCenter title="Profile Asatid/Ustadzah" />
            <ScrollX>
                <CardProfileUstad img={'sample.jpg'} nama={'Ust. Inan Aditya febriana'} jabatan={'Direktur'} />
                <CardProfileUstad img={'sample.jpg'} nama={'Ust. Inan Aditya febriana'} jabatan={'Direktur'} />
                <CardProfileUstad img={'sample.jpg'} nama={'Ust. Inan Aditya febriana'} jabatan={'Direktur'} />
                <CardProfileUstad img={'sample.jpg'} nama={'Ust. Inan Aditya febriana'} jabatan={'Direktur'} />
            </ScrollX>
        </div>
    )
}




// ===========
// Section Alumni
// ===========


const SectionAlumni = () => {
    return (
        <div className='w-full min-h-[40vh] bg-white flex flex-col justify-start items-center py-12 gap-14'>
            <SubJudulCenter title="Apa Kata Lulusan" />
            <ScrollX>
                <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
                <CardAlumni img={'sample.jpg'} nama={'Khoirul Farid'} angkatan={'1'} deskripsi={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium lorem ipsum dolor sit amet.'} />
            </ScrollX>
        </div>
    )
}




export default Profile
