// component data file 
const ComponentDataFile = ({ data, handleShow, id, handleSetId }) => {
    return (
        <div className='w-full flex flex-row justify-between items-start mt-2'>
            <p className='text-sm flex-1'>{data}</p>
            <div className='flex flex-row justify-start items-start flex-1/3 gap-2'>
                <p className='text-sm'>:</p>
                <p className='text-sm py-2 px-3 bg-gray-700 text-white rounded-lg active:bg-gray-600' onClick={() => { handleShow(), handleSetId(id) }}> Preview</p>
            </div>
        </div >
    )
}

export default ComponentDataFile;