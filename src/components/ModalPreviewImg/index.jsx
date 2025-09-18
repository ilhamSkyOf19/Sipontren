import React from 'react'
import Modal from 'react-modal'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { useState } from 'react';

// json
import dataCalonSantri from '../../jsons/dataCalonSantri.json'
import dataUstad from '../../jsons/dataUstad.json'


// icon
import { IoIosClose } from "react-icons/io";
import { useEffect } from 'react';

const ModalPreviewImg = ({ show, handleShow, id, type }) => {

    const [datas, setDatas] = useState([]);
    const [active, setActive] = useState(0);
    const [close, setClose] = useState(false);


    // handle active
    const handleActive = (index) => {
        setActive(index);
    }

    // fetch
    useEffect(() => {
        if (type === "ustad") {
            if (id) {
                const result = dataUstad.find(item => item.id === Number(id))
                if (result) {
                    const datasImg = Object.entries(result)
                        .filter(([key, _]) => ["img"].includes(key)).map(([_, value]) => value);
                    if (datasImg) {
                        setDatas(datasImg)
                    }
                }
            }
        } else {
            if (id) {
                const result = dataCalonSantri.find(item => item.id === Number(id))
                if (result) {
                    const datasImg = Object.entries(result)
                        .filter(([key, _]) => ["foto_formal", "fc_akta_kelah", "foto_kk", "fc_ktp", "fc_kip_kis"].includes(key)).map(([_, value]) => value);

                    if (datasImg) {
                        setDatas(datasImg)
                    }
                }
            }
        }
    }, [id, type])


    // show close button
    useEffect(() => {
        if (show) {
            const time = setTimeout(() => {
                setClose(true)
            }, 200)
            return () => {
                clearTimeout(time)
            }
        } else {
            setClose(false)
        }
    }, [show])


    return (
        <Modal
            isOpen={show}
            // onRequestClose={handleClose}
            ariaHideApp={false}
            style={{
                content: {
                    // top: `${window.scrollY + 60}px`, // 100px jarak dari atas
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translateX(-50%)',
                    width: '110vw',
                    height: '100vh',
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                },
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 999,
                }

            }}
        >
            <IoIosClose className={`absolute text-white top-6 right-4 text-2xl cursor-pointer opacity-0 rotate-0 transition-all transform duration-500 ease-in-out md:right-20 lg:right-[30%] lg:top-0 ${close ? 'opacity-100 rotate-180' : ''}`} onClick={handleShow} size={60} />
            <div className='flex justify-center items-center h-[65%] mt-10'>
                <Zoom
                >
                    <img src={`/dokumen/${datas[active]}`} alt="" className='object-contain mx-auto w-[85%] lg:w-[45%] cursor-zoom-in' loading='lazy' />
                </Zoom>
            </div>
            <div className='flex flex-row justify-center items-center w-full h-[10%] px-4 mt-12 gap-3'>
                {
                    datas.map((item, index) => (
                        <button type='button' key={index} className={`h-[100%] transition-all duration-150 ease-in-out opacity-70 hover:scale-105   ${active === index ? 'opacity-100' : ''}`} onClick={() => handleActive(index)}>
                            <img src={`/dokumen/${item}`} alt="" className='object-contain mx-auto w-[100%] h-[100%]' loading='lazy' />
                        </button>
                    ))
                }
            </div>
        </Modal>

    )
}



export default ModalPreviewImg
