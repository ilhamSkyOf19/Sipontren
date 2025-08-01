import React from 'react'
import { useState } from 'react'


import SlideDownService from '../../components/SlideDownService'

// font 
import TextSmBlue from '../../components/text/TextSmBlue'
import useWindowSize from '../../hook/UseWindowSize'
import SlideDownServiceDesktop from '../../components/SlideDownServiceDesktop'
const ServiceInfo = () => {
    const window = useWindowSize().width

    const [active, setActive] = useState(1)
    return (
        <div className='w-full h-[72vh] border flex flex-col justify-start items-center rounded-4xl border-secondary-blue pb-0 overflow-hidden lg:flex-row lg:pb-0 lg:justify-start lg:px-6'>
            {window < 1024 ? (
                <>
                    <SlideDownService id={1} active={active} setActive={setActive} title="Waktu Pelayanan Pendaftaran" no="01" first={true} >
                        <div className='w-full px-5 flex flex-col justify-start items-start gap-4 md:pr-20 md:py-6 md:gap-6'>
                            <div className='w-full flex flex-col justify-start items-start gap-1'>
                                <p className='text-sm text-slate-500 md:text-lg'>Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak - Lampung Tengah</p>
                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-1'>
                                <TextSmBlue text="Hari kerja pukul 08.00 - 16.00" custom='font-semibold' />
                                <TextSmBlue text="Pendaftaran Online Buka 24 Jam" custom='font-semibold' />
                            </div>
                        </div>
                    </SlideDownService>
                    <SlideDownService id={2} active={active} setActive={setActive} title="Pendaftaran On Desk" no="02" first={false} >
                        <div className='w-full px-5 flex flex-col justify-start items-start gap-4 md:pr-20 md:py-6 md:gap-6'>
                            <div className='w-full flex flex-col justify-start items-start gap-1'>
                                {/* <TextSmBlue text="Waktu Pelayanan Pendaftaran" /> */}
                                <p className='text-sm text-slate-500 md:text-lg'>Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak - Lampung Tengah</p>
                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-1'>
                                <TextSmBlue text="Hari kerja pukul 08.00 - 16.00" custom='font-semibold' />
                                <TextSmBlue text="Pendaftaran Online Buka 24 Jam" custom='font-semibold' />
                            </div>
                        </div>
                    </SlideDownService>
                    <SlideDownService id={3} active={active} setActive={setActive} title="Syarat Pendaftaran" no="03" first={false} >
                        <div className='w-full px-5 flex flex-col justify-start items-start gap-4 md:py-7'>
                            <TextSmBlue text="Persyaratan" custom='font-semibold' />
                            <div className='w-full pl-2 flex flex-col justify-start items-start gap-4'>
                                <ol className='list-disc list-outside px-5 space-y-1'>
                                    <li className='text-primary-blue text-sm md:text-xl'>Mengisi formulir pendaftaran (online/offline)</li>
                                    <li className='text-primary-blue text-sm md:text-xl'>Foto berwarna (3x4) 4 lembar</li>
                                    <li className='text-primary-blue text-sm md:text-xl'>FC. Akta Kelahiran</li>
                                    <li className='text-primary-blue text-sm md:text-xl'>FC. Kartu Keluarga 3 lembar</li>
                                    <li className='text-primary-blue text-sm md:text-xl'>FC. KTP orang tua, masing-masing 2 lembar</li>
                                    <li className='text-primary-blue text-sm md:text-xl'>FC. KIP/KTS 2 lembar (bila ada)</li>
                                </ol>
                            </div>
                        </div>
                    </SlideDownService>
                    <SlideDownService id={4} active={active} setActive={setActive} title="Pusat Bantuan" no="04" first={false} >
                        <div className='w-full px-5 flex flex-col justify-start items-start gap-2'>
                            <TextSmBlue text="Hubungi Pusat Bantuan" custom='font-semibold' />
                            <div className='w-full flex-col justify-start items-start pl-2'>
                                <p className='text-sm text-slate-500 md:text-xl'> No Telepone / WA : +62 822-7821-9515</p>
                                <p className='text-sm text-slate-500 md:text-xl'>No Telepone / WA : +62 822-7821-9515</p>
                            </div>
                        </div>
                    </SlideDownService>
                </>
            ) : (
                <>
                    <SlideDownServiceDesktop id={1} active={active} setActive={setActive} title="Waktu Pelayanan Pendaftaran" no="01" first={true} >
                        <div className='w-[28rem] pl-5 flex flex-col justify-start items-start py-6 gap-6'>
                            <div className='w-full flex flex-col justify-start items-start gap-1'>
                                <p className='text-sm text-slate-500 md:text-lg'>Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak - Lampung Tengah</p>
                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-1'>
                                <TextSmBlue text="Hari kerja pukul 08.00 - 16.00" custom='font-semibold' />
                                <TextSmBlue text="Pendaftaran Online Buka 24 Jam" custom='font-semibold' />
                            </div>
                        </div>
                    </SlideDownServiceDesktop>
                    <SlideDownServiceDesktop id={2} active={active} setActive={setActive} title="Pendaftaran On Desk" no="02" first={false} >
                        <div className='w-[30rem] px-5 flex flex-col justify-start items-start gap-4 md:pr-20 md:py-6 md:gap-6'>
                            <div className='w-full flex flex-col justify-start items-start gap-1'>
                                {/* <TextSmBlue text="Waktu Pelayanan Pendaftaran" /> */}
                                <p className='text-sm text-slate-500 md:text-lg'>Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak - Lampung Tengah</p>
                            </div>
                            <div className='w-full flex flex-col justify-start items-start gap-1'>
                                <TextSmBlue text="Hari kerja pukul 08.00 - 16.00" custom='font-semibold' />
                                <TextSmBlue text="Pendaftaran Online Buka 24 Jam" custom='font-semibold' />
                            </div>
                        </div>
                    </SlideDownServiceDesktop>
                    <SlideDownServiceDesktop id={3} active={active} setActive={setActive} title="Syarat Pendaftaran" no="03" first={false} >
                        <div className='w-[30rem] px-5 flex flex-col justify-start items-start gap-4 md:pr-20 md:py-6 md:gap-6'>
                            <TextSmBlue text="Persyaratan" custom='font-semibold' />
                            <div className='w-full pl-2 flex flex-col justify-start items-start gap-4'>
                                <ol className='list-disc list-outside px-5 space-y-1'>
                                    <li className='text-primary-blue text-lg'>Mengisi formulir pendaftaran (online/offline)</li>
                                    <li className='text-primary-blue text-lg'>Foto berwarna (3x4) 4 lembar</li>
                                    <li className='text-primary-blue text-lg'>FC. Akta Kelahiran</li>
                                    <li className='text-primary-blue text-lg'>FC. Kartu Keluarga 3 lembar</li>
                                    <li className='text-primary-blue text-lg'>FC. KTP orang tua, masing-masing 2 lembar</li>
                                    <li className='text-primary-blue text-lg'>FC. KIP/KTS 2 lembar (bila ada)</li>
                                </ol>
                            </div>
                        </div>
                    </SlideDownServiceDesktop>
                    <SlideDownServiceDesktop id={4} active={active} setActive={setActive} title="Pusat Bantuan Pendaftaran" no="03" first={false} >
                        <div className='w-[30rem] px-5 flex flex-col justify-start items-start gap-4 md:pr-20 md:py-6 md:gap-6'>
                            <TextSmBlue text="Persyaratan" custom='font-semibold' />
                            <div className='w-full pl-2 flex flex-col justify-start items-start gap-4'>
                                <ol className='list-disc list-outside px-5 space-y-1'>
                                    <li className='text-primary-blue text-lg'>Mengisi formulir pendaftaran (online/offline)</li>
                                    <li className='text-primary-blue text-lg'>Foto berwarna (3x4) 4 lembar</li>
                                    <li className='text-primary-blue text-lg'>FC. Akta Kelahiran</li>
                                    <li className='text-primary-blue text-lg'>FC. Kartu Keluarga 3 lembar</li>
                                    <li className='text-primary-blue text-lg'>FC. KTP orang tua, masing-masing 2 lembar</li>
                                    <li className='text-primary-blue text-lg'>FC. KIP/KTS 2 lembar (bila ada)</li>
                                </ol>
                            </div>
                        </div>
                    </SlideDownServiceDesktop>

                </>

            )}

        </div>
    )
}


export default ServiceInfo
