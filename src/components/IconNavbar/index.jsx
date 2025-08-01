import React from 'react'
import logo from '../../assets/icons/logo.png'

const index = ({ position = 'around' }) => {
    return (
        <div className={`w-[40%] flex flex-row justify-${position} items-center gap-2`}>
            <img className='lg:w-[2.7rem]' src={logo} alt="logo" loading='lazy' />
            <div className='flex flex-col justify-end items-start'>
                <p className='text-[0.6rem] text-white'>Pondok Pesantren Muhammadiyah Al-Amin</p>
                <p className='text-[0.6rem] text-white'>Seputih Banyak - Lampung Tengah</p>
                <p className='text-[0.4rem] text-white italic'>Cerdas, Iman, Ilmu dan Akhlak</p>
            </div>
        </div>
    )
}

export default index
