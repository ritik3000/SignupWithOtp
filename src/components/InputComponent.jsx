export const InputComponent = ({type, placeholder, value, onChange}) => {
    return <span className={"rounded-2xl text-3xl px-16 py-2 text-white cursor-pointer bg-blue-500"}>
        <input type={type} placeholder={placeholder}  value={value} onChange={onChange} 
        className="bg-blue-500 outline-none p-4 text-center"></input>
        </span>
    
}