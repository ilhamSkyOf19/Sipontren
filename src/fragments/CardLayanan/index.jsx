import React from 'react'

const index = ({ textOne, textTwo, textKet }) => {
    return (
        <div className='flex flex-col justify-between items-center w-[80%] min-h-[23vh] bg-primary-blue rounded-xl py-8 md:w-[45%] md:justify-start md:gap-2'>
            <p className='text-[1.2rem] font-[400] text-white uppercase md:text-2xl'>{textOne}</p>
            <p className='text-[1.2rem] font-[400] text-white uppercase md:text-2xl'>{textTwo}</p>
            <p className='text-sm text-white py-5 px-6 rounded-xl text-center font-[300] md:text-[1rem] md:px-7'>
                {textKet}
            </p>
        </div>
    )
}

export default index
