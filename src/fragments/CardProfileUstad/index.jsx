import React from 'react'

// img 

const CardProfilUstad = ({ nama, jabatan }) => {
    return (
        <div className='w-[12rem] h-[40vh] flex flex-col justify-start items-center shrink-0 rounded-2xl overflow-hidden shadow-xl'>
            <div className='flex-3 w-[100%]' style={{ backgroundImage: `url(/ustad/sample.jpg)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            </div>
            <div className='flex-1/7 w-[100%] flex flex-col justify-start items-center px-4 gap-2 pt-3'>
                <p className='text-sm text-center font-semibold min-h-12'>{nama}</p>
                <p className='text-xs text-center'>{jabatan}</p>
            </div>
        </div>
    )
}

export default CardProfilUstad
