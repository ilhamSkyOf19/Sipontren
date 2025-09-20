import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react'
import ErrorMessage from '../../components/ErroMessage';

const InputFileData = ({ label, register, error, clearErrors, setValue, type }) => {
    const fileInputRef = useRef();
    const [fileName, setFileName] = useState('');


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };


    const handleFileChange = (e) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            setFileName(file.name);
            if (type === 'news') {
                setValue("news", files, { shouldValidate: true }); // set & cek validasi
                clearErrors('news');
            } else {
                setValue("thumbnail", files, { shouldValidate: true }); // set & cek validasi
                clearErrors('thumbnail');

            }
        }
    }



    return (
        <div className="w-full flex flex-col justify-start items-start space-y-2 md:flex-1/3">
            <div className='w-full flex flex-row justify-start items-center gap-2'>
                <p className='text-md md:text-[1.25rem] lg:text-lg'>
                    {label} <span className='text-red-500'>*</span>
                </p>

                {/* errror message */}
                <ErrorMessage error={error} />
            </div>
            <button
                type="button"
                onClick={handleButtonClick}
                className="px-5 py-2 bg-secondary-blue text-white rounded-lg hover:bg-blue-700 text-md md:text-lg md:py-3 md:px-7 lg:text-sm"
            >
                Pilih File
            </button>
            <input
                type="file"
                {...register}
                ref={fileInputRef}
                onChange={handleFileChange}
                accept='image/*'
                style={{ display: 'none' }}
            />
            <span className="text-sm text-gray-700 md:text-lg lg:text-sm">
                {fileName ? `File: ${fileName}` : `No File Chosen`}
            </span>
        </div>
    )
}

export default InputFileData
