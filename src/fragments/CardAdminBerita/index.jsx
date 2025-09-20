import React from 'react'
import useWindowSize from '../../hook/UseWindowSize';
import ButtonNavigasi from '../../components/NavbarList';
import ButtonCrud from '../../components/ButtonCrud';
import confirmDelete from '../../utils/confirmAlert';
const CardAdminBerita = ({ id, img, judul, jenis, handleDelete }) => {
    const window = useWindowSize().width;

    return (
        <div className='w-[10rem] h-[24rem] flex flex-col justify-start items-start overflow-hidden gap-4 shrink-0 md:w-[17rem] md:h-[34rem] md:mr-4 lg:h-[26rem] lg:w-[19rem] lg:gap-2'>
            <div className='w-full h-[8rem] bg-black rounded-2xl overflow-hidden shrink-0 md:h-[13rem] lg:mb-2 lg:rounded-4xl lg:h-[12rem]'>
                <img src={`${img}`} alt="" className='w-full h-full object-cover' loading='lazy' />
            </div>
            <p className='px-4 py-1 bg-white rounded-lg border border-secondary-blue text-xs md:text-[1.1rem] lg:text-xs'>{jenis || ''}</p>
            <div className='flex flex-col justify-start items-start gap-3'>
                <p className='w-[90%] h-[3.5rem] text-sm font-[400] md:text-lg md:h-[5rem] lg:text-sm lg:h-[3.5rem]'>
                    {
                        (judul || '').slice(0, window > 0 && window < 760 ? 40 : window > 760 && window < 1024 ? 60 : window > 1024 ? 70 : 60)
                    }...
                </p>
            </div>
            <button className='text-xs underline cursor-pointer active:text-slate-400 md:text-lg lg:text-xs'>
                Baca Selengkapnya
            </button>


            {/* button action */}
            <div className='w-full flex flex-row justify-start items-center gap-2 flex-wrap'>

                {/* update button */}
                <ButtonCrud color={'rgba(0, 0, 0, 0.7)'} link={`berita/update/${id}`} size={'py-2 px-2.5'}>
                    Update
                </ButtonCrud>

                {/* delete button */}
                <button type='button' className='text-sm py-2 px-3 bg-red-600 rounded-lg text-white active:bg-red-500' onClick={() => confirmDelete(handleDelete, id)}>Delete</button>

            </div>
        </div>
    )
}

export default CardAdminBerita
