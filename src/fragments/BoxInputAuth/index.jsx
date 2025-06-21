import React from 'react'
import { useState } from 'react';
import { FaLock, FaUser } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";

const BoxInputAuth = ({ tipe, placeholder, nameInput, value, handleChange, max, tipeKeyboard, hide, handleHide, borderStyle, password }) => {




    return (
        <div className={`w-full flex flex-row justify-start items-center py-3 px-4 border border-slate-400 rounded-md gap-3 group focus-within:${borderStyle} mb-6`}>
            {
                password ? (
                    <FaLock className='text-slate-400 text-2xl' />
                ) : (
                    <FaUser className='text-slate-400 text-xl' />
                )
            }
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
                className="text-sm"
                style={{ width: '100%', border: 'none', outline: 'none' }}
            />
            {
                password && (
                    <div className='flex flex-row justify-center items-center z-10' onClick={() => handleHide()}>
                        {hide ? (
                            <IoEyeOff className='text-slate-400 text-2xl' />
                        ) : (
                            <IoEye className='text-slate-400 text-2xl' />
                        )}
                    </div>
                )
            }

        </div>
    )
}

export default BoxInputAuth
