import React from 'react'
import ButtonKembali from '../../../../components/ButtonKembali'
import ButtonSubmit from '../../../../components/ButtonSubmit'
import LayoutDataPages from '../../../../layouts/LayoutDataPages'
import { useForm } from 'react-hook-form'
import InputData from '../../../../fragments/InputData'
import { zodResolver } from '@hookform/resolvers/zod'
import { BeritaValidation } from '../../../../../validations/berita-validation'
import InputCategoryBerita from '../../../../fragments/InputCategoryBerita'
import InputFileData from '../../../../fragments/InputFileData'

const InputBerita = () => {



    // use form 
    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm({
        resolver: zodResolver(BeritaValidation.CREATE)
    })


    // handle submit
    const onSubmit = (data) => console.log(data);



    return (
        <LayoutDataPages header={'Tambah Berita'}>
            <div className='w-full flex flex-col justify-start items-start px-5 pt-24'>
                {/* title content  */}
                <div className='w-full flex flex-row justify-center items-start'>
                    <h2 className='font-bold text-4xl capitalize'>
                        Tambah Berita
                    </h2>
                </div>


                {/* content input */}
                <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col justify-start items-start gap-1 mt-12'>

                    {/* title berita */}
                    <InputData
                        error={errors.title}
                        register={register('title')}
                        placeholder={'Judul Berita'}
                        nameInput={'title'}
                        tipe={'text'}
                        label={'Judul Berita'}
                        tipeKeyboard={'text'}
                    />

                    {/* title berita */}
                    <InputCategoryBerita
                        register={register('category')}
                        error={errors.category}
                        nameInput={'category'}
                    />

                    {/* content berita */}
                    <InputData
                        error={errors.content}
                        register={register('content')}
                        placeholder={'masukan content Berita'}
                        nameInput={'content'}
                        tipe={'text'}
                        label={'content Berita'}
                        tipeKeyboard={'text'}
                    />

                    {/* thumbnail */}
                    <InputFileData
                        label={'Thumbnail Berita'}
                        register={register('thumbnail')}
                        error={errors.thumbnail}
                        clearErrors={clearErrors}
                        setValue={setValue}

                    />



                    {/* button back & submit */}
                    <div className='w-full flex flex-row justify-center items-start gap-6 mt-6'>
                        {/* back */}
                        <ButtonKembali url={'/admin/berita'} />

                        {/* submit */}
                        <ButtonSubmit handleSubmit={() => { }} />
                    </div>

                </form>
            </div>
        </LayoutDataPages>
    )
}

export default InputBerita
