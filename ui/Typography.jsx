export const Title = ({ children }) => {
    return (
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold text-purple-600 dark:text-purple-50 m-0'>
            {children}
        </h1>
    )
}

export const Small = ({ children }) => {
    return (
        <p className='text-xs lg:text-sm text-purple-600 dark:text-purple-50 font-normal'>
            {children}
        </p>
    )
}
