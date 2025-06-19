import React, { } from 'react'
import { motion } from 'framer-motion'
// Layout
import LayoutPages from '../layouts/LayoutPages'

// fragments 
import HeaderPage from '../fragments/HeaderPage'


// component 
import SubJudulCenter from '../components/SubJudulCenter'
import { useState } from 'react'
import InputFormulir from '../fragments/InputFormulir'
import { useEffect } from 'react'
import useInputWarning from '../hook/useInputWarning'
import InputSelectGender from '../fragments/InputSelectGender'

import shape from '../assets/shapes/shape.png'
import { useRef } from 'react'
import InputFormulirFile from '../fragments/InputFormulirFile'

const validationRules = {
    nisn: /^\d+$/,
    nik: /^\d+$/,
    usia: /^\d+$/,
    anakKe: /^\d+$/,
    saudara: /^\d+$/,
    nomor: /^\d+$/,
    tempatLahir: /^[A-Za-z\s]+$/,
    asalSekolah: /^[A-Za-z0-9\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    // Tambahkan sesuai kebutuhan
};

const Formulir = () => {
    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LayoutPages>
            <HeaderPage whiteText1={'Penerimaan Santri Baru'} whiteText2={''} YellowText={'Tahun Ajaran 2025/2026'} deskripsi={'Kunjungi website PSB Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak, lengkapi setiap persyaratan, ikuti semua alur pendaftaran dan jadilan bagian dari Pondok Pesantren Muhammadiyah Al-Alim Seputih Banyak.'} />
            <SectionFormulir />
        </LayoutPages>
    )
}



// =================
// Section Formulir
// =================

