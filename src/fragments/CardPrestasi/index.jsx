import React from 'react'

// img
import kapas from '../../assets/prestasi/kapas.png'
const CardPrestasi = ({ jumlah = 0, tingkat }) => {
    return (
        <div className='w-[40%] h-[22vh] flex flex-col justify-center items-center shrink-0 gap-2 lg:flex-1 lg:h-[35vh]'>
            <div className='w-[100%] h-[22vh] flex justify-center items-center lg:w-[130%] lg:h-full' style={{ backgroundImage: `url(${kapas})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} >
                <p className='text-3xl font-semibold text-primary-blue md:text-5xl lg:text-4xl'>{jumlah}</p>
            </div>
            <p className='text-sm font-semibold text-primary-blue text-center md:text-2xl lg:text-lg'>Prestasi <br />{tingkat}</p>
        </div>
    )
}

export default CardPrestasi
