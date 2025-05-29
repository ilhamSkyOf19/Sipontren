// =================
// Import
// =================
import React, { memo, useState, useEffect } from 'react'
// Component
import IconArab from '../components/IconArab';
import ImgSlider from '../components/ImgSlider';
import ButtonMore from '../components/ButtonMore';
// fragment
import HeaderSection from '../fragments/HeaderSection';
import CardLayanan from '../fragments/CardLayanan';
import CardEkstrakulikuler from '../fragments/CardEkstrakulikuler';
// Img
import thumbnailProfile from '../assets/thumbnails/thumbnail_profile.png'
import frameKonten from '../assets/frame/frame_konten.png'
// Import css files

// Json
import dataEkstrakulikuler from '../jsons/dataEkstrakulikuler.json'
import dataBerita from '../jsons/dataBerita.json'


// fragment
import CardBeritaLarge from '../fragments/CardBerita/CardBeritaLarge';
import CardBeritaSmall from '../fragments/CardBerita/CardBeritaSmall';
import ScrollX from '../layouts/ScrollX';

// Layouts
import LayoutPages from '../layouts/LayoutPages';
import LayoutSectionBg from '../layouts/LayoutSectionBg';
import { Link } from 'react-router-dom';
import useWindowSize from '../hook/UseWindowSize';
import { AnimatePresence, motion } from 'framer-motion';


// hooks
import useIndexFade from '../hook/UseIndexFade';








const Home = () => {
  const widthDevice = useWindowSize().width;

  // ===============
  // Data Berita
  // ===============
  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataBerita);
  }, [])


  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(widthDevice)




  return (
    <LayoutPages>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour width={widthDevice} />
      <SectionFive width={widthDevice} data={data} />
      <SectionMaps width={widthDevice} />
    </LayoutPages>
  )
}


// ===================
// Section One
// ===================

const SectionOne = memo(() => {
  return (
    <div className='flex flex-col justify-start items-center w-screen min-h-[100vh] pt-28 pb-12 bg-primary-blue gap-2 overflow-hidden md:pt-32'>
      <div className='flex flex-col justify-center items-center w-screen gap-3 md:gap-6'>
        <IconArab width='32%' position={'center'} />
        <div className='flex flex-col justify-center items-center w-full gap-2 mb-3'>
          <p className='text-md font-roboto weight-[100] text-white md:text-2xl'>Update Informasi Terkait</p>
          <p className="text-xl text-white font-semibold md:text-3xl">PENERIMAAN SANTRI BARU</p>
          <p className="text-xl text-white font-semibold md:text-3xl">TAHUN AJARAN 2025/2026</p>
        </div>
        <p className='text-lg font-poppins font-[600] text-white bg-primary-yellow py-2 px-5 text-center rounded-sm mb-8 md:text-2xl md:py-4 md:px-10'>Jenjang SMP/SMA</p>
      </div>
      <div className='w-[90%] h-[1px] bg-white'></div>
      <div className='flex flex-col justify-center items-center w-screen'>
        <img src={thumbnailProfile} alt="thumbnail profile" className='w-[25rem] md:w-[32rem]' />
        <Link to={'/formulir'} className='text-xl font-poppins font-semibold bg-slate-100 py-2 px-14 text-center rounded-lg text-primary-blue hover:scale-110 transition ease-in-out duration-200 md:text-2xl md:py-3 md:px-20'>Daftar Sekarang</Link>
      </div>
    </div>
  )
});



// ===================
// Section Two
// ===================