const SectionFormulir = () => {
    const [value, setValue] = useState({
        nisn: '',
        nik: '',
        namaLengkap: '',
        usia: '',
        email: '',
        tempatLahir: '',
        tanggalLahir: '',
        alamat: '',
        anakKe: '',
        saudara: '',
        nomor: '',
        asalSekolah: '',
        alamatSekolahAsal: '',
        namaLengkapAyah: '',
        namaLengkapIbu: '',
        namaLengkapWali: '',
    })
    const [triger, setTriger] = useState({
        nisn: false,
        nik: false,
        namaLengkap: false,
        usia: false,
        email: false,
        tempatLahir: false,
        alamat: false,
        anakKe: false,
        saudara: false,
        nomor: false,
        asalSekolah: false,
        alamatSekolahAsal: false,
        namaLengkapAyah: false,
        namaLengkapIbu: false,
        namaLengkapWali: false,
    })

    const [gender, setGender] = useState('')
    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     setValue(value);
    //     const cleanValue = value.trim(); // hapus spasi di awal & akhir
    //     const inputNisnCek = /^\d+$/.test(cleanValue || ''); // cocokkan hanya angka
    //     if (inputNisnCek) {
    //         setTriger(false)
    //     } else {
    //         setTriger(true)
    //     }

    // };

    // ==================
    // Handle Input
    // ==================
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update value
        setValue((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name !== 'tanggalLahir' || name !== 'alamat' || name !== 'alamatSekolahAsal') {
            // cek input

            if (name === 'namaLengkap' || name === 'namaLengkapAyah' || name === 'namaLengkapIbu' || name === 'namaLengkapWali') {

                const cleanValue = value.trim();
                const isCek = (/^[A-Za-z\s]+$/).test(cleanValue || '');

                // set triger
                if (isCek || cleanValue === '') {
                    setTriger((prev) => ({
                        ...prev,
                        [name]: false
                    }))
                } else {
                    setTriger((prev) => ({
                        ...prev,
                        [name]: true
                    }))
                }

            } else {
                const cleanValue = value.trim();
                const rule = validationRules[name];
                const isCek = rule ? rule.test(cleanValue || '') : true;

                // set triger
                if (isCek || cleanValue === '') {
                    setTriger((prev) => ({
                        ...prev,
                        [name]: false
                    }))
                } else {
                    setTriger((prev) => ({
                        ...prev,
                        [name]: true
                    }))
                }
            }

        }
    }


    // ==================
    // Handle Input Gender 
    // ==================

    const handleChangeGender = (e) => {
        const { value } = e.target;
        setGender(value)
    }


    const [selected, setSelected] = useState('sd');

    const tabs = ['sd', 'smp', 'sma'];
    const index = tabs.indexOf(selected);



    // useRef 
    const { inputRef, borderStyle } = useInputWarning(triger.nisn);
    const { inputRef: inputRefNik, borderStyle: borderStyleNik } = useInputWarning(triger.nik);
    const { inputRef: inputRefNamaLengkap, borderStyle: borderStyleNamaLengkap } = useInputWarning(triger.namaLengkap);
    const { inputRef: inputRefUsia, borderStyle: borderStyleUsia } = useInputWarning(triger.usia);
    const { inputRef: inputRefTempatLahir, borderStyle: borderStyleTempatLahir } = useInputWarning(triger.tempatLahir);
    const { inputRef: inputRefTanggalLahir, borderStyle: borderStyleTanggalLahir } = useInputWarning(triger.tanggalLahir);
    const { inputRef: inputRefAlamat, borderStyle: borderStyleAlamat } = useInputWarning(triger.alamat);
    const { inputRef: inputRefAnakKe, borderStyle: borderStyleAnakKe } = useInputWarning(triger.anakKe);
    const { inputRef: inputRefSaudara, borderStyle: borderStyleSaudara } = useInputWarning(triger.saudara);
    const { inputRef: inputRefNomor, borderStyle: borderStyleNomor } = useInputWarning(triger.nomor);
    const { inputRef: inputRefAsalSekolah, borderStyle: borderStyleAsalSekolah } = useInputWarning(triger.asalSekolah);
    const { inputRef: inputRefAlamatSekolahAsal, borderStyle: borderStyleAlamatSekolahAsal } = useInputWarning(triger.alamatSekolahAsal);
    const { inputRef: inputRefNamaLengkapAyah, borderStyle: borderStyleNamaLengkapAyah } = useInputWarning(triger.namaLengkapAyah);
    const { inputRef: inputRefNamaLengkapIbu, borderStyle: borderStyleNamaLengkapIbu } = useInputWarning(triger.namaLengkapIbu);
    const { inputRef: inputRefNamaLengkapWali, borderStyle: borderStyleNamaLengkapWali } = useInputWarning(triger.namaLengkapWali);








    // =========================
    // Handle File
    // ========================
    // Foto Formal
    const handleFotoFormal = (file) => {
        console.log(file.name)
    }

    // Foto Akta Kelahiran
    const handleFotoAktaKelahiran = (file) => {
        console.log(file.name)
    }

    // Foto Kartu Keluarga
    const handleFotoKartuKeluarga = (file) => {
        console.log(file.name)
    }

    // Foto Copy KTP Ayah / Ibu / Wali
    const handleFotoCopyKtp = (file) => {
        console.log(file.name)
    }

    // Foto KIS / KIP
    const handleFotoKisKip = (file) => {
        console.log(file.name)
    }




    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-center pt-12 '>
            <div className='w-full flex-col justify-center items-center mb-12'>
                <SubJudulCenter title="Formulir Pendaftaran" />
            </div>
            <div className="relative w-[93%] lg:w-[60%]">
                {/* Tab Container */}
                <div className="flex">
                    {tabs.map((tab) => (
                        <p
                            key={tab}
                            onClick={() => setSelected(tab)}
                            className={`relative text-xl font-semibold z-10 py-4 text-center flex-1 cursor-pointer ${selected === tab ? 'text-white' : 'text-black'
                                } md:text-3xl lg:text-lg`}
                        >
                            {tab.toUpperCase()}
                        </p>
                    ))}
                </div>

                {/* Sliding Indicator */}
                <motion.div
                    className="absolute bottom-0 left-0 h-full w-1/3 bg-primary-blue z-0 rounded-t-xl lg:rounded-full lg:w-1/6 lg:left-16"
                    animate={{ x: `${index * 200}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />

            </div>
            <div className='w-full flex flex-col justify-start items-center px-4 gap-2 pt-10 pb-12 md:flex-row md:flex-wrap md:gap-4 lg:flex-col lg:items-start lg:px-12 lg:gap-2'>
                <p className='w-full text-sm text-slate-600 md:text-lg lg:text-sm'>*Pilih sesuai jenis sekolah</p>
                {/* NISN */}
                <InputFormulir ref={inputRef} value={value.nisn} handleChange={handleChange} placeholder={'Masukan nomor NISN'} nameInput={'nisn'} tipe={'text'} label={'NISN'} max={10} tipeKeyboard={'numeric'} borderStyle={borderStyle} triger={triger.nisn} />
                {/* NIK */}
                <InputFormulir ref={inputRefNik} value={value.nik} handleChange={handleChange} placeholder={'Masukan nomor NIK'} nameInput={'nik'} tipe={'text'} label={'NIK'} max={16} tipeKeyboard={'numeric'} borderStyle={borderStyleNik} triger={triger.nik} />
                {/* NIK */}
                <InputFormulir ref={inputRefNamaLengkap} value={value.namaLengkap} handleChange={handleChange} placeholder={'Masukan nama lengkap'} nameInput={'namaLengkap'} tipe={'text'} label={'Nama Lengkap'} max={30} tipeKeyboard={'text'} borderStyle={borderStyleNamaLengkap} triger={triger.namaLengkap} />
                {/* Input Gender */}
                <InputSelectGender gender={gender} setGender={handleChangeGender} />
                {/* Usia */}
                <InputFormulir ref={inputRefUsia} value={value.usia} handleChange={handleChange} placeholder={'Masukan Usia'} nameInput={'usia'} tipe={'text'} label={'Usia'} max={2} tipeKeyboard={'text'} borderStyle={borderStyleUsia} triger={triger.usia} />
                {/* Tempat Lahir */}
                <InputFormulir ref={inputRefTempatLahir} value={value.tempatLahir} handleChange={handleChange} placeholder={'Masukan Tempat Lahir'} nameInput={'tempatLahir'} tipe={'text'} label={'Tempat Lahir'} max={30} tipeKeyboard={'text'} borderStyle={borderStyleTempatLahir} triger={triger.tempatLahir} />
                {/* Tanggal Lahir */}
                <InputFormulir ref={inputRefTanggalLahir} value={value.tanggalLahir} handleChange={handleChange} placeholder={'Masukan tanggal lahir'} nameInput={'tanggalLahir'} tipe={'date'} label={'Tanggal Lahir'} tipeKeyboard={'text'} borderStyle={borderStyleTanggalLahir} triger={triger.tanggalLahir} />
                {/* Alamat */}
                <InputFormulir ref={inputRefAlamat} value={value.alamat} handleChange={handleChange} placeholder={'Masukan alamat'} nameInput={'alamat'} tipe={'text'} label={'Alamat'} tipeKeyboard={'text'} borderStyle={borderStyleAlamat} triger={triger.alamat} max={100} />
                {/* Anak ke */}
                <InputFormulir ref={inputRefAnakKe} value={value.anakKe} handleChange={handleChange} placeholder={'Masukan anak ke'} nameInput={'anakKe'} tipe={'numeric'} label={'Anak Ke'} tipeKeyboard={'text'} borderStyle={borderStyleAnakKe} triger={triger.anakKe} max={2} />
                {/* Jumlah Saudara */}
                <InputFormulir ref={inputRefSaudara} value={value.saudara} handleChange={handleChange} placeholder={'Masukan saudara'} nameInput={'saudara'} tipe={'numeric'} label={'Jumlah Saudara'} tipeKeyboard={'text'} borderStyle={borderStyleSaudara} triger={triger.saudara} max={2} />
                {/* Nomor Telepon / WA */}
                <InputFormulir ref={inputRefNomor} value={value.nomor} handleChange={handleChange} placeholder={'Masukan nomor telepon aktif'} nameInput={'nomor'} tipe={'numeric'} label={'Nomor Telepon / WA'} tipeKeyboard={'numeric'} borderStyle={borderStyleNomor} triger={triger.nomor} max={13} />
                {/* Asal Sekolah */}
                <InputFormulir ref={inputRefAsalSekolah} value={value.asalSekolah} handleChange={handleChange} placeholder={`Masukan asal sekolah *${selected}`} nameInput={'asalSekolah'} tipe={'text'} label={`Asal Sekolah *${selected.toUpperCase()}`} tipeKeyboard={'text'} borderStyle={borderStyleAsalSekolah} triger={triger.asalSekolah} max={100} />
                {/* Alamat Sekolah Asal */}
                <InputFormulir ref={inputRefAlamatSekolahAsal} value={value.alamatSekolahAsal} handleChange={handleChange} placeholder={`Masukan alamat sekolah asal`} nameInput={'alamatSekolahAsal'} tipe={'text'} label={`Alamat Sekolah Asal`} tipeKeyboard={'text'} borderStyle={borderStyleAlamatSekolahAsal} triger={triger.alamatSekolahAsal} max={100} />
                {/* Nama Lengkap Ayah */}
                <InputFormulir ref={inputRefNamaLengkapAyah} value={value.namaLengkapAyah} handleChange={handleChange} placeholder={`Masukan nama lengkap ayah`} nameInput={'namaLengkapAyah'} tipe={'text'} label={`Nama Lengkap Ayah`} tipeKeyboard={'text'} borderStyle={borderStyleNamaLengkapAyah} triger={triger.namaLengkapAyah} max={100} />
                {/* Nama Lengkap Ibu */}
                <InputFormulir ref={inputRefNamaLengkapIbu} value={value.namaLengkapIbu} handleChange={handleChange} placeholder={`Masukan nama lengkap Ibu`} nameInput={'namaLengkapIbu'} tipe={'text'} label={`Nama Lengkap Ibu`} tipeKeyboard={'text'} borderStyle={borderStyleNamaLengkapIbu} triger={triger.namaLengkapIbu} max={100} />
                {/* Nama Lengkap Wali */}
                <InputFormulir ref={inputRefNamaLengkapWali} value={value.namaLengkapWali} handleChange={handleChange} placeholder={`Masukan nama lengkap Wali`} nameInput={'namaLengkapWali'} tipe={'text'} label={`Nama Lengkap Wali`} tipeKeyboard={'text'} borderStyle={borderStyleNamaLengkapWali} triger={triger.namaLengkapWali} max={100} />

                {/* Input File Foto Formal  */}
                <div className='w-full flex flex-col justify-start items-start gap-6 mb-6 md:flex-row md:flex-wrap  lg:flex-col'>
                    <InputFormulirFile label={'Foto Formal'} fileAction={handleFotoFormal} accept={'.jpg,.jpeg,.png'} />

                    {/* Input File Foto Akta Kelahiran */}
                    <InputFormulirFile label={'Foto Akta Kelahiran'} fileAction={handleFotoAktaKelahiran} accept={'.jpg,.jpeg,.png'} />

                    {/* Input File Foto Kartu Keluarga*/}
                    <InputFormulirFile label={'Foto Kartu Keluarga'} fileAction={handleFotoKartuKeluarga} accept={'.jpg,.jpeg,.png'} />

                    {/* Input File Foto Copy KTP */}
                    <InputFormulirFile label={'Foto Copy KTP Ayah / Ibu / Wali'} fileAction={handleFotoCopyKtp} accept={'.jpg,.jpeg,.png'} />

                    {/* Input File Foto KIS / KTP */}
                    <InputFormulirFile label={'Foto KIS / KTP'} fileAction={handleFotoKisKip} accept={'.jpg,.jpeg,.png'} />
                </div>

                <div className='w-full flex flex-col justify-start items-start gap-4'>
                    <p className='text-xs md:text-lg lg:text-sm'>*Pastikan data yang anda masukan sudah benar</p>
                    <button type="submit" className="w-full py-3 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue hover:duration-200 text-md md:text-2xl md:py-4.5 cursor-pointer">Kirim</button>
                </div>
            </div>

        </div >
    )
}


export default Formulir
