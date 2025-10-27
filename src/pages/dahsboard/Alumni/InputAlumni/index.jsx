import { useNavigate, useLoaderData } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

// layout
import LayoutDataPages from '../../../../layouts/LayoutDataPages'

// components
import ButtonKembali from '../../../../components/ButtonKembali'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import InputData from '../../../../fragments/InputData'
import InputFileData from '../../../../fragments/InputFileData'

// services & validation
import { AlumniService } from '../../../../services/alumni.service'
import { AlumniValidation } from '../../../../../validations/alumni-validation'


const InputAlumni = () => {
    const data = useLoaderData();

    if (data && !data.success) {
        console.log(data.message)
    }

    return (
        <LayoutDataPages header={'Alumni'}>
            <div className='w-full min-h-[100vh] pt-24 px-5 flex flex-col justify-start items-start gap-4'>
                <h2 className='w-full text-center text-3xl font-bold text-black'>
                    Tambah Data Alumni
                </h2>

                {/* form */}
                <FormInput alumni={data?.data} />
            </div>
        </LayoutDataPages>
    )
}


const FormInput = ({ alumni }) => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm({
        values: {
            name: alumni?.name || '',
            angkatan: alumni?.angkatan || '',
            description: alumni?.description || '',
            img_alumni: undefined,
        },
        resolver: zodResolver(alumni ? AlumniValidation.UPDATE : AlumniValidation.CREATE)
    })


    // mutation
    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data) => {
            if (alumni) {
                return AlumniService.update(data, alumni.id)
            } else {
                return AlumniService.create(data)
            }
        },
        onSuccess: (data) => {
            console.log(data)
            navigate('/admin/alumni')
        },
        onError: (error) => {
            console.log(error)
        }
    })


    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            formData.append('name', data.name);
            formData.append('angkatan', data.angkatan);
            formData.append('description', data.description);

            if (data.img_alumni && data.img_alumni.length > 0) {
                formData.append('img_alumni', data.img_alumni[0]);
            }

            await mutateAsync(formData);

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className='w-full flex flex-col justify-start items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">

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

                {/* Angkatan */}
                <InputData
                    register={register("angkatan")}
                    error={errors.angkatan}
                    placeholder="Masukan tahun angkatan"
                    nameInput="angkatan"
                    tipe="text"
                    label="Angkatan"
                    tipeKeyboard="numeric"
                />

                {/* Deskripsi */}
                <InputData
                    register={register("description")}
                    error={errors.description}
                    placeholder="Masukan deskripsi singkat"
                    nameInput="description"
                    tipe="text"
                    label="Deskripsi"
                    tipeKeyboard="text"
                />

                {/* Foto */}
                <InputFileData
                    label="Foto Alumni"
                    register={register("img_alumni")}
                    error={errors.img_alumni}
                    setValue={setValue}
                    clearErrors={clearErrors}
                    type={'img_alumni'}
                />

                {/* Buttons */}
                <div className='w-full flex flex-row justify-between items-center gap-2 mt-10'>
                    <ButtonKembali url={'/admin/alumni'} />
                    <ButtonSubmit disable={isPending} />
                </div>
            </form>
        </div>
    )
}

export default InputAlumni
