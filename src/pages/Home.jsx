// =================
// Import
// =================
import React, { memo } from 'react'
import LayoutPages from '../layouts/LayoutPages';
import useEmblaCarousel from 'embla-carousel-react';

// Component
import IconArab from '../components/IconArab';
import TextMedium from '../components/text/TextMedium';
import CardLayanan from '../fragments/CardLayanan';
import ImgSlider from '../components/ImgSlider';
import ButtonMore from '../components/ButtonMore';
// fragment
import HeaderSection from '../fragments/HeaderSection';
import CardEkstrakulikuler from '../fragments/CardEkstrakulikuler';
// Img
import thumbnailProfile from '../assets/thumbnails/thumbnail_profile.png'
import frameKonten from '../assets/frame/frame_konten.png'
// Import css files

// Json
import dataEkstrakulikuler from '../jsons/dataEkstrakulikuler.json'
import CardBeritaLarge from '../fragments/CardBerita/CardBeritaLarge';
import CardBeritaSmall from '../fragments/CardBerita/CardBeritaSmall';
import ScrollX from '../layouts/ScrollX';






const Home = () => {








  return (
    <LayoutPages>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionMaps />
    </LayoutPages>
  )
}


// ===================
// Section One
// ===================

const SectionOne = memo(() => {
  return (
    <div className='flex flex-col justify-start items-center w-screen min-h-[100vh] pt-32 pb-12 bg-primary-blue gap-2 overflow-hidden'>
      <div className='flex flex-col justify-center items-center w-screen gap-3'>
        <IconArab width='40%' position={'center'} />
        <div className='flex flex-col justify-center items-center w-full gap-2 mb-3'>
          <p className='text-md font-roboto weight-[100] text-white'>Update Informasi Terkait</p>
          <TextMedium text={'PENERIMAAN SANTRI BARU'} />
          <TextMedium text={'TAHUN AJARAN 2025/2026'} />
        </div>
        <p className='text-lg font-poppins font-[600] text-white bg-primary-yellow py-2 px-5 text-center rounded-sm mb-8'>Jenjang SMP/SMA</p>
      </div>
      <div className='w-[90%] h-[1px] bg-white'></div>
      <div className='flex flex-col justify-center items-center w-screen'>
        <img src={thumbnailProfile} alt="thumbnail profile" className='w-[25rem]' />
        <p className='text-xl font-poppins font-semibold bg-slate-100 py-2 px-14 text-center rounded-lg text-primary-blue'>Daftar Sekarang</p>
      </div>
    </div>
  )
});



// ===================
// Section Two
// ===================


const SectionTwo = memo(() => {
  return (
    <div className='min-h-[100vh] flex flex-col justify-start items-center py-16 overflow-hidden' style={{ backgroundImage: `url(${frameKonten})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>
      <HeaderSection judul={'Layanan Pendidikan'} ket={'Pilihan Pendidikan Berkualitas Pondok Pesantren Modern, Sekolah Menengah Pertama, dan Sekolah Menengah Atas Kami Hadir Untuk Mendukung Masa Depan Cemerlang Anda'} />

      <div className={`
      w-screen flex flex-col justify-center items-center gap-7
      md:flex-row flex-wrap
      `}>
        <CardLayanan textOne={'Pondok Pesantren'} textTwo={'Modern'} textKet={'Pondok Pesantren Muhammadiyah Al-Amin seputih Banyak - Lampung tengah'} />
        <CardLayanan textOne={'Sekolah Menengah'} textTwo={'Pertama'} textKet={'SMP Muhammadiyah Al-Amin seputih Banyak - Lampung tengah'} />
        <CardLayanan textOne={'Sekolah Menengah'} textTwo={'Atas'} textKet={'SMA Muhammadiyah Al-Amin seputih Banyak - Lampung tengah'} />
      </div>
    </div>
  )
})


// ===================
// Section Three
// ===================

const SectionThree = memo(() => {
  return (
    <div className='w-screen min-h-[75vh] bg-primary-blue flex flex-col justify-start items-center py-6 overflow-hidden '>
      <p className='text-4xl font-semibold text-white py-5'>Tujuan</p>
      <p className='text-sm font-[300] text-white text-center px-11 mb-12'>
        Terselenggaranya lembaga pendidikan Muhammadiyah yang berkualitas dalam membentuk kader utama, pemimpin, dan pendidik yang mendukung gerak langkah dan tujuan Muhammadiyah.
      </p>
      <div className='w-screen h-[20rem] flex justify-center items-center'>
        <ImgSlider />
      </div>
    </div>
  )
})


// =================
// Section Four
// =================

const SectionFour = () => {

  return (
    <div className='w-screen min-h-[70vh] pt-12 pb-2 flex flex-col justify-start items-center overflow-hidden' style={{ backgroundImage: `url(${frameKonten})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>
      <HeaderSection judul={'Kegiatan Santri'} ket={'Wadah Pengembangan Bakat dan Karakter Santri'} />
      <ScrollX>
        {dataEkstrakulikuler.map((item) => (
          <CardEkstrakulikuler key={item.id} logo={item.logo} person={item.person} title={item.title} ket={item.ket} subJudul={item.subJudul} bg={item.bg} iconSize={item.iconSize} id={item.id} />

        ))}
      </ScrollX>


    </div>
  )
}

// =================
// Section Five
// =================

const SectionFive = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' });

  return (
    <div className='w-screen min-h-[80vh] py-12 flex flex-col justify-start items-center overflow-hidden' style={{ backgroundImage: `url(${frameKonten})`, backgroundPosition: 'top', backgroundSize: 'contain' }}>
      <HeaderSection judul={'Berita Terkini'} ket={'Informasi Terkait Pondok Persantren Muhammadiyah Al-Amin Seputih Banyak'} />
      <div className='w-full px-8'>
        <CardBeritaLarge />
      </div>
      <ScrollX>
        <CardBeritaSmall />
        <CardBeritaSmall />
        <CardBeritaSmall />
      </ScrollX>
      <div className='w-full flex justify-center items-center'>
        <ButtonMore />
      </div>
    </div>
  )
}


// =================
// Section Maps
// =================

const SectionMaps = () => {
  return (
    <div className='w-full min-h-[40vh] flex justify-center items-center px-3 py-8' style={{ backgroundImage: `url(${frameKonten})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3975.563039920363!2d105.4426229!3d-4.8448278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3f60508043822d%3A0xb1dad378b9958f66!2sPonpes%20Al-Amin!5e0!3m2!1sid!2sid!4v1747380711868!5m2!1sid!2sid"
        width="400"
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
