export const Button = ({disabled, children, onClick}) => {
    return <span onClick={onClick} className={`rounded-2xl text-3xl px-20 py-6 text-white cursor-pointer
        ${disabled ? "bg-blue-200":"bg-blue-400"}`}>
        {children}
        </span>
    
}