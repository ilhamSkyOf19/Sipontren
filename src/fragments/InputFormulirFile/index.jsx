import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react'

const InputFormulirFile = ({ label, fileAction, accept, dataFile }) => {
    const fileInputRef = useRef();
    const [fileName, setFileName] = useState('');


    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            fileAction(file);
        }
    }

    useEffect(() => {
        if (dataFile) {
            setFileName(dataFile)
        }
    }, [dataFile])

    return (
        <div className="w-full flex flex-col justify-start items-start space-y-2 md:flex-1/3">
            <p className='text-md md:text-[1.25rem] lg:text-lg'>{label}</p>
            <button
                type="button"
                onClick={handleButtonClick}
                className="px-5 py-2 bg-secondary-blue text-white rounded-lg hover:bg-blue-700 text-md md:text-lg md:py-3 md:px-7 lg:text-sm"
            >
                Pilih File
            </button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept={accept}
                style={{ display: 'none' }}
            />
            <span className="text-sm text-gray-700 md:text-lg lg:text-sm">
                {fileName ? `File: ${fileName}` : `No File Chosen`}
            </span>
        </div>
    )
}

export default InputFormulirFile
