import React from 'react'
import Subjudul from '../../components/SubJudul'

const index = ({ judul, ket }) => {
    return (
        <div className='w-screen justify-center items-center flex flex-col'>
            <Subjudul text={judul} />
            <p className='text-sm font-poppins font-normat text-secondary-blue py-5 px-12 rounded-xl text-center mb-6 md:text-xl'>
                {ket}
            </p>
        </div>
    )
}

export default index
