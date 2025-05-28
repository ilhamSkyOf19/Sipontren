import React from 'react'

const BoxInput = ({ tipe, placeholder, nameInput, value, handleChange, max, tipeKeyboard, borderStyle }) => {
    return (
        <input
            type={tipe}
            inputMode={tipeKeyboard}
            name={nameInput}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            id={nameInput}
            maxLength={max}
            required={true}
            className="border px-4 py-2.5 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-blue focus:border-primary-blue text-sm"
            style={borderStyle}
        />
    )
}

export default BoxInput
