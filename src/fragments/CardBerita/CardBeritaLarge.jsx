import React from 'react'
const CardBeritaLarge = ({ img, judul, deskripsi, jenis }) => {
    return (
        <div className='w-full min-h-[47rem] flex flex-col justify-start items-start overflow-hidden gap-6'>
            <div className='w-full h-[15rem] bg-black rounded-[2.5rem] overflow-hidden shrink-0'>
                <img src={`/berita/${img}`} alt="" className='w-full h-full object-cover' />
            </div>
            <p className='px-5 py-2 bg-white rounded-xl border border-secondary-blue text-md'>{jenis || ''}</p>
            <div className='flex flex-col justify-start items-start gap-3'>
                <p className='w-full min-h-[8.5rem] text-[1.4rem] font-[400]'>
                    {(judul || '').slice(0, 75)}...
                </p>
                <p className='w-full min-h-[7.5rem] text-md text-slate-500'>
                    {(deskripsi || '').slice(0, 190)}...
                </p>
            </div>
            <button className='px-5 py-3 bg-secondary-blue rounded-lg border-1 border-secondary-blue text-sm font-[400] text-white hover:bg-white hover:text-secondary-blue transition ease-in-out duration-200 cursor-pointer active:bg-white active:text-secondary-blue'>
                Pelajari Lebih Lanjut
            </button>
        </div>
    )
}

export default CardBeritaLarge
