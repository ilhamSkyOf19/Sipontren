import React from 'react'
import useWindowSize from '../../hook/UseWindowSize';
const CardBeritaSmall = ({ img, judul, deskripsi, jenis }) => {
    const window = useWindowSize().width;

    return (
        <div className='w-[10rem] h-[21rem] flex flex-col justify-start items-start overflow-hidden gap-4 shrink-0 md:w-[17rem] md:h-[34rem] md:mr-4 lg:h-[26rem] lg:w-[19rem] lg:gap-2'>
            <div className='w-full h-[8rem] bg-black rounded-2xl overflow-hidden shrink-0 md:h-[13rem] lg:mb-2 lg:rounded-4xl lg:h-[12rem]'>
                <img src={`${img}`} alt="" className='w-full h-full object-cover' />
            </div>
            <p className='px-4 py-1 bg-white rounded-lg border border-secondary-blue text-xs md:text-[1.1rem] lg:text-xs capitalize'>{jenis || ''}</p>
            <div className='flex flex-col justify-start items-start gap-3'>
                <p className='w-[90%] h-[3.5rem] text-sm font-[400] md:text-lg md:h-[5rem] lg:text-sm lg:h-[3.5rem]'>
                    {
                        (judul || '').slice(0, window > 0 && window < 760 ? 35 : window > 760 && window < 1024 ? 60 : window > 1024 ? 70 : 60)
                    }...
                </p>
                <p className='w-full h-[2.7rem] text-xs text-slate-500 md:text-[1.1rem] md:h-[6rem] lg:text-xs lg:h-[3.5rem]'>
                    {(deskripsi || '').slice(0, window > 0 && window < 760 ? 50 : window > 760 && window < 1024 ? 90 : window > 1024 ? 100 : 60)}...
                </p>
            </div>
            <button className='text-xs underline cursor-pointer active:text-slate-400 md:text-lg lg:text-xs'>
                Baca Selengkapnya
            </button>
        </div>
    )
}

export default CardBeritaSmall
