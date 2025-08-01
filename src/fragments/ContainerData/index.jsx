import { IoIosArrowDropdownCircle } from "react-icons/io";

const ContainerData = ({ no, nama, active, handleActive, children }) => {

    return (
        <>
            <div className={`w-full flex flex-col justify-start items-center py-4 relative  before:absolute before:w-full before:h-[1px] before:bg-slate-600 before:top-0 before:left-0 transition duration-700 ease-in-out active:bg-[rgba(0,0,0,0.1)]`} onClick={handleActive}>
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className='flex flex-row justify-start items-center gap-7'>
                        <p className='text-lg'>{no}</p>
                        <p className='text-lg'>{nama}</p>
                    </div>
                    <IoIosArrowDropdownCircle size={35} className={`text-secondary-blue ${active ? 'rotate-180' : ''}`} />
                </div>
            </div>
            <div className={`w-full flex flex-col justify-start items-start gap-2 pl-8.5 transition-all ease-in-out duration-500 overflow-hidden ${active ? 'max-h-[45rem] mb-6' : 'max-h-0'}`}>
                {children}
            </div>
        </>
    )
}









export default ContainerData;