import React, { useEffect } from 'react'
import LayoutPages from '../../../../layouts/LayoutPages'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { FaArrowLeftLong } from 'react-icons/fa6';

const BeritaDetail = () => {

  // navigate
  const navigate = useNavigate();

  // loader news 
  const news = useLoaderData();


  // window scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <LayoutPages>
      <div className='w-full flex flex-col justify-start items-start py-24'>
        {/* button back */}
        <button type='button' onClick={() => navigate(-1)} className='w-full flex flex-row justify-strt items-center px-4 gap-3'>
          {/* icon arrow long */}
          <FaArrowLeftLong className='text-3xl cursor-pointer text-blue-400' />

          {/* label */}
          <p className='text-base underline font-semibold text-blue-400'>Back to Home</p>
        </button>



        {/* content */}
        <div className='w-full flex flex-col justify-start items-center mt-12 gap-4'>
          {/* thumbnail */}
          <div className='w-[90%] h-[15rem] rounded-2xl overflow-hidden'>
            <img src={`${import.meta.env.VITE_API_BASE_IMG_URL}/news/${news.thumbnail}`} alt="thumbnail" className='w-full h-full object-cover' />
          </div>

          {/* category */}
          <div className='w-[90%] flex flex-row justify-start items-start'>
            <h3 className='px-5 py-2 border-1 border-blue-400 rounded-md'>
              {news?.category ?? ''}
            </h3>
          </div>

          {/* title */}
          <div className='w-[90%] flex flex-row justify-start items-start'>
            <h3 className='font-semibold text-xl'>
              {news?.title ?? ''}
            </h3>
          </div>

          {/* content */}
          <div className='w-[90%] flex flex-row justify-start items-start'>
            <p className='text-base text-black font-normal'>
              {news?.content ?? ''}
            </p>
          </div>
        </div>
      </div>
    </LayoutPages>
  )
}

export default BeritaDetail
