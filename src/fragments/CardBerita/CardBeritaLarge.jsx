import React from 'react'
import useWindowSize from '../../hook/UseWindowSize'
const CardBeritaLarge = ({ img, judul, deskripsi, jenis }) => {
    const window = useWindowSize().width
    return (
        <>
            <div className='w-full min-h-[47rem] flex flex-col justify-start items-start overflow-hidden gap-6 md:mb-12 md:flex-row md:min-h-[19vh]'>
                <div className='w-full h-[15rem] bg-black rounded-[2.5rem] overflow-hidden shrink-0 md:h-[21rem] md:flex-1/12 lg:flex-[2%]'>
                    <img src={`${import.meta.env.VITE_API_BASE_IMG_URL}/news/${img}`} alt="thumbnail" className='w-full h-full object-cover' loading='lazy' />
                </div>
                <div className='flex-1 flex flex-col justify-start items-start gap-3'>
                    <p className='px-7 py-2 bg-white rounded-md border border-secondary-blue text-md md:text-lg lg:text-xs capitalize'>{jenis || ''}</p>
                    <div className='flex flex-col justify-start items-start gap-3'>
                        <p className='w-full min-h-[8.5rem] text-[1.4rem] font-[400] md:text-2xl lg:text-lg lg:min-h-[6rem]'>
                            {(judul || '').slice(0, window > 1024 ? 1060 : 75)}...
                        </p>
                        <p className='w-full min-h-[7.7rem] text-md text-slate-500 md:text-xl lg:text-sm'>
                            {(deskripsi || '').slice(0, window > 1024 ? 300 : 100)}...
                        </p>
                    </div>
                    <button className='px-5 py-3 bg-secondary-blue rounded-md border-1 border-secondary-blue text-sm font-[400] text-white hover:bg-white hover:text-secondary-blue transition ease-in-out duration-200 cursor-pointer active:bg-white active:text-secondary-blue md:text-sm lg:text-xs'>
                        Baca selengkapnya
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardBeritaLarge
