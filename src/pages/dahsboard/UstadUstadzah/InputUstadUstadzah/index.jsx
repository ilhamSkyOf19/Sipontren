import { useState, useEffect } from 'react'
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
import { UstadValidation } from '../../../../../validations/ustad-validation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputFileData from '../../../../fragments/InputFileData'
import InputData from '../../../../fragments/InputData'


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
                <FormInput />
            </div>
        </LayoutDataPages>
    )
}

// input data
const FormInput = () => {
    const navigate = useNavigate()

    // use form 
    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm({
        resolver: zodResolver(UstadValidation.CREATE)
    })


    // handle submit
    const onSubmit = (data) => console.log(data);





    return (
        <div className='w-full flex flex-col justify-start items-center '>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-4"
            >
                {/* Nama */}
                <InputData
                    register={register("nama")}
                    error={errors.nama}
                    placeholder="Masukan nama lengkap"
                    nameInput="nama"
                    tipe="text"
                    label="Nama Lengkap"
                    tipeKeyboard="text"
                />

                {/* Jenis Kelamin */}
                <InputSelectGender
                    register={register("jenisKelamin")}
                    error={errors.jenisKelamin} />

                {/* Tempat Lahir */}
                <InputData
                    register={register("tempatLahir")}
                    error={errors.tempatLahir}
                    placeholder="Masukan tempat lahir"
                    nameInput="tempatLahir"
                    tipe="text"
                    label="Tempat Lahir"
                    tipeKeyboard="text"
                />

                {/* Tanggal Lahir */}
                <InputData
                    register={register("tanggalLahir")}
                    error={errors.tanggalLahir}
                    placeholder="Masukan tanggal lahir"
                    nameInput="tanggalLahir"
                    tipe="date"
                    label="Tanggal Lahir"
                    tipeKeyboard="text"
                />

                {/* Alamat */}
                <InputData
                    register={register("alamat")}
                    error={errors.alamat}
                    placeholder="Masukan alamat"
                    nameInput="alamat"
                    tipe="text"
                    label="Alamat"
                    tipeKeyboard="text"
                />

                {/* Nomor Telepon */}
                <InputData
                    register={register("nomorTelepon")}
                    error={errors.nomorTelepon}
                    placeholder="Masukan nomor telepon aktif"
                    nameInput="nomorTelepon"
                    tipe="text"
                    label="Nomor Telepon / WA"
                    tipeKeyboard="numeric"
                />

                {/* Email */}
                <InputData
                    register={register("email")}
                    error={errors.email}
                    placeholder="Masukan alamat email"
                    nameInput="email"
                    tipe="email"
                    label="Email"
                    tipeKeyboard="text"
                />

                {/* Jabatan */}
                <InputData
                    register={register("jabatan")}
                    error={errors.jabatan}
                    placeholder="Masukan jabatan"
                    nameInput="jabatan"
                    tipe="text"
                    label="Jabatan"
                    tipeKeyboard="text"
                />

                {/* Foto (img) */}
                <InputFileData
                    label="Foto"
                    register={register("img")}
                    error={errors.img}
                    setValue={setValue}
                    clearErrors={clearErrors}
                />

                {/* button */}
                <div className='w-full flex flex-row justify-between items-center gap-2 mt-10'>
                    {/* button kembali */}
                    <ButtonKembali url={'/admin/ustad-ustadzah'} />

                    {/* button submit */}
                    <ButtonSubmit handleSubmit={handleSubmit} />
                </div>
            </form>
        </div>
    )

}

export default InputUstadUstadzah;
