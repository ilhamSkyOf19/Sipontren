import React from 'react'

const InputSelectGender = ({ gender, setGender, nameInput }) => {
    return (
        <div className='w-full flex flex-col justify-start items-start gap-2 relative mb-4 md:flex-1/3 lg:w-[40%]'>
            <label className="block text-md md:text-[1.25rem] lg:text-lg" htmlFor="gender">
                Jenis Kelamin
            </label>
            <select
                id="gender"
                name={nameInput}
                className="w-full py-2.5 px-4 rounded-lg border-[1.5px] text-sm appearance-none border-primary-blue focus:outline-none focus:ring-1 focus:ring-primary-blue focus:border-primary-blue md:py-3 md:text-sm"
                value={gender}
                onChange={setGender}
            >
                <option value="" className='text-slate-400 text-[0.5rem] lg:text-sm'>-- Pilih jenis kelamin --</option>
                <option value="laki-laki" className='text-[0.5rem] lg:text-sm'>Laki-laki</option>
                <option value="perempuan" className='text-[0.5rem] lg:text-sm'>Perempuan</option>
            </select>
            <div className="pointer-events-none absolute top-11 right-4 flex items-center lg:top-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#000000" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>
    )
}

export default InputSelectGender
