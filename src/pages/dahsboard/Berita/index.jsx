import React from 'react'
import LayoutDataPages from '../../../layouts/LayoutDataPages'
import ButtonCrud from '../../../components/ButtonCrud'

const Berita = () => {
    return (
        <LayoutDataPages>
            <div className="container pt-24 flex flex-col justify-start items-start">

                {/* button */}
                <div className='w-full flex flex-row justify-start items-center gap-4 px-4 mb-6'>
                    <ButtonCrud color={'#32CD32'} link={'berita/add'}>
                        Tambah</ButtonCrud>
                </div>


                {/* preview berita */}
            </div>
        </LayoutDataPages>
    )
}

export default Berita
