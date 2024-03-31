/* eslint-disable react/prop-types */
const  Text=(props)=>{
    const  {children,type }=props
    return(
        <p
        type={type} 
        className="  inline-block  my-1  w-full border-black text-sm border rounded  border-r-8    border-stroke hover:shadow-cyan-400 shadow-lg transform hover:-translate-y-1 duration-300 border-t-8 hover:border-t-pink-400 hover:border-t-6 hover:border-r-8 drop-shadow-xl py-2 px-3 font-bold  hover:bg-black  hover:text-white"  
    >{children}</p>
)
    
}


export default Text