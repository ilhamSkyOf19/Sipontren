import React from 'react'
import Subjudul from '../../components/SubJudul'

const index = ({ judul, ket, mb }) => {
    return (
        <div className={`w-screen justify-center items-center flex flex-col mb-${mb || 6}`}>
            <Subjudul text={judul} />
            <p className='text-sm font-poppins font-normat text-secondary-blue py-5 px-12 rounded-xl text-center md:text-xl lg:text-sm lg:px-52'>
                {ket}
            </p>
        </div>
    )
}

export default index
