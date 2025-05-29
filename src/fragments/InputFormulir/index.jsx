import React from 'react'
import BoxInput from '../../components/BoxInput'
const InputFormulir = ({ value, handleChange, placeholder, nameInput, tipe, label, max, tipeKeyboard, borderStyle, triger }) => {
    return (
        <div className='w-full flex flex-col justify-start items-start gap-1 md:flex-1/3'>
            <label htmlFor={nameInput} className='text-md text-slate-900 mb-2 md:text-[1.25rem]'>{label}</label>
            <BoxInput value={value} handleChange={handleChange} nameInput={nameInput} tipe={tipe} placeholder={placeholder} max={max} tipeKeyboard={tipeKeyboard} borderStyle={borderStyle} />
            <p className='text-[0.7rem] text-red-500 transition-opacity duration-300 md:text-sm' style={triger ? { opacity: 1 } : { opacity: 0 }}>
                {tipeKeyboard === 'numeric' ? '*Hanya angka yang diperbolehkan' : '*Hanya huruf yang diperbolehkan'}
            </p>
        </div>
    )
}

export default InputFormulir
