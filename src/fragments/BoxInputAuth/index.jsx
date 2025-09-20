import { FaLock, FaUser } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import ErrorMessage from '../../components/ErroMessage';

const BoxInputAuth = ({ register, error, tipe, placeholder, nameInput, tipeKeyboard, hide, handleHide, password }) => {




    return (
        <div className='w-full flex flex-col justify-start items-start mb-2.5'>
            <div className={`w-full flex flex-row justify-start items-center py-3 px-4 border border-slate-400 rounded-md gap-3 group focus-within:ring-1 focus-within:ring-primary-blue mb-1`}>
                {
                    password ? (
                        <FaLock className='text-slate-400 text-2xl' />
                    ) : (
                        <FaUser className='text-slate-400 text-xl' />
                    )
                }
                <input
                    {...register}
                    type={tipe}
                    name={nameInput}
                    inputMode={tipeKeyboard}
                    placeholder={placeholder}
                    id={nameInput}
                    className="text-sm outline-none w-full bg-transparent "
                />
                {
                    password && (
                        <div className='flex flex-row justify-center items-center z-10' onClick={() => handleHide()}>
                            {hide ? (
                                <IoEyeOff className='text-slate-400 text-2xl' />
                            ) : (
                                <IoEye className='text-slate-400 text-2xl' />
                            )}
                        </div>
                    )
                }
            </div>

            {/* error message */}
            <ErrorMessage error={error} />
        </div>
    )
}

export default BoxInputAuth
