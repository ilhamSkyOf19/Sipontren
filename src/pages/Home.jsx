// =================
// Import
// =================
import React, { memo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import useWindowSize from '../hook/UseWindowSize';
import { AnimatePresence, motion } from 'framer-motion';
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

// Layouts
import LayoutPages from '../layouts/LayoutPages';
import LayoutSectionBg from '../layouts/LayoutSectionBg';
import ScrollX from '../layouts/ScrollX';

import ScrollXDesktop from '../layouts/ScrollXDesktop';


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
      <SectionOne width={widthDevice} />
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

const SectionOne = memo(({ width }) => {
  return (
    <div className='flex flex-col justify-start items-center w-screen min-h-[100vh] pt-28 pb-12 bg-primary-blue gap-2 overflow-hidden md:pt-32 lg:flex-row lg:pt-12 lg:pb-0 lg:items-end'>
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
        <img src={thumbnailProfile} alt="thumbnail profile" className='w-[25rem] md:w-[32rem] lg:w-[35rem]' />

        <Link to={'/formulir'} className='text-xl font-poppins font-semibold bg-slate-100 py-2 px-14 text-center rounded-lg text-primary-blue hover:scale-110 transition ease-in-out duration-200 md:text-2xl md:py-3 md:px-20 lg:hidden'>Daftar Sekarang</Link>
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
      md:flex-row flex-wrap lg:px-16
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
    <div className='w-screen min-h-[75vh] bg-primary-blue flex flex-col justify-start items-center py-6 overflow-hidden lg:flex-row lg:pr-12 lg:min-h-[30vh]'>
      <div className='flex flex-col justify-center items-center lg:w-[60%] lg:justify-start lg:items-start lg:px-11'>
        <p className='text-4xl font-semibold text-white py-5 md:text-[2.5rem] lg:text-3xl'>Tujuan</p>
        <p className='text-sm font-[300] text-white text-center px-11 mb-12 md:text-lg lg:text-left lg:px-0 lg:pr-36'>
          Terselenggaranya lembaga pendidikan Muhammadiyah yang berkualitas dalam membentuk kader utama, pemimpin, dan pendidik yang mendukung gerak langkah dan tujuan Muhammadiyah.
        </p>
      </div>
      <div className='w-screen h-[20rem] flex justify-center items-center md:h-[30rem] lg:w-[40%] lg:h-[18rem]'>
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
    <LayoutSectionBg minH={width > 0 && width <= 760 ? 50 : width > 760 && width < 1024 ? 80 : width > 1024 ? 80 : 80} pt={12} pb={width > 0 && width <= 760 ? 2 : width > 760 && width < 1024 ? 12 : width > 1024 ? 12 : 12} noBg={true}>
      <HeaderSection judul={'Kegiatan Santri'} ket={'Wadah Pengembangan Bakat dan Karakter Santri'} mb={width > 0 && width <= 760 ? 5 : width > 760 && width < 1024 ? 1 : width > 1024 ? 1 : 1} />
      {width > 1024 ? (
        <ScrollXDesktop>
          {dataEkstrakulikuler.map((item) => (
            <CardEkstrakulikuler key={item.id} logo={item.logo} person={item.person} title={item.title} ket={item.ket} subJudul={item.subJudul} bg={item.bg} iconSize={item.iconSize} id={item.id} />
          ))}
        </ScrollXDesktop>
      ) : (
        <ScrollX>
          {dataEkstrakulikuler.map((item) => (
            <CardEkstrakulikuler key={item.id} logo={item.logo} person={item.person} title={item.title} ket={item.ket} subJudul={item.subJudul} bg={item.bg} iconSize={item.iconSize} id={item.id} />
          ))}
        </ScrollX>
      )
      }

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
    <LayoutSectionBg pb={12} minH={'200'} pt={10} noBg={true} >
      <HeaderSection judul={'Berita Terkini'} ket={'Informasi Terkait Pondok Persantren Muhammadiyah Al-Amin Seputih Banyak'} />
      <div className='w-full px-5 lg:w-[80%]'>
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
      {width > 700 && (<div className='w-[90%] h-[1px] bg-secondary-blue mb-12 opacity-55'></div>)}
      {width > 0 && width < 1024 ? (
        <ScrollX slidesToScroll={2}>
          {data.slice(0, 5).map((item, index) => (
            <CardBeritaSmall key={index} img={item.img} jenis={item.jenis} judul={item.judul} deskripsi={item.deskripsi} />
          ))}
        </ScrollX>
      ) : (
        <ScrollXDesktop>
          {data.slice(0, 5).map((item, index) => (
            <CardBeritaSmall key={index} img={item.img} jenis={item.jenis} judul={item.judul} deskripsi={item.deskripsi} />
          ))}
        </ScrollXDesktop>
      )}
      <div className='w-full flex justify-center items-center lg:pt-12'>
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
    <div className='w-full min-h-[40vh] flex justify-center items-center px-5 py-8 lg:px-12'>
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
