import { Link } from 'react-router-dom'
import LayoutPages from '../layouts/LayoutPages'

const Success = () => {
    return (
        <LayoutPages noFooter={true}>
            <div className='w-full h-[100vh] flex flex-col justify-center items-center gap-4 bg-primary-blue'>
                {/* big title */}
                <h1 className='w-[90%] text-4xl font-extrabold text-center text-white'>
                    <span className='text-primary-yellow'>Selamat</span> Pendaftaran Anda Berhasil
                </h1>

                {/* description */}
                <p className='w-[85%] text-center text-base font-medium text-white'>Anda akan segera mendapatkan whatsapp verifikasi jika diterima oleh pondok pesantren</p>

                {/* button back */}
                <Link to={'/'} className='px-5 py-4 bg-white text-primary-blue font-bold rounded-xl'>
                    <p>Kembali</p>
                </Link>
            </div>
        </LayoutPages>
    )
}

export default Success
