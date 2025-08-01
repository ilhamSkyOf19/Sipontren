import React from 'react'
import { capitalCase } from 'change-case'
import ContainerData from '../../../fragments/ContainerData'
import ComponentDataText from '../../../components/ComponentDataText'
import ComponentDataFile from '../../../components/ComponentDataFIle'
import ComponentAction from '../../../components/ComponentAction'
// layout

import LayoutDataPages from '../../../layouts/LayoutDataPages'
import { Link, useLocation } from 'react-router-dom'
import { headerDashboard } from '../../../utils/utils'
import ButtonCrud from '../../../components/ButtonCrud'
import ButtonDownload from '../../../components/ButtonDownload'
import BoxSearch from '../../../components/BoxSearch'


// icons
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState } from 'react'
import ModalPreviewImg from '../../../components/ModalPreviewImg'
import confirmDelete from '../../../utils/confirmAlert'
import { useEffect } from 'react'


// json 
import dataUstad from '../../../jsons/dataUstad.json'

const UstadUstadzah = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState(null);
    const path = useLocation().pathname
    const header = headerDashboard(path)
    const [show, setShow] = useState(false);


    // handle show modal preview
    const handleShow = () => {
        setShow((prev) => !prev);
    }


    // handle show modal delete
    const handleShowModalDelete = () => {
        confirmDelete(1);
    }

    //  fetch data 
    useEffect(() => {
        setData(dataUstad);
    }, [])


    // handle set id 
    const handleSetId = (id) => {
        setId(id);
    }



    return (
        <>
            <LayoutDataPages header={capitalCase(header)}>
                <div className='min-h-[100vh] flex flex-col justify-start items-center pt-24 pb-12'>
                    <div className='w-full flex flex-row justify-start items-center gap-4 px-4 mb-6'>
                        <ButtonCrud color={'#32CD32'} link={'ustad-ustadzah/add'}>Tambah</ButtonCrud>
                        <ButtonDownload color={'#212529'} handleClick={() => { }} />
                    </div>
                    <div className='w-full justify-center items-center px-4'>
                        <BoxSearch />
                    </div>
                    <ContentData handleShow={handleShow} handleShowModalDelete={handleShowModalDelete} data={data} handleSetId={handleSetId} />
                </div>

            </LayoutDataPages>
            <ModalPreviewImg show={show} handleShow={handleShow} id={id} type={"ustad"} />
        </>
    )
}

const ContentData = ({ handleShow, handleShowModalDelete, data, handleSetId }) => {

    const [active, setActive] = useState(null);

    const handleActive = (index) => {
        setActive(prev => prev === index ? null : index);
    }
    return (
        <div className='w-full flex flex-col justify-start items-center mt-12 px-4'>
            {
                data.map((item, index) =>
                    <ContainerData
                        key={index}
                        nama={item.nama}
                        no={index + 1}
                        handleActive={() => handleActive(index)}
                        active={active === index}
                    >
                        <ComponentDataText data={'Nama'} value={item.nama} />
                        <ComponentDataText data={'Jenis Kelamin'} value={item.jenisKelamin} />
                        <ComponentDataText data={'Tempat Lahir'} value={item.tempatLahir} />
                        <ComponentDataText data={'Tanggal Lahir'} value={item.tanggalLahir} />
                        <ComponentDataText data={'Alamat'} value={item.alamat} />
                        <ComponentDataText data={'Nomor Telepon'} value={item.nomorTelepon} />
                        <ComponentDataText data={'Jabatan'} value={item.jabatan} />
                        <ComponentDataFile data={'Dokumen'} handleShow={handleShow} id={item.id} handleSetId={handleSetId} />
                        <ComponentAction handleShowModalDelete={handleShowModalDelete} id={item.id} link={'ustad-ustadzah'} />
                    </ContainerData>

                )
            }
        </div>
    )
}



export default UstadUstadzah;
