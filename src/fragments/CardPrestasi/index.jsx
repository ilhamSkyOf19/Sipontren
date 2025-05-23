import React from 'react'

// img
import kapas from '../../assets/prestasi/kapas.png'
const CardPrestasi = ({ jumlah = 0, tingkat }) => {
    return (
        <div className='w-[40%] h-[22vh] flex flex-col justify-center items-center shrink-0 gap-2'>
            <div className='w-[100%] h-[100%] flex justify-center items-center' style={{ backgroundImage: `url(${kapas})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                <p className='text-3xl font-semibold text-primary-blue'>{jumlah}</p>
            </div>
            <p className='text-sm font-semibold text-primary-blue text-center'>Prestasi <br />{tingkat}</p>
        </div>
    )
}

export default CardPrestasi
