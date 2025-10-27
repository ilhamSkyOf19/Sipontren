import React, { useState } from 'react'
import { capitalCase } from 'change-case'
import ContainerData from '../../../fragments/ContainerData'
import ComponentDataText from '../../../components/ComponentDataText'
import ComponentDataFile from '../../../components/ComponentDataFIle'
import ComponentAction from '../../../components/ComponentAction'

// layout
import LayoutDataPages from '../../../layouts/LayoutDataPages'
import { useLoaderData, useLocation, useRevalidator } from 'react-router-dom'
import { headerDashboard } from '../../../utils/utils'
import ButtonCrud from '../../../components/ButtonCrud'
import ModalPreviewImg from '../../../components/ModalPreviewImg'
import confirmDelete from '../../../utils/confirmAlert'

// service
import { AlumniService } from '../../../services/alumni.service'

const Alumni = () => {

    // loader 
    const data = useLoaderData();

    // revalidator 
    const revalidate = useRevalidator();

    const [id, setId] = useState(null);
    const [show, setShow] = useState(false);

    const path = useLocation().pathname;
    const header = headerDashboard(path);

    // handle show modal preview
    const handleShow = () => setShow(prev => !prev);

    // handle delete data 
    const handleDelete = async (id) => {
        const response = await AlumniService.delete(id);
        if (!response.success) return console.log(response.message);

        // revalidate data setelah delete
        revalidate.revalidate();
    };

    // handle show modal delete
    const handleShowModalDelete = (id) => confirmDelete(handleDelete, id);

    // handle set id untuk modal preview
    const handleSetId = (id) => setId(id);

    return (
        <>
            <LayoutDataPages header={capitalCase(header)}>
                <div className='min-h-[100vh] flex flex-col justify-start items-center pt-24 pb-12'>
                    <div className='w-full flex flex-row justify-start items-center gap-4 px-4 mb-6'>
                        <ButtonCrud color={'#32CD32'} link={'alumni/add'}>Tambah</ButtonCrud>
                    </div>

                    <ContentData
                        handleShow={handleShow}
                        handleShowModalDelete={handleShowModalDelete}
                        data={data?.data}
                        handleSetId={handleSetId}
                    />
                </div>
            </LayoutDataPages>

            {/* Modal preview image */}
            <ModalPreviewImg show={show} handleShow={handleShow} id={id} type={'alumni'} />
        </>
    )
};

const ContentData = ({ handleShow, handleShowModalDelete, data, handleSetId }) => {
    const [active, setActive] = useState(null);

    const handleActive = (index) => {
        setActive(prev => prev === index ? null : index);
    };

    return (
        <div className='w-full flex flex-col justify-start items-center mt-12 px-4'>
            {data && data.length > 0 ? (
                data.map((item, index) => (
                    <ContainerData
                        key={index}
                        nama={item.name}
                        no={index + 1}
                        handleActive={() => handleActive(index)}
                        active={active === index}
                    >
                        <ComponentDataText data={'Nama'} value={item.name} />
                        <ComponentDataText data={'Angkatan'} value={item.angkatan} />
                        <ComponentDataText data={'Deskripsi'} value={item.description} />
                        <ComponentDataText data={'Dibuat Pada'} value={new Date(item.createdAt).toLocaleString()} />
                        <ComponentDataText data={'Diperbarui Pada'} value={new Date(item.updatedAt).toLocaleString()} />
                        <ComponentDataFile data={'Foto Alumni'} handleShow={handleShow} id={item.id} handleSetId={handleSetId} />
                        <ComponentAction handleShowModalDelete={() => handleShowModalDelete(item.id)} id={item.id} link={'alumni'} />
                    </ContainerData>
                ))
            ) : (
                <p>Tidak ada data alumni.</p>
            )}
        </div>
    );
};

export default Alumni;
