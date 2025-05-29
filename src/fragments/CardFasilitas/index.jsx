import React from 'react'

// img
import { Link } from 'react-router-dom'

const CardFasilitas = ({ img, nama, deskripsi }) => {
    return (
        <div className='w-[90%] h-[15rem] bg-white rounded-xl shadow-xl flex flex-col justify-between items-center overflow-hidden shrink-0 md:w-[70%] md:h-[25rem]'>
            <div className={`w-full h-[57%] flex flex-row justify-center items-center bg-contain overflow-hidden bg-primary-blue relative`}>
                <div className='absolute w-[85%] bottom-0'>
                    <img src={`/fasilitas/${img}`} alt="bangunan" className='w-[100%] h-full object-contain' />
                </div>
            </div>
            <div className='w-full h-[40%] flex flex-col justify-start items-start px-4 gap-1 md:pt-3'>
                <p className='text-sm font-semibold md:text-xl'>{nama}</p>
                <p className='text-xs font-[300] md:text-[1.1rem]'>{deskripsi}</p>
                <Link to={'/'} className='text-xs underline cursor-pointer md:text-lg'>Read More</Link>
            </div>
        </div>
    )
}

export default CardFasilitas
