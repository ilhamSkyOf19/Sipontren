import { Link } from "react-router-dom"

// component action
const ComponentAction = ({ handleShowModalDelete, id, link, text }) => {
    return (
        <div className='w-full flex flex-row justify-between items-start mt-2'>
            <p className='text-sm flex-1'>Action</p>
            <div className='flex flex-row justify-start items-start flex-1/3 gap-2'>
                <p className='text-sm'>:</p>
                <Link to={`/admin/${link}/update/${id}`} className='text-sm py-2 px-3 bg-primary-blue rounded-lg text-white active:bg-secondary-blue'>Update</Link>
                <p className='text-sm py-2 px-3 bg-red-600 rounded-lg text-white active:bg-red-500' onClick={() => handleShowModalDelete(id)}>Delete</p>
            </div>
        </div>
    )
}

export default ComponentAction;