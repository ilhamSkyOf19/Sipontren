import clsx from 'clsx'


const BoxInputData = ({ register, placeholder, nameInput, tipe, tipeKeyboard, borderStyle, error }) => {
    return (
        <input
            {...register}
            type={tipe}
            inputMode={tipeKeyboard}
            name={nameInput}
            placeholder={placeholder}
            id={nameInput}
            className={clsx(
                "border px-4 py-2.5 w-full rounded-lg focus:outline-none focus:ring-1 text-sm md:text-lg md:py-3 lg:text-sm",
                error ? "ring-1 ring-red-500 border-red-500" : "focus-within:ring-primary-blue focus-within:border-primary-blue border-slate-400",
            )}
        />
    )
}

export default BoxInputData
