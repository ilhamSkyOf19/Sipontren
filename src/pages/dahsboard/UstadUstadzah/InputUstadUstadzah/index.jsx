import { useState, useEffect } from 'react'
// layout
import LayoutDataPages from '../../../../layouts/LayoutDataPages'

// route
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'


// fragments
import InputSelectGender from '../../../../fragments/InputSelectGender'


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
import { useMutation } from '@tanstack/react-query'
import { UstadService } from '../../../../services/ustad.service'


const InputUstadUstadzah = () => {

    // loader 
    const data = useLoaderData();



    // cek data
    if (data && !data.success) {
        console.log(data.message)
    }


    return (
        <LayoutDataPages header={'Ustad Ustadzah'}>
            <div className='w-full w-h-[100vh] pt-24 px-5 flex flex-col justify-start items-start'>
                <h2 className='w-full text-center text-3xl font-bold text-black'>
                    Tambah Data Ustad Ustadzah
                </h2>

                {/* container input */}
                <FormInput ustad={data?.data} />
            </div>
        </LayoutDataPages>
    )
}

// input data
const FormInput = ({ ustad }) => {
    const navigate = useNavigate()

    console.log(ustad)

    // use form 
    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm({
        values: {
            name: ustad?.name || '',
            jenis_kelamin: ustad?.jenis_kelamin || '',
            tempat_lahir: ustad?.tempat_lahir || '',
            tanggal_lahir: ustad?.tanggal_lahir || '',
            alamat: ustad?.alamat || '',
            jabatan: ustad?.jabatan || '',
            no_telepon: ustad?.no_telepon || '',
            ustad_img: undefined,
        },
        resolver: zodResolver(ustad ? UstadValidation.UPDATE : UstadValidation.CREATE)
    })


    // mutation 
    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data) => {
            if (ustad) {
                return UstadService.update(data, ustad.id)
            } else {
                return UstadService.create(data)
            }
        },
        onSuccess: (data) => {
            console.log(data)
            return navigate('/admin/ustad-ustadzah')
        },
        onError: (errors) => {
            console.log(errors)
            return;
        }
    })


    // handle submit
    const onSubmit = async (data) => {
        try {
            // cek data
            // if (!data) return;

            console.log(data)

            // form data 
            const formData = new FormData();


            // name 
            formData.append('name', data.name);

            // jenis kelamin 
            formData.append('jenis_kelamin', data.jenis_kelamin);

            // tempat lahir 
            formData.append('tempat_lahir', data.tempat_lahir);

            // tanggal lahir 
            formData.append('tanggal_lahir', data.tanggal_lahir);

            // alamat 
            formData.append('alamat', data.alamat);

            // no telepon 
            formData.append('no_telepon', data.no_telepon);

            // jabatan 
            formData.append('jabatan', data.jabatan);


            // foto 
            if (data.ustad_img && data.ustad_img.length > 0) {
                formData.append('ustad_img', data.ustad_img[0]);
            }


            console.log(formData);





            // mutate 
            await mutateAsync(formData);
        } catch (error) {
            console.log(error)
        }
    };




    return (
        <div className='w-full flex flex-col justify-start items-center '>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full flex flex-col gap-4"
            >
                {/* Nama */}
                <InputData
                    register={register("name")}
                    error={errors.name}
                    placeholder="Masukan nama lengkap"
                    nameInput="name"
                    tipe="text"
                    label="Nama Lengkap"
                    tipeKeyboard="text"
                />

                {/* Jenis Kelamin */}
                <InputSelectGender
                    register={register("jenis_kelamin")}
                    error={errors.jenis_kelamin} />

                {/* Tempat Lahir */}
                <InputData
                    register={register("tempat_lahir")}
                    error={errors.tempat_lahir}
                    placeholder="Masukan tempat lahir"
                    nameInput="tempat_lahir"
                    tipe="text"
                    label="Tempat Lahir"
                    tipeKeyboard="text"
                />

                {/* Tanggal Lahir */}
                <InputData
                    register={register("tanggal_lahir")}
                    error={errors.tanggal_lahir}
                    placeholder="Masukan tanggal lahir"
                    nameInput="tanggal_lahir"
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
                    register={register("no_telepon")}
                    error={errors.no_telepon}
                    placeholder="Masukan nomor telepon aktif"
                    nameInput="no_telepon"
                    tipe="text"
                    label="Nomor Telepon / WA"
                    tipeKeyboard="numeric"
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
                    register={register("ustad_img")}
                    error={errors.ustad_img}
                    setValue={setValue}
                    clearErrors={clearErrors}
                    type={'ustad'}
                />

                {/* button */}
                <div className='w-full flex flex-row justify-between items-center gap-2 mt-10'>
                    {/* button kembali */}
                    <ButtonKembali url={'/admin/ustad-ustadzah'} />

                    {/* button submit */}
                    <ButtonSubmit handleSubmit={handleSubmit} disable={isPending} />
                </div>
            </form>
        </div>
    )

}

export default InputUstadUstadzah;
