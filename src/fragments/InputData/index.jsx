import BoxInputData from '../../components/BoxInputData'
import ErrorMessage from '../../components/ErroMessage'
const InputData = ({ error, register, placeholder, nameInput, tipe, label, tipeKeyboard, }) => {
    return (
        <div className='w-full flex flex-col justify-start items-start gap-1 md:flex-1/3 lg:w-[40%]'>
            <label htmlFor={nameInput} className='text-md text-slate-900 mb-2 md:text-[1.25rem] lg:text-lg'>{label}
                <span className='text-red-500'>*</span>
            </label>
            <BoxInputData nameInput={nameInput} tipe={tipe} placeholder={placeholder} tipeKeyboard={tipeKeyboard} error={error} register={register} />

            {/* error message */}
            <ErrorMessage error={error} />

        </div>
    )
}

export default InputData
