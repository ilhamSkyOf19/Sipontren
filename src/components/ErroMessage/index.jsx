import clsx from "clsx"

const ErrorMessage = ({ error }) => {
    return (
        <div className="min-h-[1.4rem]">
            <p className={clsx(
                'text-[0.7rem] text-red-500 transition-opacity duration-300 md:text-sm lg:text-[0.7rem]',
                error ? 'opacity-100' : 'opacity-0'
            )}>
                {error?.message}
            </p>
        </div>
    )
}

export default ErrorMessage
