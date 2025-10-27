import React from 'react'
import LayoutDataPages from '../../../layouts/LayoutDataPages'
import ButtonCrud from '../../../components/ButtonCrud'
import CardBeritaSmall from '../../../fragments/CardBerita/CardBeritaSmall'
import CardAdminBerita from '../../../fragments/CardAdminBerita'
import { useLoaderData, useRevalidator } from 'react-router-dom'
import { NewsService } from '../../../services/news.service'

const Berita = () => {

    // loader 
    const news = useLoaderData();

    // revalidate 
    const revalidate = useRevalidator();


    // cek news 
    if (!news.success) {
        console.log(news);
    }


    // handle delete 
    const handleDelete = async (id) => {
        await NewsService.delete(id);

        // revalidate 
        revalidate.revalidate();

    }

    return (
        <LayoutDataPages header={'Berita'}>
            <div className="w-full pt-24 flex flex-col justify-start items-start">

                {/* button */}
                <div className='w-full flex flex-row justify-start items-center gap-4 px-4 mb-6'>
                    <ButtonCrud color={'#32CD32'} link={'berita/add'}>
                        Tambah</ButtonCrud>
                </div>


                {/* preview berita */}
                <div className='w-full flex flex-row justify-center items-start gap-4 flex-wrap py-12 px-2 '>

                    {/* card berita */}
                    {
                        news && news.data.length > 0 ? (
                            news.data.map((item, index) => (

                                <CardAdminBerita
                                    key={index}
                                    id={item.id}
                                    jenis={item.category}
                                    judul={item.title}
                                    img={item.thumbnail}
                                    handleDelete={handleDelete}
                                />
                            ))
                        ) : (
                            <p>No Data</p>
                        )
                    }

                </div>
            </div>
        </LayoutDataPages>
    )
}

export default Berita
