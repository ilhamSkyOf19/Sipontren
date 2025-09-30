import React, { useEffect } from 'react'
import LayoutDataPages from "../../../../layouts/LayoutDataPages";
import TamplateFormulir from "../../../../fragments/TamplateFormulir";

// icons 
import { FaArrowLeft } from "react-icons/fa6";
import { useLoaderData, useParams } from 'react-router-dom';


const InputCalonSantri = () => {

    // loader data 
    const data = useLoaderData();

    // cek status
    if (data && !data.success) {
        console.log(data.message);
        return;
    }

    console.log(data?.data);


    return (
        <LayoutDataPages>
            <div className='w-full flex flex-col justify-start items-center pt-24'>
                <div className='flex flex-row justify-start items-center w-full px-4 gap-2 '>
                    <FaArrowLeft className='text-xl text-primary-blue' />
                    <p className='text-sm underline  text-primary-blue ' onClick={() => { handleBack() }}>
                        kembali
                    </p>
                </div>
                <TamplateFormulir formulir={'update'} student={data?.data} />
            </div>
        </LayoutDataPages>
    )
}

export default InputCalonSantri;
