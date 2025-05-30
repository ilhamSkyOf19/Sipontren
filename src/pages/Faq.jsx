import React from 'react'

// Layouts
import LayoutPages from '../layouts/LayoutPages'
import LayoutSectionBg from '../layouts/LayoutSectionBg'

// component 
import SubJudulCenter from '../components/SubJudulCenter'

// fragments
import HeaderPage from '../fragments/HeaderPage'
import { useEffect } from 'react'


const Faq = () => {

    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <LayoutPages>
            <HeaderPage whiteText1={'FAQ'} whiteText2={''} YellowText={'Sistem Pondok Pesantren Sipontren'} deskripsi={'SIPONTREN (Sistem Informasi Pondok Pesantren) adalah platform berbasis web yang dirancang untuk mempermudah pengelola administrasi dan komunikasi antara pondok pesantren, santri, orang tua, serta masyarakat umum.'} />
            <SectionContent />
        </LayoutPages>
    )
}

// ===================
// content Faq
// ===================


const SectionContent = () => {
    return (
        <LayoutSectionBg pb={12} pt={8} minH={'100vh'} size={'cover'}>
            <div className='w-full flex flex-col justify-start items-center gap-4 px-4'>
                <div className='mb-6'>
                    <SubJudulCenter title="FAQ" />
                </div>
                <CardFaq question={'Apa itu SIPONTREN?'} answer={`SIPONTREN atau Sistem Informasi Pondok Pesantren adalah platform digital yang dirancang untuk memberikan informasi lengkap seputar sekolah, termasuk profil sekolah, visi dan misi, fasilitas, serta layanan lainnya. Selain itu, sistem ini juga menyediakan fitur pendaftaran siswa secara online.`} />
                <CardFaq question={'Apa saja fitur yang tersedia dalam sistem ini?'} answer={`Informasi yang tersedia meliputi: Profil Sekolah:Sejarah, lokasi, dan struktur organisasi sekolah. Visi dan Misi: Gambaran tujuan utama dan misi sekolah dalam mendidik siswa.
                        Fasilitas: Informasi tentang fasilitas yang dimiliki sekolah seperti laboratorium, perpustakaan, lapangan olahraga, dan lainnya.
                        Program Pendidikan: Penjelasan mengenai kurikulum, ekstrakurikuler, dan kegiatan pembelajaran lainnya.
                        Berita dan Pengumuman: Informasi terbaru mengenai kegiatan, prestasi, atau acara di sekolah.`} />
                <div class="bg-sky-200 bg-opacity-50 w-full px-4 py-4 text-sm text-primary-blue md:text-lg">
                    <h2 class="mb-4">Bagaimana cara menggunakan fitur pendaftaran online?</h2>
                    <ol class="list-decimal pl-6 space-y-2 list-outside">
                        <li>
                            Masuk ke menu "Pendaftaran Online" di halaman utama.
                        </li>
                        <li>Isi formulir pendaftaran dengan data siswa, seperti nama lengkap, tanggal lahir, dan informasi kontak.</li>
                        <li>Unggah dokumen yang diperlukan, seperti akta kelahiran dan foto identitas.
                        </li>
                        <li>Klik tombol "Kirim" untuk menyelesaikan pendaftaran.
                        </li>
                        <li>Setelah pendaftaran selesai, Anda akan mendapatkan nomor pendaftaran untuk proses lebih lanjut.</li>
                    </ol>
                </div>
                <CardFaq question={'Apakah pendaftaran online memerlukan biaya?'} answer={`Pendaftaran online biasanya tidak dikenakan biaya. Namun, jika ada biaya administrasi, informasi tersebut akan dijelaskan pada bagian pendaftaran.`} />
                <CardFaq question={'Apakah data pendaftaran aman?'} answer={`Ya, sistem ini menggunakan teknologi keamanan terbaru untuk melindungi data siswa dan orang tua. Informasi yang diberikan hanya digunakan untuk keperluan administrasi sekolah.`} />
                <CardFaq question={'Bagaimana cara mendapatkan informasi lebih lanjut tentang (nama pondok/sipontren)?'} answer={`Anda dapat mengunjungi bagian "Kontak" di SIPONTREN untuk mendapatkan nomor telepon, email, atau alamat lengkap sekolah. Ada juga fitur FAQ tambahan yang dapat membantu menjawab pertanyaan umum.`} />
                <CardFaq question={'Apakah sistem ini dapat diakses di perangkat mobile?'} answer={`Ya, SIPONTREN dirancang untuk dapat diakses di berbagai perangkat, termasuk komputer, tablet, dan smartphone.`} />
                <div class="bg-sky-200 bg-opacity-50 w-full px-4 py-4 text-sm text-primary-blue md:text-lg">
                    <h2 class="mb-4">Apa keuntungan menggunakan SIPONTREN?</h2>
                    <ol class="list-decimal pl-6 space-y-2">
                        <li>Kemudahan Akses: Informasi dapat diakses kapan saja dan di mana saja.</li>
                        <li>Efisiensi: Proses pendaftaran dan administrasi lebih cepat dan praktis.</li>
                        <li>Transparansi: Informasi yang jelas dan mudah dipahami oleh semua pihak.</li>
                    </ol>
                </div>
                <div class="bg-sky-200 bg-opacity-50 w-full px-4 py-4 text-sm text-primary-blue md:text-lg">
                    <h2 class="mb-5">Siapa yang dapat menggunakan sistem ini?</h2>
                    <p>Sistem ini dapat digunakan oleh:</p>
                    <ol class="list-disc pl-6 space-y-2">
                        <li>Calon siswa dan orang tua yang ingin mendaftar ke sekolah.</li>
                        <li>Siswa yang ingin mendapatkan informasi terbaru dari sekolah.</li>
                        <li>Guru dan staf sekolah untuk keperluan administrasi.</li>
                        <li>Masyarakat umum yang ingin mengenal lebih jauh tentang sekolah.</li>
                    </ol>
                </div>
                <div class="w-full py-4 text-sm text-primary-blue md:text-lg">
                    <p>Jika Anda memiliki pertanyaan lain, silakan hubungi pihak sekolah melalui halaman “Kontak” yang tersedia di sistem informasi ini.</p>
                </div>
            </div>
        </LayoutSectionBg >
    )
}


// ==============
// Card Faq
// ==============

const CardFaq = ({ question, answer }) => {
    return (
        <div class="bg-sky-200 bg-opacity-50 w-full px-4 py-4 text-sm text-primary-blue md:text-lg">
            <h2 class="mb-4">{question}</h2>
            <p>{answer}</p>
        </div>
    )
}

export default Faq
