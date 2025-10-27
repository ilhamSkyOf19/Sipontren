import LayoutDataPages from '../../../layouts/LayoutDataPages'
import { Link, useLoaderData, useRevalidator } from 'react-router-dom';
import { useEffect } from 'react';
import ButtonCrud from '../../../components/ButtonCrud';
import { PamfletService } from '../../../services/pamflet.service';
import confirmDelete from '../../../utils/confirmAlert';
const index = () => {

    // loader
    const pamflet = useLoaderData();


    // revalidate 
    const revalidate = useRevalidator();

    // cek loader 
    if (pamflet && !pamflet.success) {
        console.log(pamflet.message)
    }


    // cek loader 
    useEffect(() => {
        console.log(pamflet)


    }, [pamflet])

    // handle delete 
    const handleDelete = async (id) => {
        await PamfletService.delete(id);

        // revalidate 
        revalidate.revalidate();

    }






    return (
        <LayoutDataPages header={'Data Pamflet'}>
            <div className="w-full pt-24 flex flex-col justify-start items-start">

                {/* button */}
                <div className='w-full flex flex-row justify-start items-center gap-4 px-4 mb-6'>
                    <ButtonCrud color={'#32CD32'} link={'pamflet/add'}>
                        Tambah</ButtonCrud>
                </div>


                {/* preview pamflet */}
                <div className='w-full flex flex-row justify-center items-start gap-8 flex-wrap py-12 px-4 '>

                    {/* card Pamflet */}

                    {
                        pamflet && pamflet.data.length > 0 ? pamflet.data.map((item, index) => (
                            <div key={index} className='w-full flex flex-col justify-start items-start gap-2 bg-white rounded-2xl overflow-hidden shadow-xl'>
                                {/* img */}
                                <div className='w-full h-[20rem] flex flex-row justify-center items-center'>
                                    <img src={`${import.meta.env.VITE_API_BASE_IMG_URL}/pamflet/${item.img}`} alt="img pamflet" className='w-full h-full object-cover' loading='lazy' />
                                </div>

                                {/* button */}
                                <div className='w-full flex flex-row justify-start items-start gap-4 px-4 py-6'>
                                    {/* update */}
                                    <Link to={`/admin/pamflet/update/${item.id}`} className='text-sm py-4 px-6 bg-primary-blue rounded-lg text-white font-semibold active:bg-secondary-blue '>Update</Link>
                                    <button type='button' className='text-sm py-4 px-6 bg-red-500 rounded-lg text-white font-semibold active:bg-secondary-blue ' onClick={() => confirmDelete(handleDelete, item.id)}>Delete</button>
                                </div>

                            </div>
                        )) : (
                            <p>Tidak ada data</p>
                        )
                    }

                </div>
            </div>
        </LayoutDataPages>
    )
}

export default index
