import React from 'react'

// img 

const CardProfilUstad = ({ img, nama, jabatan }) => {
    return (
        <div className='w-[12rem] h-[40vh] flex flex-col justify-start items-center shrink-0 rounded-2xl overflow-hidden shadow-xl md:w-[19rem] md:h-[43vh] lg:w-[12.5rem] lg:h-[62vh]'>
            <div className='flex-3 w-[100%]' style={{ backgroundImage: `url(${import.meta.env.VITE_API_BASE_IMG_URL}/ustad_img/${img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            </div>
            <div className='flex-1/7 w-[100%] flex flex-col justify-start items-center px-4 gap-2 pt-3 md:px-10 bg-white md:pt-5 lg:px-2'>
                <p className='text-sm text-center font-semibold min-h-12 md:text-xl lg:text-sm'>{nama}</p>
                <p className='text-xs text-center md:text-[1.1rem] lg:text-xs'>{jabatan}</p>
            </div>
        </div>
    )
}

export default CardProfilUstad
