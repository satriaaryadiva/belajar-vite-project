/* eslint-disable react/prop-types */
const  Input=(props)=>{
    // eslint-disable-next-line no-unused-vars
    const  { type ,placeholder ,name}=props;


return(
<input 
        type={type} 
        className="  placeholder-shown:border-black text-sm border rounded 2-full py-2 px-3 placeholder: opacity-50 w-full text-black caret-pink-500 font-bold" 
        placeholder={placeholder}
        name={name}
      />
)

}

export default Input