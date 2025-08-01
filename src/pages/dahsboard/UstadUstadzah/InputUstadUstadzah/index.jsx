import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import xss from 'xss'
// layout
import LayoutDataPages from '../../../../layouts/LayoutDataPages'

// route
import { useNavigate, useParams } from 'react-router-dom'

// hook
import useInputWarning from '../../../../hook/useInputWarning'

// fragments
import InputFormulir from '../../../../fragments/InputFormulir'
import InputFormulirFile from '../../../../fragments/InputFormulirFile'
import InputSelectGender from '../../../../fragments/InputSelectGender'
import { warningAlert } from '../../../../utils/warningAlert'


// component 
import ButtonKembali from '../../../../components/ButtonKembali'
import ButtonSubmit from '../../../../components/ButtonSubmit'


// json
import dataUstad from '../../../../jsons/dataUstad.json'
import { handleConfirm } from '../../../../utils/confrimSubmit'


const InputUstadUstadzah = () => {
    // state 
    const [data, setData] = useState({});
    // get id
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const result = dataUstad.find(item => item.id === Number(id));
            if (result) {
                setData(result);
            }
        } else {
            setData({});
        }
    }, [id])


    return (
        <LayoutDataPages header={'Ustad Ustadzah'}>
            <div className='w-full w-h-[100vh] pt-24 px-5 flex flex-col justify-start items-start'>
                <h2 className='w-full text-center text-3xl font-bold text-black'>
                    Tambah Data Ustad Ustadzah
                </h2>

                {/* container input */}
                <InputData data={data} />
            </div>
        </LayoutDataPages>
    )
}

