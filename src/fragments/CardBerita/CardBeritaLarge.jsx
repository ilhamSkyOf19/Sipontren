import React from 'react'
const CardBeritaLarge = ({ img, judul, deskripsi, jenis }) => {
    return (
        <div className='w-full min-h-[47rem] flex flex-col justify-start items-start overflow-hidden gap-6 md:mb-20'>
            <div className='w-full h-[15rem] bg-black rounded-[2.5rem] overflow-hidden shrink-0 md:h-[30rem]'>
                <img src={`/berita/${img}`} alt="" className='w-full h-full object-cover' />
            </div>
            <p className='px-5 py-2 bg-white rounded-xl border border-secondary-blue text-md md:text-xl'>{jenis || ''}</p>
            <div className='flex flex-col justify-start items-start gap-3'>
                <p className='w-full min-h-[8.5rem] text-[1.4rem] font-[400] md:text-3xl'>
                    {(judul || '').slice(0, window.innerWidth < 760 ? 50 : 100)}...
                </p>
                <p className='w-full min-h-[7.5rem] text-md text-slate-500 md:text-xl'>
                    {(deskripsi || '').slice(0, window.innerWidth < 760 ? 50 : 290)}...
                </p>
            </div>
            <button className='px-5 py-3 bg-secondary-blue rounded-lg border-1 border-secondary-blue text-sm font-[400] text-white hover:bg-white hover:text-secondary-blue transition ease-in-out duration-200 cursor-pointer active:bg-white active:text-secondary-blue md:text-lg'>
                Pelajari Lebih Lanjut
            </button>
        </div>
    )
}

export default CardBeritaLarge
