import React from 'react'

const index = ({ textOne, textTwo, textKet }) => {
    return (
        <div className='flex flex-col justify-start items-center w-[80%] min-h-[23vh] bg-primary-blue rounded-xl py-8 md:w-[45%] md:justify-start md:gap-2 lg:flex-1/4 lg:hover:bg-secondary-blue transition-all ease-in-out duration-200 shadow-lg inset-shadow-2xs hover:shadow-secondary-blue lg:h-[34vh] lg:gap-0'>
            <p className='text-[1.2rem] font-[400] text-white uppercase md:text-2xl lg:text-xl lg:font-semibold'>{textOne}</p>
            <p className='text-[1.2rem] font-[400] text-white uppercase md:text-2xl lg:text-xl lg:font-semibold'>{textTwo}</p>
            <p className='text-sm text-white py-5 px-6 rounded-xl text-center font-[300] md:text-[1rem] md:px-7 lg:text-xs lg:py-0 lg:pt-3 lg:px-11'>
                {textKet}
            </p>
        </div>
    )
}

export default index