const SectionTwo = memo(() => {
  return (
    <LayoutSectionBg pt={12} pb={12} size={'cover'}>
      <HeaderSection judul={'Layanan Pendidikan'} ket={'Pilihan Pendidikan Berkualitas Pondok Pesantren Modern, Sekolah Menengah Pertama, dan Sekolah Menengah Atas Kami Hadir Untuk Mendukung Masa Depan Cemerlang Anda'} />
      <div className={`
      w-screen flex flex-col justify-center items-center gap-7
      md:flex-row flex-wrap
      `}>
        <CardLayanan textOne={'Pondok Pesantren'} textTwo={'Modern'} textKet={'Pondok Pesantren Muhammadiyah Al-Amin seputih Banyak - Lampung tengah'} />
        <CardLayanan textOne={'Sekolah Menengah'} textTwo={'Pertama'} textKet={'SMP Muhammadiyah Al-Amin seputih Banyak - Lampung tengah'} />
        <CardLayanan textOne={'Sekolah Menengah'} textTwo={'Atas'} textKet={'SMA Muhammadiyah Al-Amin seputih Banyak - Lampung tengah'} />
      </div>
    </LayoutSectionBg>
  )
})


// ===================
// Section Three
// ===================

const SectionThree = memo(() => {
  return (
    <div className='w-screen min-h-[75vh] bg-primary-blue flex flex-col justify-start items-center py-6 overflow-hidden '>
      <p className='text-4xl font-semibold text-white py-5 md:text-[2.5rem]'>Tujuan</p>
      <p className='text-sm font-[300] text-white text-center px-11 mb-12 md:text-lg'>
        Terselenggaranya lembaga pendidikan Muhammadiyah yang berkualitas dalam membentuk kader utama, pemimpin, dan pendidik yang mendukung gerak langkah dan tujuan Muhammadiyah.
      </p>
      <div className='w-screen h-[20rem] flex justify-center items-center md:h-[30rem]'>
        <ImgSlider />
      </div>
    </div>
  )
})


// =================
// Section Four
// =================

const SectionFour = ({ width }) => {

  return (
    <LayoutSectionBg minH={width < 760 ? '70' : '80'} pt={12} pb={12} bg2={true} size={'cover'}>
      <HeaderSection judul={'Kegiatan Santri'} ket={'Wadah Pengembangan Bakat dan Karakter Santri'} />
      <ScrollX>
        {dataEkstrakulikuler.map((item) => (
          <CardEkstrakulikuler key={item.id} logo={item.logo} person={item.person} title={item.title} ket={item.ket} subJudul={item.subJudul} bg={item.bg} iconSize={item.iconSize} id={item.id} />

        ))}
      </ScrollX>
    </LayoutSectionBg>


  )
}

// =================
// Section Five
// =================

const SectionFive = memo(({ width, data }) => {


  // useIndexFade
  const index = useIndexFade({ data, duration: 4000 });

  return (
    <LayoutSectionBg pb={12} minH={'100'} bg2={true} size={width < 760 ? 'contain' : 'cover'}>
      <HeaderSection judul={'Berita Terkini'} ket={'Informasi Terkait Pondok Persantren Muhammadiyah Al-Amin Seputih Banyak'} />
      <div className='w-full px-5'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <CardBeritaLarge img={data[index]?.img} jenis={data[index]?.jenis} judul={data[index]?.judul} deskripsi={data[index]?.deskripsi} />
          </motion.div>
        </AnimatePresence>
      </div>
      <ScrollX slidesToScroll={2}>
        {data.slice(0, 5).map((item, index) => (
          <CardBeritaSmall key={index} img={item.img} jenis={item.jenis} judul={item.judul} deskripsi={item.deskripsi} />
        ))}
      </ScrollX>
      <div className='w-full flex justify-center items-center'>
        <ButtonMore />
      </div>
    </LayoutSectionBg>
  )
})


// =================
// Section Maps
// =================

const SectionMaps = ({ width }) => {
  return (
    <div className='w-full min-h-[40vh] flex justify-center items-center px-5 py-8'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3975.563039920363!2d105.4426229!3d-4.8448278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3f60508043822d%3A0xb1dad378b9958f66!2sPonpes%20Al-Amin!5e0!3m2!1sid!2sid!4v1747380711868!5m2!1sid!2sid"
        width='100%'
        height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 'none', borderRadius: '2rem' }}
      ></iframe>
    </div>
  )
}




export default Home
