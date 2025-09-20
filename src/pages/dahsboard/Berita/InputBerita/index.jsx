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
import { useMutation } from '@tanstack/react-query'
import { NewsService } from '../../../../services/news.service'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

const InputBerita = () => {


    // loader 
    const news = useLoaderData();

    console.log(news)


    // use form 
    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm({
        values: {
            title: news?.title || '',
            category: news?.category || '',
            content: news?.content || '',
            news: undefined,
        },
        resolver: zodResolver(news ? BeritaValidation.UPDATE : BeritaValidation.CREATE)
    })


    // navigate 
    const navigate = useNavigate()



    // mutatation 
    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data) => {
            if (!news) {
                return NewsService.create(data)
            } else {
                return NewsService.update(data, news.id)
            }
        },
        onError: (errors) => {
            if (errors instanceof AxiosError) {

                console.log(errors.response)
                console.log(errors)
                return console.log(errors.response)
            }

            return console.log(errors)
        },
        onSuccess: (data) => {
            console.log(data)
            return navigate('/admin/berita')

        }
    })



    // handle submit
    const onSubmit = async (data) => {
        try {

            // cek data 
            if (!data) return;

            // form data 
            const formData = new FormData();

            formData.append('title', data.title);
            formData.append('category', data.category);
            formData.append('content', data.content);

            // cek news
            if (data.news && data.news.length > 0) {
                // User upload file baru
                formData.append("news", data.news[0]);
            }


            // mutate 
            await mutateAsync(formData);

        } catch (error) {
            console.log(error)
        }

    };



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
                        register={register('news')}
                        error={errors.news}
                        clearErrors={clearErrors}
                        setValue={setValue}
                        type={'news'}

                    />



                    {/* button back & submit */}
                    <div className='w-full flex flex-row justify-center items-start gap-6 mt-6'>
                        {/* back */}
                        <ButtonKembali url={'/admin/berita'} />

                        {/* submit */}
                        <ButtonSubmit disable={isPending} handleSubmit={() => { }} />
                    </div>

                </form>
            </div>
        </LayoutDataPages>
    )
}

export default InputBerita
