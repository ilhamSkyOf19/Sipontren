import React, { useEffect } from 'react'
import LayoutDataPages from "../../../../layouts/LayoutDataPages";
import TamplateFormulir from "../../../../fragments/TamplateFormulir";

// icons 
import { FaArrowLeft } from "react-icons/fa6";
import { useParams } from 'react-router-dom';


// json 
import dataCalonSantri from '../../../../jsons/dataCalonSantri.json'
import { useState } from 'react';
const updateCalonSantri = () => {

    const [data, setData] = useState(undefined)
    // params 
    const { id } = useParams()

    // handle back
    const handleBack = () => {
        window.history.back()
    }

    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // fetch data 
    useEffect(() => {
        if (id) {
            const result = dataCalonSantri.find(item => item.id === Number(id))

            if (result) {
                setData(result)
            }
        }
    }, [id])


    return (
        <LayoutDataPages>
            <div className='w-full flex flex-col justify-start items-center pt-24'>
                <div className='flex flex-row justify-start items-center w-full px-4 gap-2 '>
                    <FaArrowLeft className='text-xl text-primary-blue' />
                    <p className='text-sm underline  text-primary-blue ' onClick={() => { handleBack() }}>
                        kembali
                    </p>
                </div>
                <TamplateFormulir tipe={'sma'} formulir={'update'} data={data} />
            </div>
        </LayoutDataPages>
    )
}

export default updateCalonSantri
