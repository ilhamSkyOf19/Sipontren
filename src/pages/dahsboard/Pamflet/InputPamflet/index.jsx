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
import { PamfletValidation } from '../../../../../validations/pamflet-validation'
import { PamfletService } from '../../../../services/pamflet.service'


const InputPamflet = () => {
    const data = useLoaderData();

    if (data && !data.success) {
        console.log(data.message)
    }

    return (
        <LayoutDataPages header={'Pamflet'}>
            <div className='w-full min-h-[100vh] pt-24 px-5 flex flex-col justify-start items-start gap-4'>
                <h2 className='w-full text-center text-3xl font-bold text-black'>
                    Tambah Data Pamflet
                </h2>

                {/* form */}
                <FormInput pamflet={data?.data} />
            </div>
        </LayoutDataPages>
    )
}


const FormInput = ({ pamflet }) => {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm({
        values: {
            name: pamflet?.pamflet || '',
        },
        resolver: zodResolver(PamfletValidation.CREATE)
    })


    // mutation
    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data) => {
            if (pamflet) {
                return PamfletService.update(data, pamflet.id)
            } else {
                return PamfletService.create(data)
            }
        },
        onSuccess: (data) => {
            console.log(data)
            navigate('/admin/pamflet')
        },
        onError: (error) => {
            console.log(error)
        }
    })


    const onSubmit = async (data) => {
        try {
            console.log(data)
            const formData = new FormData();


            if (data.pamflet && data.pamflet.length > 0) {
                formData.append('pamflet', data.pamflet[0]);
            }

            await mutateAsync(formData);

        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className='w-full flex flex-col justify-start items-center'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">


                {/* Foto */}
                <InputFileData
                    label="Foto Pamflet"
                    register={register("pamflet")}
                    error={errors.pamflet}
                    setValue={setValue}
                    clearErrors={clearErrors}
                    type={'pamflet'}
                />

                {/* Buttons */}
                <div className='w-full flex flex-row justify-between items-center gap-2 mt-10'>
                    <ButtonKembali url={'/admin/pamflet'} />
                    <ButtonSubmit disable={isPending} />
                </div>
            </form>
        </div>
    )
}

export default InputPamflet
