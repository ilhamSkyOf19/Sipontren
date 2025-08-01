
const ButtonSubmit = ({ handleSubmit }) => {
    return (
        <button type='submit' className='flex-1 text-md py-4 px-6 flex flex-row justify-center items-center gap-2 bg-primary-blue rounded-lg shadow-md mb-5 text-white font-bold hover:bg-secondary-blue' onClick={handleSubmit}>Submit</button>
    )
}

export default ButtonSubmit
