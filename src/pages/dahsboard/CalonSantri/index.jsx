import React from 'react'
import { capitalCase } from 'change-case'
import Modal from 'react-modal'
// layout

import LayoutDataPages from '../../../layouts/LayoutDataPages'
import { Link, useLoaderData, useLocation, useRevalidator } from 'react-router-dom'
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
import dataCalonSantri from '../../../jsons/dataCalonSantri.json'
import ContainerData from '../../../fragments/ContainerData'
import ComponentDataText from '../../../components/ComponentDataText'
import ComponentDataFile from '../../../components/ComponentDataFIle'
import ComponentAction from '../../../components/ComponentAction'
import { StudentService } from '../../../services/student.service'

const CalonSantri = () => {

    // loader 
    const data = useLoaderData();


    // use revalidate 
    const revalidate = useRevalidator();

    // cek 
    // console.log(data)


    const [id, setId] = useState(null);
    const path = useLocation().pathname
    const header = headerDashboard(path)
    const [show, setShow] = useState(false);


    // handle show modal preview
    const handleShow = () => {
        setShow((prev) => !prev);
    }

    // handle delete 
    const handleDelete = async (id) => {
        await StudentService.delete(id);

        // revalidate 
        revalidate.revalidate();
    }


    // handle show modal delete
    const handleShowModalDelete = (id) => {
        confirmDelete(handleDelete, id);
    }



    // handle set id 
    const handleSetId = (id) => {
        setId(id);
    }



    return (
        <>
            <LayoutDataPages header={capitalCase(header)}>
                <div className='min-h-[100vh] flex flex-col justify-start items-center pt-24 pb-12'>
                    <div className='w-full flex flex-row justify-start items-center gap-4 px-4 mb-6'>
                        <ButtonCrud color={'#32CD32'} link={'calon-santri/add'}>Tambah</ButtonCrud>
                        <ButtonDownload color={'#212529'} handleClick={() => { }} />
                    </div>
                    <div className='w-full justify-center items-center px-4'>
                        <BoxSearch />
                    </div>
                    <ContentData handleShow={handleShow} handleShowModalDelete={handleShowModalDelete} data={data.data} handleSetId={handleSetId} />
                </div>

            </LayoutDataPages>
            <ModalPreviewImg show={show} handleShow={handleShow} id={id} />
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
                        nama={item.nama_lengkap}
                        no={index + 1}
                        handleActive={() => handleActive(index)}
                        active={active === index}
                    >
                        <ComponentDataText data={'Nama'} value={item.nama_lengkap} />
                        <ComponentDataText data={'NISN'} value={item.nisn} />
                        <ComponentDataText data={'NIK'} value={item.nik} />
                        <ComponentDataText data={'Jenis Kelamin'} value={item.jenis_kelamin === 'laki_laki' ? 'Laki-Laki' : 'Perempuan'} />
                        <ComponentDataText data={'Usia'} value={item.usia} />
                        <ComponentDataText data={'Tempat Lahir'} value={item.tempat_lahir} />
                        <ComponentDataText data={'Tanggal Lahir'} value={item.tanggal_lahir} />
                        <ComponentDataText data={'Alamat'} value={item.alamat} />
                        <ComponentDataText data={'Anak Ke'} value={item.anak_ke} />
                        <ComponentDataText data={'Jumlah Saudara'} value={item.jumlah_saudara} />
                        <ComponentDataText data={'No HP'} value={item.no_telepon} />
                        <ComponentDataText data={'Asal Sekolah'} value={item.asal_sekolah} />
                        <ComponentDataText data={'Alamat Asal Sekolah'} value={item.alamat_sekolah_asal} />
                        <ComponentDataText data={'Nama Ayah'} value={item.nama_lengkap_ayah} />
                        <ComponentDataText data={'Nama Ibu'} value={item.nama_lengkap_ibu} />
                        <ComponentDataText data={'Nama Wali'} value={item.nama_lengkap_wali === 'tidak ada' ? '-' : item.nama_lengkap_wali} />
                        <ComponentDataFile data={'Dokumen'} handleShow={handleShow} id={item.id} handleSetId={handleSetId} />
                        <ComponentAction handleShowModalDelete={handleShowModalDelete} id={item.id} link={'calon-santri'} />
                    </ContainerData>
                )
            }
        </div>
    )
}




export default CalonSantri
