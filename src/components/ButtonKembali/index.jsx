import { Link } from 'react-router-dom'

const ButtonKembali = ({ url }) => {
    return (
        <Link to={`${url}`} className='flex-1 text-md py-4 px-6 flex flex-row justify-center items-center gap-2 bg-slate-600 rounded-lg shadow-md mb-5 text-white font-bold hover:bg-slate-600'>Kembali</Link>
    )
}

export default ButtonKembali
