import React from 'react'
import LayoutDataPages from '../../../layouts/LayoutDataPages'
import ButtonCrud from '../../../components/ButtonCrud'
import CardBeritaSmall from '../../../fragments/CardBerita/CardBeritaSmall'
import CardAdminBerita from '../../../fragments/CardAdminBerita'

const Berita = () => {
    return (
        <LayoutDataPages header={'Berita'}>
            <div className="w-full pt-24 flex flex-col justify-start items-start">

                {/* button */}
                <div className='w-full flex flex-row justify-start items-center gap-4 px-4 mb-6'>
                    <ButtonCrud color={'#32CD32'} link={'berita/add'}>
                        Tambah</ButtonCrud>
                </div>


                {/* preview berita */}
                <div className='w-full flex flex-row justify-center items-start gap-8 flex-wrap py-12 px-2 '>

                    {/* card berita */}
                    {
                        [0, 1, 2, 3, 4, 5, 6].map((_, index) => (

                            <CardAdminBerita
                                key={index}
                                jenis={'Berita'}
                                judul={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                                img={'../berita/5.jpg'}
                            />
                        ))
                    }

                </div>
            </div>
        </LayoutDataPages>
    )
}

export default Berita
