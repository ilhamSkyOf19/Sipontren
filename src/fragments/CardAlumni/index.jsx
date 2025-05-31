import React from 'react'

const CardAlumni = ({ img, nama, angkatan, deskripsi }) => {
    return (
        <div className='w-[100%] h-[30vh] flex flex-row justify-between items-center shrink-0 rounded-2xl overflow-hidden shadow-xl  md:w-[75%] lg:w-[40%] lg:h-[50vh]'>
            <div className='w-[50%] h-full rounded-2xl lg:w-[40%]' style={{ backgroundImage: `url(/alumni/${img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            </div>
            <div className='w-[50%] h-full flex flex-col justify-start items-start px-4 gap-5 pt-3 bg-white md:pt-8 lg:pt-2 lg:w-[60%]'>
                <div className='flex flex-col justify-start items-start gap-1 '>
                    <p className='text-sm font-semibold md:text-2xl lg:text-lg'>{nama}</p>
                    <p className='text-xs md:text-xl lg:text-sm'>Angkatan {angkatan}</p>
                </div>
                <p className='text-[0.65rem] md:text-lg lg:text-sm'>{deskripsi}</p>
            </div>
        </div>
    )
}

export default CardAlumni