// input data
const InputData = ({ data }) => {
    const navigate = useNavigate()
    // state 
    const [input, setInput] = useState({
        nama: '',
        jenisKelamin: '',
        tempatLahir: '',
        tanggalLahir: '',
        alamat: '',
        nomorTelepon: '',
        email: '',
        jabatan: '',
        img: '',
    })
    const [triger, setTriger] = useState({
        nama: false,
        jabatan: false,
        tempatLahir: false,
        tanggalLahir: false,
        alamat: false,
        nomorTelepon: false,
        email: false
    });


    // set input 
    useEffect(() => {
        if (data) {
            setInput((prev) => ({
                ...prev,
                ...data
            }))
        } else {
            setInput(Object.fromEntries(Object.entries(input).map(key => [key, ''])));
        }
    }, [data])

    // handle input 
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const safeValue = xss(value);

        // update value 
        setInput((prev) => (
            {
                ...prev,
                [name]: safeValue
            }
        ))


        if (name === 'email' || name === 'tanggalLahir' || name === 'alamatLengkap' || name === 'jenisKelamin') return

        // cek nomor telepone 
        if (name === 'nomorTelepon') {
            if (!(/^[0-9]+$/).test(value)) {
                setTriger((prev) => ({
                    ...prev,
                    [name]: true
                }))
            } else {
                setTriger((prev) => ({
                    ...prev,
                    [name]: false
                }))
            }
        } else {
            // cek input 
            if (!(/^[A-Za-z\s]+$/).test(value)) {
                setTriger((prev) => ({
                    ...prev,
                    [name]: true
                }))
            } else {
                setTriger((prev) => ({
                    ...prev,
                    [name]: false
                }))
            }
        }


    }

    // handle input file 
    const handleInputFile = (file) => {
        setInput((prev) => ({
            ...prev,
            img: file.name
        }))
    }

    // handle submit 
    const handleSubmit = () => {
        const inputEmpety = Object.values(input).some(value => value === '');
        const trigerEmpety = Object.values(triger).some(value => value === true);
        if (inputEmpety) {
            // alert
            warningAlert('Data belum lengkap', 'Pastikan semua data sudah terisi dengan benar', 'Cek kembali')
        } else if (trigerEmpety) {
            // alert
            warningAlert('Kesalahan Input', 'Pastikan semua input benar', 'Cek kembali')
        } else {
            const confirm = handleConfirm('/admin/ustad-ustadzah', navigate);
            if (!confirm) return false

            // reset
            setInput(Object.fromEntries(Object.entries(input).map(key => [key, ''])));
            return true
        }
    }


    // confirm



    // warning
    const fields = Object.keys(triger)
    const inputWarnings = fields.reduce((acc, key) => {
        const { inputRef, borderStyle } = useInputWarning(triger[key])
        acc[key] = { inputRef, borderStyle }
        return acc
    }, {})




    return (
        <div className='w-full flex flex-col justify-start items-center '>
            {/* img old */}
            <input
                type="text"
                readOnly
                accept=".jpg, .jpeg, .png"
                className='hidden'
                value={data.img ?? ''}
            />

            {/* input nama */}
            <InputFormulir ref={inputWarnings.nama.inputRef} label={'Nama'} nameInput={'nama'} placeholder={'Masukkan Nama'} tipe={'text'} tipeKeyboard={'text'} handleChange={handleInputChange} value={input.nama} borderStyle={inputWarnings.nama.borderStyle} triger={triger.nama} />
            {/* input jenis kelamin */}
            <InputSelectGender nameInput={'jenisKelamin'} setGender={handleInputChange} gender={input.jenisKelamin.toLowerCase()} />
            {/* input tempat lahir */}
            <InputFormulir ref={inputWarnings.tempatLahir.inputRef} label={'Tempat Lahir'} nameInput={'tempatLahir'} placeholder={'Masukkan Tempat Lahir'} tipe={'text'} tipeKeyboard={'text'} handleChange={handleInputChange} value={input.tempatLahir} borderStyle={inputWarnings.tempatLahir.borderStyle} triger={triger.tempatLahir} />
            {/* input tanggal lahir */}
            <InputFormulir ref={inputWarnings.tanggalLahir.inputRef} label={'Tanggal Lahir'} nameInput={'tanggalLahir'} placeholder={'Masukkan Tanggal Lahir'} tipe={'date'} tipeKeyboard={'date'} handleChange={handleInputChange} value={input.tanggalLahir} borderStyle={inputWarnings.tanggalLahir.borderStyle} triger={triger.tanggalLahir} />
            {/* input alamat */}
            <InputFormulir ref={inputWarnings.alamat.inputRef} label={'Alamat'} nameInput={'alamat'} placeholder={'Masukkan Alamat'} tipe={'text'} tipeKeyboard={'text'} handleChange={handleInputChange} value={input.alamat} borderStyle={inputWarnings.alamat.borderStyle} triger={triger.alamat} />
            {/* input nomor telepon */}
            <InputFormulir ref={inputWarnings.nomorTelepon.inputRef} label={'Nomor Telepon'} nameInput={'nomorTelepon'} placeholder={'Masukkan Nomor Telepon'} tipe={'numeric'} tipeKeyboard={'numeric'} handleChange={handleInputChange} value={input.nomorTelepon} borderStyle={inputWarnings.nomorTelepon.borderStyle} triger={triger.nomorTelepon} />
            {/* input email */}
            <InputFormulir ref={inputWarnings.email.inputRef} label={'Email'} nameInput={'email'} placeholder={'Masukkan Email'} tipe={'email'} tipeKeyboard={'email'} handleChange={handleInputChange} value={input.email} borderStyle={inputWarnings.email.borderStyle} triger={triger.email} />
            {/* input jabatan */}
            <InputFormulir ref={inputWarnings.jabatan.inputRef} label={'Jabatan'} nameInput={'jabatan'} placeholder={'Masukan Jabatan'} tipe={'text'} tipeKeyboard={'text'} handleChange={handleInputChange} value={input.jabatan} borderStyle={inputWarnings.jabatan.borderStyle} triger={triger.jabatan} />
            <InputFormulirFile label={'Foto'} fileAction={handleInputFile} accept={'.jpg, .jpeg, .png'} dataFile={input.img} />

            {/* button */}
            <div className='w-full flex flex-row justify-between items-center gap-2 mt-10'>
                {/* button kembali */}
                <ButtonKembali url={'/admin/ustad-ustadzah'} />

                {/* button submit */}
                <ButtonSubmit handleSubmit={handleSubmit} />
            </div>


        </div>
    )
}

export default InputUstadUstadzah;
