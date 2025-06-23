import React from 'react'
import { capitalCase } from 'change-case'
import Modal from 'react-modal'
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
import dataCalonSantri from '../../../jsons/dataCalonSantri.json'

const CalonSantri = () => {
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
        setData(dataCalonSantri);
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
                        <ButtonCrud color={'#32CD32'} link={'formulir'}>Tambah</ButtonCrud>
                        <ButtonDownload color={'#212529'} handleClick={() => { }} />

                    </div>
                    <div className='w-full justify-center items-center px-4'>
                        <BoxSearch />
                    </div>
                    <ContentData handleShow={handleShow} handleShowModalDelete={handleShowModalDelete} data={data} handleSetId={handleSetId} />
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
                        data={item}
                        no={index + 1}
                        handleActive={() => handleActive(index)}
                        active={active === index}
                        handleShow={handleShow}
                        handleShowModalDelete={handleShowModalDelete}
                        handleSetId={handleSetId}
                    />)
            }
        </div>
    )
}


const ContainerData = ({ no, data, active, handleActive, handleShow, handleShowModalDelete, handleSetId }) => {

    return (
        <>
            <div className={`w-full flex flex-col justify-start items-center py-4 relative  before:absolute before:w-full before:h-[1px] before:bg-slate-600 before:top-0 before:left-0 transition duration-700 ease-in-out active:bg-[rgba(0,0,0,0.1)]`} onClick={handleActive}>
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-start items-center gap-7'>
                        <p className='text-lg'>{no}</p>
                        <p className='text-lg'>{data.nama_lengkap}</p>
                    </div>

                    <IoIosArrowDropdownCircle size={35} className={`text-secondary-blue ${active ? 'rotate-180' : ''}`} />
                </div>
            </div>
            <div className={`w-full flex flex-col justify-start items-start gap-2 pl-8.5 transition-all ease-in-out duration-500 overflow-hidden ${active ? 'max-h-[45rem] mb-6' : 'max-h-0'}`}>
                <ComponentData data={'Nama'} value={data.nama_lengkap} />
                <ComponentData data={'NISN'} value={data.nisn} />
                <ComponentData data={'NIK'} value={data.nik} />
                <ComponentData data={'Jenis Kelamin'} value={data.jenis_kelamin} />
                <ComponentData data={'Usia'} value={data.usia} />
                <ComponentData data={'Tempat Lahir'} value={data.tempat_lahir} />
                <ComponentData data={'Tanggal Lahir'} value={data.tanggal_lahir} />
                <ComponentData data={'Alamat'} value={data.alamat} />
                <ComponentData data={'Anak Ke'} value={data.anak_ke} />
                <ComponentData data={'Jumlah Saudara'} value={data.jumlah_saudara} />
                <ComponentData data={'No HP'} value={data.no_hp} />
                <ComponentData data={'Asal Sekolah'} value={data.asal_sekolah} />
                <ComponentData data={'Alamat Asal Sekolah'} value={data.alamat_sekolah_asal} />
                <ComponentData data={'Nama Ayah'} value={data.nama_lengkap_ayah} />
                <ComponentData data={'Nama Ibu'} value={data.nama_lengkap_ibu} />
                <ComponentData data={'Nama Wali'} value={data.nama_lengkap_wali} />
                <ComponentDataFile data={'Dokumen'} handleShow={handleShow} id={data.id} handleSetId={handleSetId} />
                <ComponentAction handleShowModalDelete={handleShowModalDelete} id={data.id} />
            </div>
        </>
    )
}

// component data text
const ComponentData = ({ data, value }) => {
    return (
        <div className='w-full flex flex-row justify-between items-start'>
            <p className='text-sm flex-1'>{data}</p>
            <div className='flex flex-row justify-start items-start flex-1/3 gap-2'>
                <p className='text-sm'>:</p>
                <p className='text-sm'>{value}</p>
            </div>
        </div>
    )
}

// component data file 
const ComponentDataFile = ({ data, handleShow, id, handleSetId }) => {
    return (
        <div className='w-full flex flex-row justify-between items-start mt-2'>
            <p className='text-sm flex-1'>{data}</p>
            <div className='flex flex-row justify-start items-start flex-1/3 gap-2'>
                <p className='text-sm'>:</p>
                <p className='text-sm py-2 px-3 bg-gray-700 text-white rounded-lg active:bg-gray-600' onClick={() => { handleShow(), handleSetId(id) }}> Preview</p>
            </div>
        </div >
    )
}

// component action
const ComponentAction = ({ handleShowModalDelete, id }) => {
    return (
        <div className='w-full flex flex-row justify-between items-start mt-2'>
            <p className='text-sm flex-1'>Action</p>
            <div className='flex flex-row justify-start items-start flex-1/3 gap-2'>
                <p className='text-sm'>:</p>
                <Link to={`/admin/calon-santri/update/${id}`} className='text-sm py-2 px-3 bg-primary-blue rounded-lg text-white active:bg-secondary-blue'>Update</Link>
                <p className='text-sm py-2 px-3 bg-red-600 rounded-lg text-white active:bg-red-500' onClick={() => handleShowModalDelete()}>Delete</p>
            </div>
        </div>
    )
}


export default CalonSantri
