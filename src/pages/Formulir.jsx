import React, { } from 'react'
// Layout
import LayoutPages from '../layouts/LayoutPages'

// fragments 
import HeaderPage from '../fragments/HeaderPage'


// component 
import { useEffect } from 'react'
import TamplateFormulir from '../fragments/TamplateFormulir'


const Formulir = () => {
    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LayoutPages>
            <HeaderPage whiteText1={'Penerimaan Santri Baru'} whiteText2={''} YellowText={'Tahun Ajaran 2025/2026'} deskripsi={'Kunjungi website PSB Pondok Pesantren Muhammadiyah Al-Amin Seputih Banyak, lengkapi setiap persyaratan, ikuti semua alur pendaftaran dan jadilan bagian dari Pondok Pesantren Muhammadiyah Al-Alim Seputih Banyak.'} />
            <TamplateFormulir formulir={'daftar'} />
        </LayoutPages>
    )
}




export default Formulir
