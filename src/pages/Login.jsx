import React from 'react'
import logo from '../assets/icons/file_thumb.png'
import BlobSvg from '../assets/svg/blobSvg'
import TextSpace from '../components/text/TextSpace'
import BoxInputAuth from '../fragments/BoxInputAuth'
import { useState } from 'react'
const Login = () => {




    return (
        <div className='flex flex-col justify-start items-center w-full px-4 py-12 relative max-h-[100vh] overflow-hidden'>
            <div className='w-[240%] absolute -top-100'>
                <BlobSvg />
            </div>
            <Thumb />
            <ContainerForm />


        </div>
    )
}



// thumb

const Thumb = () => {
    return (
        <div className='w-[100%] flex flex-row items-center justify-center h-full z-20 gap-5 mb-12'>

            <div className='w-[90%] flex flex-col justify-center items-start'>
                <div className='w-[100%] flex flex-row justify-start items-center gap-3 mb-2.5'>
                    <div className='w-[20%]'>
                        <img src={logo} alt="" className='w-[100%] h-[100%]' loading='lazy' />
                    </div>
                    <TextSpace text={'SIPONTREN'} custom={{ color: '#fff', fontWeight: 'bold', fontStyle: 'normal', fontSize: '2rem' }} />
                </div>
                <div className='w-[100%] h-[2px] bg-primary-yellow mb-1'></div>
                <TextSpace text={'Sistem Informasi Pondok Pesantren'} />
                {/* <TextSpace text={'Pondok Pesantren'} /> */}
                <TextSpace text={'Muhammadiyah Al-Amin Seputih Banyak'} custom={{ color: '#fff', fontWeight: 'normal', fontStyle: 'normal' }} />
            </div>
        </div>
    )
}


// container form input 
const ContainerForm = () => {
    const [hide, setHite] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleHide = () => {
        setHite((prev) => !prev)
    }


    // handle username 
    const handleUsername = (e) => {
        const { value } = e.target
        setUsername(value)
    }

    // handle password 
    const handlePassword = (e) => {
        const { value } = e.target
        setPassword(value)
    }
    return (
        <div className='w-full flex flex-col justify-start items-center z-10 bg-white min-h-[60vh] shadow-2xl rounded-3xl px-7 py-8'>
            <p className='relative text-3xl font-semibold text-primary-blue w-full text-center mb-9  before:absolute before:bg-primary-yellow before:w-[28%] before:h-[0.8px] before:left-1 before:top-1/2 after:absolute after:bg-primary-yellow after:w-[28%] after:h-[0.8px] after:right-1 after:top-1/2'>Login</p>
            {/* username */}
            <BoxInputAuth tipe={'text'} placeholder={'Username'} nameInput={'username'} value={username} handleChange={handleUsername} max={100} tipeKeyboard={'default'} borderStyle={'border-secondary-blue'} />

            {/* password */}
            <BoxInputAuth tipe={hide ? 'password' : 'text'} placeholder={'Password'} nameInput={'password'} value={password} handleChange={handlePassword} max={100} tipeKeyboard={'default'} borderStyle={'border-secondary-blue'} hide={hide} handleHide={handleHide} password={true} />

            <ButtonLogin />

            {/* highlight */}
            <p className='text-xs text-primary-blue mt-6 text-center'>
                " Sistem Informasi Pondok Pesantren Al-Amin Seputih Banyak - Lampung Tengah "
            </p>
            <p className='text-xs text-primary-blue text-center'>
                " Cerdas, Iman, Ilmu dan Akhlak "
            </p>

            {/* logo small */}
            <div className='w-[100%] mt-6 flex justify-center items-center flex-row relative before:absolute before:bg-primary-yellow before:w-[20%] before:h-[0.7px] before:left-12 before:top-1/2 after:absolute after:bg-primary-yellow after:w-[20%] after:h-[0.7px] after:right-12 after:top-1/2'>
                <img src={logo} alt="" className='w-[13%] h-[13%]' loading='lazy' />
            </div>
        </div>
    )
}


const ButtonLogin = () => {
    return (
        <div className='w-full flex flex-row justify-center items-center bg-primary-blue rounded-lg cursor-pointer active:bg-secondary-blue' onClick={() => { }}>
            <p className='text-lg font-semibold text-white py-2 px-6 rounded-xl'>Log in</p>
        </div>
    )
}

export default Login
