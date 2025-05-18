import React from 'react'

// img
import masjid from '../../assets/fasilitas/masjid.png'
import { Link } from 'react-router-dom'

const CardFasilitas = () => {
    return (
        <div className='w-[90%] h-[15rem] bg-white rounded-xl shadow-xl flex flex-col justify-between items-center overflow-hidden shrink-0'>
            <div className={`w-full h-[57%] flex flex-row justify-center items-center bg-contain overflow-hidden bg-primary-blue relative`}>
                <div className='absolute w-[85%] bottom-0'>
                    <img src={masjid} alt="" className='w-[100%] h-full object-contain' />
                </div>
            </div>
            <div className='w-full h-[40%] flex flex-col justify-start items-start px-4 gap-1'>
                <p className='text-sm font-semibold'>Masjid Al-Amin</p>
                <p className='text-xs font-[300]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                <Link to={'/'} className='text-xs underline cursor-pointer'>Read More</Link>
            </div>
        </div>
    )
}

export default CardFasilitas
