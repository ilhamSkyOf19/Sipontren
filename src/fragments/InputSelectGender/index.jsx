import ErrorMessage from '../../components/ErroMessage'
import clsx from 'clsx'

const InputSelectGender = ({ register, error }) => {
    return (
        <div className="w-full flex flex-col justify-start items-start gap-1 md:flex-1/3 lg:w-[40%]">
            <label htmlFor="jenis_kelamin" className="text-md text-slate-900 mb-2 md:text-[1.25rem] lg:text-lg">
                Jenis Kelamin <span className='text-red-500'>*</span>
            </label>
            <select
                {...register}
                className={clsx(
                    "border rounded-md p-2 w-full px-3",
                    error && 'ring-1 ring-red-500 border-red-500'
                )}
            >
                <option value="">Pilih jenis kelamin</option>
                <option value="laki_laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
            </select>


            <ErrorMessage error={error} message={'Pilih jenis kelamin'} />
        </div>
    )
}

export default InputSelectGender
