import SubJudulCenter from "../../components/SubJudulCenter";
import InputSelectGender from "../InputSelectGender"
import useWindowSize from "../../hook/UseWindowSize";
import InputData from "../InputData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StudentValidation } from "../../../validations/student-validation";
import InputFileData from "../InputFileData";
import InputSelectSekolah from "../../components/InputSelectSekolah";
import { useMutation } from "@tanstack/react-query";
import { StudentService } from "../../services/student.service";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const TamplateFormulir = ({ formulir, student }) => {

    // navigate 
    const naviigate = useNavigate();
    // use form 
    const { register, handleSubmit, formState: { errors }, clearErrors, setValue } = useForm({
        values: {
            jenis_sekolah: student?.jenis_sekolah || '',
            nisn: student?.nisn || '',
            nik: student?.nik || '',
            nama_lengkap: student?.nama_lengkap || '',
            usia: String(student?.usia) || '',
            jenis_kelamin: student?.jenis_kelamin || '',
            tempat_lahir: student?.tempat_lahir || '',
            tanggal_lahir: student?.tanggal_lahir || '',
            alamat: student?.alamat || '',
            anak_ke: String(student?.anak_ke) || '',
            jumlah_saudara: String(student?.jumlah_saudara) || '',
            no_telepon: student?.no_telepon || '',
            asal_sekolah: student?.asal_sekolah || '',
            alamat_sekolah_asal: student?.alamat_sekolah_asal || '',
            nama_lengkap_ayah: student?.nama_lengkap_ayah || '',
            nama_lengkap_ibu: student?.nama_lengkap_ibu || '',
            pekerjaan_ayah: student?.pekerjaan_ayah || '',
            pekerjaan_ibu: student?.pekerjaan_ibu || '',
            alamat_ayah: student?.alamat_ayah || '',
            alamat_ibu: student?.alamat_ibu || '',
            nama_lengkap_wali: student?.nama_lengkap_wali || '',
            foto_formal: undefined,
            fc_akta_kelahiran: undefined,
            foto_kk: undefined,
            fc_ktp: undefined,
            fc_kis_kip: undefined,
        },
        resolver: zodResolver(formulir && student ? StudentValidation.UPDATE : StudentValidation.CREATE),
    })

    // mutation 
    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data) => {
            if (formulir === 'update' && student) {
                return StudentService.update(data, student.id)
            } else {
                return StudentService.create(data)
            }
        },
        onSuccess: (data) => {
            console.log(data)
            return naviigate('/admin/calon-santri')
        },
        onError: (error) => {
            // cek error zod 
            if (error instanceof AxiosError) {
                console.log(error.response)
            }
            console.log(error)
        }
    })

    console.log("Form errors:", errors);



    // console.log(data.fc_ktp)


    // width 
    // const windowSize = useWindowSize();


    // handle submit 
    const onSubmit = async (data) => {
        try {
            // if (!data) return;

            console.log(data)

            const formData = new FormData();

            // field string / enum
            formData.append("jenis_sekolah", data.jenis_sekolah);
            formData.append("nisn", data.nisn);
            formData.append("nik", data.nik);
            formData.append("nama_lengkap", data.nama_lengkap);
            formData.append("usia", data.usia);
            formData.append("jenis_kelamin", data.jenis_kelamin);
            formData.append("tempat_lahir", data.tempat_lahir);
            formData.append("tanggal_lahir", data.tanggal_lahir);
            formData.append("alamat", data.alamat);
            formData.append("anak_ke", data.anak_ke);
            formData.append("jumlah_saudara", data.jumlah_saudara);
            formData.append("no_telepon", data.no_telepon);
            formData.append("asal_sekolah", data.asal_sekolah);
            formData.append("alamat_sekolah_asal", data.alamat_sekolah_asal);
            formData.append("nama_lengkap_ayah", data.nama_lengkap_ayah);
            formData.append("nama_lengkap_ibu", data.nama_lengkap_ibu);

            formData.append("nama_lengkap_wali", data.nama_lengkap_wali || 'tidak ada');

            // field file (ambil file pertama dari FileList)
            if (data.foto_formal?.[0]) {
                formData.append("foto_formal", data.foto_formal[0]);
            }
            if (data.fc_akta_kelahiran?.[0]) {
                formData.append("fc_akta_kelahiran", data.fc_akta_kelahiran[0]);
            }
            if (data.foto_kk?.[0]) {
                formData.append("foto_kk", data.foto_kk[0]);
            }
            if (data.fc_ktp?.[0]) {
                formData.append("fc_ktp", data.fc_ktp[0]);
            }
            if (data.fc_kis_kip?.[0]) {
                formData.append("fc_kis_kip", data.fc_kis_kip[0]);
            }

            // kirim ke backend
            await mutateAsync(formData);
        } catch (error) {
            console.error(error);
        }
    };






    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-start items-center pt-12 '>
            <div className='w-full flex-col justify-center items-center mb-12'>
                {
                    formulir === 'update' ? (
                        <SubJudulCenter title="Update Data Calon Santri" />
                    ) : (
                        <SubJudulCenter title="Formulir Pendaftaran" />
                    )
                }
            </div>
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col justify-start items-center px-4 gap-2 pt-10 pb-12 md:flex-row md:flex-wrap md:gap-4 lg:flex-col lg:items-start lg:px-12 lg:gap-2'>
                <p className='w-full text-sm text-slate-600 md:text-lg lg:text-sm'>*Pilih sesuai jenis sekolah</p>

                {/* jenis sekolah */}
                <InputSelectSekolah
                    register={register("jenis_sekolah")}
                    error={errors.jenis_sekolah}
                />

                {/* NISN */}
                <InputData
                    register={register("nisn")}
                    error={errors.nisn}
                    placeholder="Masukan nomor NISN"
                    nameInput="nisn"
                    tipe="text"
                    label="NISN"
                    tipeKeyboard="numeric"
                />

                {/* NIK */}
                <InputData
                    register={register("nik")}
                    error={errors.nik}
                    placeholder="Masukan nomor NIK"
                    nameInput="nik"
                    tipe="text"
                    label="NIK"
                    tipeKeyboard="numeric"
                />

                {/* Nama Lengkap */}
                <InputData
                    register={register("nama_lengkap")}
                    error={errors.nama_lengkap}
                    placeholder="Masukan nama lengkap"
                    nameInput="nama_lengkap"
                    tipe="text"
                    label="Nama Lengkap"
                    tipeKeyboard="text"
                />

                {/* Input Gender (pakai select, karena enum) */}
                <InputSelectGender
                    register={register("jenis_kelamin")}
                    error={errors.jenis_kelamin}
                />

                {/* Usia */}
                <InputData
                    register={register("usia")}
                    error={errors.usia}
                    placeholder="Masukan usia"
                    nameInput="usia"
                    tipe="text"
                    label="Usia"
                    tipeKeyboard="numeric"
                />

                {/* Tempat Lahir */}
                <InputData
                    register={register("tempat_lahir")}
                    error={errors.tempat_lahir}
                    placeholder="Masukan tempat lahir"
                    nameInput="tempat_lahir"
                    tipe="text"
                    label="Tempat Lahir"
                    tipeKeyboard="text"
                />

                {/* Tanggal Lahir */}
                <InputData
                    register={register("tanggal_lahir")}
                    error={errors.tanggal_lahir}
                    placeholder="Masukan tanggal lahir"
                    nameInput="tanggal_lahir"
                    tipe="date"
                    label="Tanggal Lahir"
                    tipeKeyboard="text"
                />

                {/* Alamat */}
                <InputData
                    register={register("alamat")}
                    error={errors.alamat}
                    placeholder="Masukan alamat"
                    nameInput="alamat"
                    tipe="text"
                    label="Alamat"
                    tipeKeyboard="text"
                />

                {/* Anak Ke */}
                <InputData
                    register={register("anak_ke")}
                    error={errors.anak_ke}
                    placeholder="Masukan anak ke"
                    nameInput="anak_ke"
                    tipe="text"
                    label="Anak Ke"
                    tipeKeyboard="numeric"
                />

                {/* Jumlah Saudara */}
                <InputData
                    register={register("jumlah_saudara")}
                    error={errors.jumlah_saudara}
                    placeholder="Masukan jumlah saudara"
                    nameInput="jumlah_saudara"
                    tipe="text"
                    label="Jumlah Saudara"
                    tipeKeyboard="numeric"
                />

                {/* Nomor Telepon */}
                <InputData
                    register={register("no_telepon")}
                    error={errors.no_telepon}
                    placeholder="Masukan nomor telepon aktif"
                    nameInput="no_telepon"
                    tipe="text"
                    label="Nomor Telepon / WA"
                    tipeKeyboard="numeric"
                />

                {/* Asal Sekolah */}
                <InputData
                    register={register("asal_sekolah")}
                    error={errors.asal_sekolah}
                    placeholder="Masukan asal sekolah"
                    nameInput="asal_sekolah"
                    tipe="text"
                    label="Asal Sekolah"
                    tipeKeyboard="text"
                />

                {/* Alamat Sekolah Asal */}
                <InputData
                    register={register("alamat_sekolah_asal")}
                    error={errors.alamat_sekolah_asal}
                    placeholder="Masukan alamat sekolah asal"
                    nameInput="alamat_sekolah_asal"
                    tipe="text"
                    label="Alamat Sekolah Asal"
                    tipeKeyboard="text"
                />

                {/* Nama Ayah */}
                <InputData
                    register={register("nama_lengkap_ayah")}
                    error={errors.nama_lengkap_ayah}
                    placeholder="Masukan nama lengkap ayah"
                    nameInput="nama_lengkap_ayah"
                    tipe="text"
                    label="Nama Lengkap Ayah"
                    tipeKeyboard="text"
                />

                {/* Nama Ibu */}
                <InputData
                    register={register("nama_lengkap_ibu")}
                    error={errors.nama_lengkap_ibu}
                    placeholder="Masukan nama lengkap ibu"
                    nameInput="nama_lengkap_ibu"
                    tipe="text"
                    label="Nama Lengkap Ibu"
                    tipeKeyboard="text"
                />

                {/* Nama Wali */}
                <InputData
                    register={register("nama_lengkap_wali")}
                    error={errors.nama_lengkap_wali}
                    placeholder="Masukan nama lengkap wali"
                    nameInput="nama_lengkap_wali"
                    tipe="text"
                    label="Nama Lengkap Wali (jika ada)"
                    tipeKeyboard="text"
                    wali={true}
                />

                {/* Foto Formal */}
                <InputFileData
                    label="Foto Formal"
                    register={register("foto_formal")}
                    error={errors.foto_formal}
                    setValue={setValue}
                    clearErrors={clearErrors}
                    type={'foto_formal'}
                />

                {/* FC Akta Kelahiran */}
                <InputFileData
                    label="Fotokopi Akta Kelahiran"
                    register={register("fc_akta_kelahiran")}
                    error={errors.fc_akta_kelahiran}
                    setValue={setValue}
                    clearErrors={clearErrors}
                    type={'fc_akta_kelahiran'}
                />

                {/* Foto KK */}
                <InputFileData
                    label="Foto KK"
                    register={register("foto_kk")}
                    error={errors.foto_kk}
                    setValue={setValue}
                    clearErrors={clearErrors}
                    type={'foto_kk'}
                />

                {/* FC KTP */}
                <InputFileData
                    label="Fotokopi KTP"
                    register={register("fc_ktp")}
                    error={errors.fc_ktp}
                    setValue={setValue}
                    clearErrors={clearErrors}
                    type={'fc_ktp'}
                />

                {/* FC KIP/KIS */}
                <InputFileData
                    label="Fotokopi KIP/KIS"
                    register={register("fc_kis_kip")}
                    error={errors.fc_kis_kip}
                    setValue={setValue}
                    clearErrors={clearErrors}
                    type={'fc_kis_kip'}
                />


                <div className='w-full flex flex-col justify-start items-start gap-4 mt-4'>
                    <p className='text-xs md:text-lg lg:text-sm'>*Pastikan data yang anda masukan sudah benar</p>
                    <button type="submit" disabled={isPending} className="w-full py-3 bg-primary-blue text-white rounded-lg hover:bg-secondary-blue hover:duration-200 text-md md:text-2xl md:py-4.5 cursor-pointer" onClick={() => console.log('klik')}>Kirim</button>
                </div>
            </form>

        </div >
    )
}

export default TamplateFormulir