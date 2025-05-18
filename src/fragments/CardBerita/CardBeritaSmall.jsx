import React from 'react'
const CardBeritaSmall = () => {
    return (
        <div className='w-[10rem] h-[21rem] flex flex-col justify-start items-start overflow-hidden gap-4 shrink-0'>
            <div className='w-full h-[8rem] bg-black rounded-2xl overflow-hidden shrink-0'>
                <img src="/berita/5.jpg" alt="" className='w-full h-full object-cover' />
            </div>
            <p className='px-4 py-1 bg-white rounded-lg border border-secondary-blue text-xs'>Berita</p>
            <div className='flex flex-col justify-start items-start gap-3'>
                <p className='w-[90%] h-[3.5rem] text-sm font-[400]'>
                    Kerja Sama Tim Mahasiswa UM Metro....
                </p>
                <p className='w-full h-[1.6rem] text-xs text-slate-500'>
                    Kerja sama ini bertujuan untuk sistem ....
                </p>
            </div>
            <button className='text-xs underline cursor-pointer active:text-slate-400'>
                Baca
            </button>
        </div>
    )
}

export default CardBeritaSmall
