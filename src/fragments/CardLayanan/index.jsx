import React from 'react'

const index = ({ textOne, textTwo, textKet }) => {
    return (
        <div className='flex flex-col justify-between items-center w-[80%] min-h-[23vh] bg-primary-blue rounded-xl py-8 md:w-[40%]'>
            <p className='text-[1.2rem] font-[400] text-white uppercase'>{textOne}</p>
            <p className='text-[1.2rem] font-[400] text-white uppercase'>{textTwo}</p>
            <p className='text-sm text-white py-5 px-6 rounded-xl text-center font-[300]'>
                {textKet}
            </p>
        </div>
    )
}

export default index
