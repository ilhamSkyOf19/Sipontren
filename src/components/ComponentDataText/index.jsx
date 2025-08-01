// component data text
const ComponentDataText = ({ data, value }) => {
    return (
        <div className='w-full flex flex-row justify-between items-start'>
            <p className='text-sm flex-1'>{data}</p>
            <div className='flex flex-row justify-start items-start flex-1/3 gap-2'>
                <p className='text-sm'>:</p>
                <p className='text-sm'>{value}</p>
            </div>
        </div>
    )
}


export default ComponentDataText;