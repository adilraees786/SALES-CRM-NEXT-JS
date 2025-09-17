const Heading = ({ children, extraClassName, ...otherProps }) =>
{
    return (
        <p {...otherProps} className={` text-2xl text-secondaryText m-0 p p-0 font-bold ${ extraClassName }`}>
            {children}
        </p>
    )
}

export default Heading