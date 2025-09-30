const ButtonDashboard = ({ label, children, handleOnClick }) => {
    return (
        <div className='flex w-[95%] flex-row justify-between items-center active:bg-secondary-blue cursor-pointer rounded-lg py-3 pl-3.5 pr-1'>
            <div className='flex flex-row justify-start items-center gap-2'>
                {children}
                <button type='button' onClick={handleOnClick} className='text-white text-sm'>{label}</button>
            </div>

        </div>
    )
}


// export 
export default ButtonDashboard;